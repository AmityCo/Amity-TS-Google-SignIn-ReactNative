import React, {useState, useContext} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {handleConnect} from '../amity/signIn';
import {ClientContext} from '../amity/amityClients';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: 'webClientId', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: 'webClientId', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

// Somewhere in your code
const SignIn = (props: {onSignedIn: any}): JSX.Element => {
  const {onSignedIn} = props;
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const client = useContext(ClientContext);
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const name = userInfo.user.name || '';
      await handleConnect(userInfo.user.email, name);
      AuthHandler(client, onSignedIn);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSigninInProgress(false);
    }
  };
  return (
    <GoogleSigninButton
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={async () => {
        setIsSigninInProgress(true);
        await _signIn();
      }}
      disabled={isSigninInProgress}
    />
  );
};

const AuthHandler = (client, onSignedIn) => {
  switch (client.sessionState) {
    case 'established':
    case 'tokenExpired':
      // open home page
      onSignedIn();
      break;

    case 'terminated':
      // open user banned page
      console.log('home page');
      break;

    case 'notLoggedIn':
    case 'establishing':
    default:
    // redirect to login page
  }
};

export {SignIn};
