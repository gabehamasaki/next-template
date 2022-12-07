import { APP_KEY } from 'utils/localStorage';

import { checkUserAuthenticated } from '.';

beforeEach(() => {
  window.localStorage.clear();
});

describe('checkUserAuthenticated', () => {
  it('should return true when user is authenticated', () => {
    window.localStorage.setItem(
      `${APP_KEY}_UserAuthenticatedToken`,
      JSON.stringify({ token: 'token' })
    );

    expect(checkUserAuthenticated()).toEqual(true);
  });

  it('should return false when user is not authenticated', () => {
    expect(checkUserAuthenticated()).toEqual(false);
  });
});
