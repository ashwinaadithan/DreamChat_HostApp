import React, {useEffect} from 'react';
import {CometChatMessages} from '@cometchat/chat-uikit-react-native';
import {CometChat} from '@cometchat/chat-sdk-react-native';

export const ChatInterfaceScreen = ({navigation}) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchedUser = await CometChat.getUser('test1');
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <CometChatMessages
      user={user}
      messageHeaderConfiguration={{
        onBack: () => navigation.goBack(),
      }}
    />
  );
};
