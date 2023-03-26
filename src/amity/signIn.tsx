import {connectClient} from '@amityco/ts-sdk'

const getAuthToken = async () => {
  return 'AuthToken';
};

const sessionHandler: Amity.SessionHandler = {
  async sessionWillRenewAccessToken(renewal) {
    try {
      const updatedAuthToken = await getAuthToken();
      renewal.renewWithAuthToken(updatedAuthToken);
    } catch (error) {
      renewal.unableToRetrieveAuthToken();
    }
  },
};

const handleConnect = async (userId: string, displayName: string) => {
  const authToken = await getAuthToken();
  await connectClient({userId, displayName, authToken}, sessionHandler);
};

export {handleConnect};
