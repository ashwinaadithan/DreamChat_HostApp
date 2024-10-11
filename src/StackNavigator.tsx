import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CometChatConversationsWithMessages} from '@cometchat/chat-uikit-react-native';
import {ChatInterfaceScreen} from './screens/ChatInterfaceScreen';

function StackNavigator(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Conversations">
        <Stack.Screen
          name="Conversations"
          component={CometChatConversationsWithMessages}
        />
        <Stack.Screen name="ChatInterface" component={ChatInterfaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
