// import { View, Text } from 'react-native'
// import React from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// export default function ProgressBar({contentLength, contentIndex}) {
//   const arraySize=Array.from({length:contentLength},(_,index)=>index+1);
//   const width=100/contentLength;
//   return (
//     <View>
//      {arraySize.map((item,index)=>(
//       <View style={{backgroundColor:Colors.SECONDARY,
//         width:width,borderRadius:10, height:10,margin:5
//       }}>
     

//       </View>
//      ))}
//       <Text>Hello</Text>
//     </View>
//   )
// }

import { View, Text } from 'react-native'
import React from 'react'

export default function ProgressBar() {
  return (
    <View>
      <Text>ProgressBar</Text>
    </View>
  )
}

// import React, { useState } from 'react';
// import { View, StyleSheet, Animated } from 'react-native';

// const ProgressBar = ({ progress }) => {
//   const [animatedWidth, setAnimatedWidth] = useState(0);

//   React.useEffect(() => {
//     Animated.timing(animatedWidth, {
//       toValue: progress * 100, // Adjust max width based on container size
//       duration: 1000, // Adjust animation duration in milliseconds
//       useNativeDriver: true, // Use native driver for potentially better performance
//     }).start();
//   }, [progress]);

//   return (
//     <View style={styles.progressBarContainer}>
//       <Animated.View style={[styles.progressBar, { width: animatedWidth }]} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   progressBarContainer: {
//     height: 10, // Adjust height as needed
//     backgroundColor: '#ddd', // Background color for the unfilled progress bar
//     borderRadius: 10, // Adjust border radius for rounded corners
//   },
//   progressBar: {
//     height: '100%', // Fill entire height of container
//     backgroundColor: '#007bff', // Color of the filled progress bar
//     borderRadius: 10, // Match container's border radius
//   },
// });

// export default ProgressBar;




