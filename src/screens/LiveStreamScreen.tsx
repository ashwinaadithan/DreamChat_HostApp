import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function LiveStreamScreen() {
  return (
    <ImageBackground
      source={{
        uri: 'https://media.istockphoto.com/id/1140016992/photo/cool-man-at-the-white-wall.jpg?s=612x612&w=0&k=20&c=R_djVAyZNjIMtE0uOnMFZOTA6FL_FBmbb5-QtOkygo8=', // Replace with a pre-blurred image URL
      }}
      style={styles.backgroundImage}>
      {/* Gradient Overlay to simulate blur */}
      <View style={styles.gradientOverlay} />

      <View style={styles.contentContainer}>
        {/* Profile Picture with Crown */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1140016992/photo/cool-man-at-the-white-wall.jpg?s=612x612&w=0&k=20&c=R_djVAyZNjIMtE0uOnMFZOTA6FL_FBmbb5-QtOkygo8=', // Replace with profile image URL
            }}
            style={styles.profileImage}
          />
          {/* Crown Image with Border */}
          <View style={styles.crownContainer}>
            <Image
              source={{
                uri: 'https://pngfre.com/wp-content/uploads/Gold-Crown-31.png', // Replace with crown image URL
              }}
              style={styles.crownImage}
            />
          </View>
        </View>

        {/* Username and Coin Count */}
        <Text style={styles.username}>Dan Adams</Text>
        <Text style={styles.handle}>@dan_adams_1994</Text>

        <View style={styles.coinContainer}>
          <View style={styles.coinBox}>
            <Image
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/011/099/351/original/love-coin-icon-png.png', // Replace with coin icon URL
              }}
              style={styles.coinIcon}
            />
            <Text style={styles.coinText}>15900</Text>
          </View>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Hello! dear Dan Adams</Text>
        <Text style={styles.instructionText}>
          Start your live streaming and get your gifts
        </Text>

        {/* Start Streaming Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Streaming</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark semi-transparent overlay to simulate blur
    zIndex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  profileContainer: {
    borderWidth: 3,
    borderColor: '#FFFFFF', // Gold color for the border
    borderRadius: 100,
    padding: 0,
    marginBottom: 20,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  crownContainer: {
    position: 'absolute',
    top: -3,
    right: -3,
    borderWidth: 2,
    borderColor: '#FFFFFF', // Gold border around crown
    borderRadius: 15,
    padding: 2,
    backgroundColor: '#FFFFFF', // White background to make crown stand out
  },
  crownImage: {
    width: 20,
    height: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  handle: {
    fontSize: 10,
    color: '#A0A0A0',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  coinBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF', // Border around the coin
    borderRadius: 35,
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
  welcomeText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 20,
  },
  instructionText: {
    fontSize: 14,
    color: '#A0A0A0',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
