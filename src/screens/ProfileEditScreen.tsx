import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import {useRouter} from 'expo-router';

const ProfileEditScreen = () => {
  const router = useRouter();
  const [profileName, setProfileName] = useState('Dan Adams');
  const [email, setEmail] = useState('dan.adams@example.com');
  const [country, setCountry] = useState<CountryCode>('IN');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);
  const [gallery, setGallery] = useState<Array<{uri: string; type: string}>>(
    [],
  );

  const uploadFromCamera = (
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    launchCamera(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.assets?.length) {
          setPhoto(response.assets[0].uri || null);
        }
      },
    );
  };

  const uploadFromLibrary = (
    setPhoto: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response?.assets?.length) {
          setPhoto(response.assets[0].uri || null);
        }
      },
    );
  };

  const addToGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'mixed',
      },
      response => {
        if (response?.assets?.length) {
          const {uri, type} = response.assets[0];
          setGallery([...gallery, {uri: uri || '', type: type || ''}]);
        }
      },
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Edit Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Edit Profile Information */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={profileName}
          onChangeText={setProfileName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Country</Text>
        <CountryPicker
          countryCode={country}
          onSelect={selectedCountry => setCountry(selectedCountry.cca2)}
        />

        {/* Profile and Cover Photo Upload */}
        <View style={styles.photoSection}>
          <Text style={styles.label}>Profile Photo</Text>
          <TouchableOpacity
            style={styles.photoButton}
            onPress={() => uploadFromLibrary(setProfilePhoto)}>
            <Text>Upload Profile Photo</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Cover Photo</Text>
          <TouchableOpacity
            style={styles.photoButton}
            onPress={() => uploadFromLibrary(setCoverPhoto)}>
            <Text>Upload Cover Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Add to Gallery */}
        <TouchableOpacity style={styles.galleryButton} onPress={addToGallery}>
          <Text>Add to Gallery</Text>
        </TouchableOpacity>

        {/* Save Changes Button */}
        <Button
          title="Save Changes"
          onPress={() => console.log('Changes saved')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileEditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  photoSection: {
    marginBottom: 20,
  },
  photoButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  galleryButton: {
    backgroundColor: '#ff5e5e',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
});
