// // App.js
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Image, View, Text, SafeAreaView} from 'react-native';
// import ProfileScreen from './ProfileScreen';
// import LiveStreamScreen from './LiveStreamScreen';
// import VideoChatScreen from './VideoChatScreen';
// import {ChatInterfaceScreen} from './ChatInterfaceScreen';

// function AddScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Add!</Text>
//     </View>
//   );
// }

// // function ProfileScreen() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       <Text>Profile!</Text>
// //     </View>
// //   );
// // }

// const Tab = createBottomTabNavigator();

// export default function Dashboard() {
//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           headerStyle: {
//             backgroundColor: '#f4511e', // Change this to your desired color
//           },
//           headerShown: false,
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;
//             let iconComponent;
//             let iconSource;

//             if (route.name === 'Home') {
//               iconSource = focused
//                 ? require('../assets/navHome.png')
//                 : require('../assets/navHome-outline.png');
//             } else if (route.name === 'Add') {
//               iconSource = focused
//                 ? require('../assets/navAdd.png')
//                 : require('../assets/navAdd.png');
//             } else if (route.name === 'Profile') {
//               iconSource = focused
//                 ? require('../assets/profileIcon.png')
//                 : require('../assets/profileIcon.png');
//             } else if (route.name === 'Story') {
//               iconSource = focused
//                 ? require('../assets/navgallry.png')
//                 : require('../assets/navgallry-outline.png');
//             } else if (route.name === 'hh') {
//               iconSource = focused
//                 ? require('../assets/navAward.png')
//                 : require('../assets/lavelIcon-outline.png');
//             }

//             return (
//               <View style={{alignItems: 'center', justifyContent: 'center'}}>
//                 {route.name === 'Add' ? (
//                   <View
//                     style={{
//                       width: 48,
//                       height: 48,
//                       borderRadius: 24,
//                       backgroundColor: 'white',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       marginTop: -24,
//                       borderColor: 'gray',
//                       borderWidth: 1,
//                       shadowColor: '#000',
//                       shadowOffset: {
//                         width: 0,
//                         height: 2,
//                       },
//                       shadowOpacity: 0.23,
//                       shadowRadius: 2.62,
//                       elevation: 4,
//                     }}>
//                     <Image
//                       source={iconSource}
//                       style={{width: 24, height: 24}}
//                     />
//                   </View>
//                 ) : (
//                   <Image source={iconSource} style={{width: 24, height: 24}} />
//                 )}
//               </View>
//             );
//           },
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: 'red',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: {
//             backgroundColor: 'white',
//             borderTopWidth: 0,
//             elevation: 10,
//             height: 60,
//           },
//         })}>
//         <Tab.Screen name="LiveStream" component={LiveStreamScreen} />
//         <Tab.Screen name="VideoChat" component={VideoChatScreen} />
//         <Tab.Screen name="Add" component={AddScreen} />
//         <Tab.Screen name="Conversations" component={ChatInterfaceScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </>
//   );
// }
