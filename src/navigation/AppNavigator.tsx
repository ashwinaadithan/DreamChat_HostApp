import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CometChatConversationsWithMessages} from '@cometchat/chat-uikit-react-native';
import {ChatInterfaceScreen} from '../screens/ChatInterfaceScreen';
import LiveStreamScreen from '../screens/LiveStreamScreen';
import VideoChatScreen from '../screens/VideoChatScreen';
import OtpScreen from '../screens/OtpScreen';
import ProfileScreen from '../screens/ProfileScreen';

function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Conversations">
        <Stack.Screen
          name="Conversations"
          component={CometChatConversationsWithMessages}
        />
        <Stack.Screen name="ChatInterface" component={ChatInterfaceScreen} />
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} />
        <Stack.Screen name="VideoChat" component={VideoChatScreen} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        {/* <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} /> */}
        <Stack.Screen name="Otp" component={OtpScreen} />
        {/* <Stack.Screen name="NavBar" component={NavBarScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
