// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import {useRouter} from 'expo-router';
// import level from '../../assets/images/lavelIcon.png';
// import vipPoints from '../../assets/images/vip_icon.png';

// export default function ProfileScreen() {
//   const router = useRouter();

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton}>
//           <FontAwesome name="arrow-left" size={24} color="#333" />
//           <Text style={styles.headerTitle}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.editButton}
//           onPress={() => router.push('/ProfileEditScreen')}>
//           <FontAwesome name="edit" size={24} color="#333" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Card */}
//       <View style={styles.profileCard}>
//         <Image
//           source={{
//             uri: 'https://media.istockphoto.com/id/1140016992/photo/cool-man-at-the-white-wall.jpg?s=612x612&w=0&k=20&c=R_djVAyZNjIMtE0uOnMFZOTA6FL_FBmbb5-QtOkygo8=',
//           }}
//           style={styles.profileImage}
//         />
//         <Text style={styles.username}>Dan Adams</Text>
//         <View style={styles.infoRow}>
//           <Image
//             source={{
//               uri: 'https://static.vecteezy.com/system/resources/previews/011/099/351/original/love-coin-icon-png.png',
//             }}
//             style={styles.coinIcon}
//           />
//           <Text style={styles.coinText}>1590000</Text>
//           <Image
//             source={level}
//             style={{width: 24, height: 24}}
//             resizeMode="contain"
//           />
//           <Text style={styles.levelText}>Level 3</Text>
//           <Text style={styles.countryText}>🇮🇳 Ind</Text>
//         </View>
//         <View style={styles.statsRow}>
//           <View style={styles.statBox}>
//             <Text style={styles.statNumber}>1200</Text>
//             <Text style={styles.statLabel}>Total Fans</Text>
//           </View>
//           <View style={styles.statBox}>
//             <Text style={styles.statNumber}>5600</Text>
//             <Text style={styles.statLabel}>Total Followings</Text>
//           </View>
//         </View>
//       </View>

//       {/* Menu Items */}
//       <View style={styles.menuItem}>
//         <View style={styles.menuItemLeft}>
//           <Image
//             source={{
//               uri: 'https://static.vecteezy.com/system/resources/previews/011/099/351/original/love-coin-icon-png.png',
//             }}
//             style={styles.coinIcon}
//           />
//           <Text style={styles.menuText}>My Coins</Text>
//         </View>
//         <Text style={styles.coinAmount}>440</Text>
//       </View>
//       <View style={styles.menuItem}>
//         <View style={styles.menuItemLeft}>
//           <Image
//             source={vipPoints}
//             style={{width: 24, height: 24}}
//             resizeMode="contain"
//           />
//           <Text style={styles.menuText}>VIP Points</Text>
//         </View>
//         <Text style={styles.menuArrow}>›</Text>
//       </View>
//       <View style={styles.menuItem}>
//         <View style={styles.menuItemLeft}>
//           <FontAwesome name="history" size={24} color="#333" />
//           <Text style={styles.menuText}>History</Text>
//         </View>
//         <Text style={styles.menuArrow}>›</Text>
//       </View>
//       <View style={styles.menuItem}>
//         <View style={styles.menuItemLeft}>
//           <FontAwesome name="pie-chart" size={24} color="#333" />
//           <Text style={styles.menuText}>Income Report</Text>
//         </View>
//         <Text style={styles.menuArrow}>›</Text>
//       </View>
//       <View style={styles.menuItem}>
//         <View style={styles.menuItemLeft}>
//           <FontAwesome name="info" size={24} color="#333" />
//           <Text style={styles.menuText}>About Us</Text>
//         </View>
//         <Text style={styles.menuArrow}>›</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backText: {
//     fontSize: 24,
//     color: '#333',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10, // Space between back arrow and text
//   },
//   editButton: {
//     padding: 10,
//   },
//   profileCard: {
//     backgroundColor: '#ff5e5e',
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginBottom: 10,
//   },
//   username: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   coinIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 5,
//   },
//   coinText: {
//     color: '#fff',
//     marginRight: 10,
//   },
//   levelText: {
//     color: '#fff',
//     marginRight: 10,
//   },
//   countryText: {
//     color: '#fff',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginTop: 15,
//   },
//   statBox: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   menuItemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   menuText: {
//     fontSize: 16,
//     marginLeft: 10,
//     color: '#333',
//   },
//   coinAmount: {
//     fontSize: 16,
//     color: '#333',
//   },
//   menuArrow: {
//     fontSize: 16,
//     color: '#333',
//   },
// });
