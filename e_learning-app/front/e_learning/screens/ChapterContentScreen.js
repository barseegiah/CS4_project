import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import Content from '../components/ChapterContent/Content';
import ProgressBar from '../components/ChapterContent/ProgressBar';

export default function ChapterContentScreen() {
  const params = useRoute().params;
  // const { content } = params;

  return (
    <View>
     <Content/>
    </View>
  );
}



