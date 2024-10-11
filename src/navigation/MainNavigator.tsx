import React from 'react';
import {useAuth} from '../context/AuthContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default function MainNavigator() {
  const {user, isLoading, isSignedIn} = useAuth();
  return <>{isSignedIn ? <AppNavigator /> : <AuthNavigator />}</>;
}
