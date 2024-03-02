from typing import List
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
engine = create_engine('sqlite:///app.db', echo=True)  # Replace 'your_database.db' with your database file
from datetime import datetime, date, timedelta
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy import or_
from werkzeug.security import generate_password_hash, check_password_hash
import hashlib
import pytz
import moment

from flask_sqlalchemy import SQLAlchemy

#  new code
db = SQLAlchemy()

from app import app, db

class Users(db.Model):
    __tablename__ = 'users'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True, index=True)
    fullname = db.Column(db.String(50))
    email = db.Column(db.String(50), unique=True)
    dateOfBirth = db.Column(db.String(50))
    password = db.Column(db.String(150))
    timestamp = db.Column(db.DateTime, default=datetime.now())

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    def set_password(self, password: str):
        self.password = generate_password_hash(password)

    def check_password(self, password: str):
        return check_password_hash(self.password, password)

    @classmethod
    def find_by_id(cls, _id: int) -> "Users":
        return cls.query.get(_id)

    @classmethod
    def find_by_email(cls, email: str) -> "Users":
        return cls.query.filter_by(email=email).first()
    

class Subscription(db.Model):
    __tablename__ = 'subscription'
    subscriptor_id = db.Column(db.Integer, primary_key=True, index=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Ensure correct table name for the foreign key
    plan_name = db.Column(db.String(250), nullable=False)
    plan_type = Column(String(250), nullable=False)
    start_date = Column(DateTime, index=True, nullable=False)
    end_date = Column(DateTime, index=True, nullable=False)
    status = Column(String(100))
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, _id: int) -> "Subscription":
        return cls.query.get(_id)

    @classmethod
    def find_by_userid(cls, _userid: int) -> "Subscription":
        return cls.query.filter_by(user_id=_userid).first()


class Request(db.Model):
    __tablename__ = 'Request'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))  # Ensure correct table name for the foreign key
    request_name = db.Column(db.String(250), nullable=False)
    request_description = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)  # Optional: default value for timestamp
    
@classmethod
def find_by_id(cls, _id: int) -> "Request":
    return cls.query.filter_by(id=_id).first()

from app import db  # Import the db object from your Flask app  
    
class Courses(db.Model):
    id = db.Column(db.Integer, primary_key=True, index=True)
    coursesname = db.Column(db.String(50))
    coursesdescription = db.Column(db.String(50))
    price = db.Column(db.Float, nullable=False)
    courseslevel = db.Column(db.String(150))
    coursesimage = db.Column(db.String(150))
    coursesauthor = db.Column(db.String(150))
    timestamp = db.Column(db.DateTime, default=datetime.now())


    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()
    
    @classmethod
    def find_by_id(cls, _id: int) -> "Courses":
        return cls.query.filter_by(id=_id).first()
    
    @classmethod
    def find_by_author(cls, id: int) -> "Users":
        return cls.query.filter_by(id=id).first()


class Payment(db.Model):
    __tablename__ = 'Payment'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    username = db.Column(db.String(20), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default='Pending')

    @staticmethod
    def create_payment(amount: float, user_id: int) -> "Payment":
        new_payment = Payment(amount=amount, user_id=user_id)
        db.session.add(new_payment)
        db.session.commit()
        return new_payment


