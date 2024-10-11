import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Switch,
} from 'react-native';

export default function VideoScreen() {
  const [isOnline, setIsOnline] = React.useState(true);

  const toggleSwitch = () => setIsOnline(previousState => !previousState);

  return (
    <ImageBackground
      source={{
        uri: 'https://as2.ftcdn.net/v2/jpg/01/41/44/53/1000_F_141445369_TsyWghfSNyJ71O3F0Ibx4Yueyt9orduB.jpg',
      }}
      style={styles.backgroundImage}>
      {/* Header: Profile Info and Coin Count */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/1140016992/photo/cool-man-at-the-white-wall.jpg?s=612x612&w=0&k=20&c=R_djVAyZNjIMtE0uOnMFZOTA6FL_FBmbb5-QtOkygo8=',
              }}
              style={styles.profileImage}
            />
            <View style={styles.onlineIndicator} />
          </View>
          <View style={styles.profileText}>
            <Text style={styles.username}>Dan Adams</Text>
            <Text style={styles.handle}>@dan_adams1994</Text>
            <View style={styles.onlineStatus}>
              <Text style={styles.onlineText}>
                {isOnline ? 'Online' : 'Offline'}
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#00FF00'}}
                thumbColor={isOnline ? '#00FF00' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isOnline}
              />
            </View>
          </View>
        </View>
        <View style={styles.coinContainer}>
          <View style={styles.coinBox}>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/011/099/351/original/love-coin-icon-png.png',
              }}
              style={styles.coinIcon}
            />
            <Text style={styles.coinText}>15900</Text>
          </View>
        </View>
      </View>

      {/* Main Image */}
      <View style={styles.mainImageContainer}>
        <Image
          source={{
            uri: 'https://your-main-image-url.com', // Replace with main image
          }}
          style={styles.mainImage}
        />
      </View>

      {/* Status and Description */}
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Waiting for others</Text>
        <Text style={styles.descriptionText}>
          Note: There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00FF00', // Green dot for online status
  },
  profileText: {
    marginLeft: 10,
  },
  username: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  handle: {
    color: '#FFF',
    fontSize: 10,
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  onlineText: {
    color: '#FFF',
    marginRight: 5,
  },
  coinContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  coinIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  coinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  coinBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF', // Border around the coin
    borderRadius: 35,
  },
  mainImageContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  mainImage: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  statusContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  statusText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    color: '#DDD',
    textAlign: 'center',
    fontSize: 14,
  },
});
