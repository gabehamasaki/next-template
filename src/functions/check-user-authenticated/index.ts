import { getStorageItem } from '../../utils';

export const checkUserAuthenticated = () => {
  const userToken = getStorageItem('UserAuthenticatedToken');

  return !!userToken;
};
