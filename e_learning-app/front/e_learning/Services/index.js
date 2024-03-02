import { request, gql, } from 'graphql-request';

const MASTER_URL = "https://api-eu-west-2.hygraph.com/v2/clrh3sfyw12vw01w9t7o5dfxc/master";

export const getCourseList = async (level) => {
  const query = gql`
    query CourseList {
      courses(where: { level: `+level+` }) {
        id
        name
        level
        price
        tags
        time
        author
        bannerForLeadership {
          url
        }
        chapters {
          ... on Chapter {
            content {
              markdown
            }
            title
            outPut {
              markdown
            }
            id
            heading {
              markdown
            }
          }
        }
        description {
          markdown
        }
        }
        }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};


// Enrolling courses to user
export const enrollCourse=async(courseId,userEmail)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+userEmail+`", course: {connect: {id: "`+courseId+`"}}
    ) {
      id
    }
    publishManyUserInrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `
const result = await request(MASTER_URL, mutationQuery);
return result;
}


export const getUserEnrolledCourse=async(courseId)=>{
  const query=gql`
  query GetUserEnrolledCourse {
    userInrolledCourses(where: {courseId: `+courseId+`}) {
      courseId
      completedChapter {
        chapterId
      }
    }
  }
  
  `
const result = await request(MASTER_URL, query);
return result;
}
