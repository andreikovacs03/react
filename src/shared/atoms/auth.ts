import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { Auth } from '~/shared/types/user';

const { persistAtom } = recoilPersist();

export const authAtom = atom({
  key: 'auth',
  // get initial state from local storage to enable user to stay logged in
  default: null as Auth,
  effects_UNSTABLE: [persistAtom],
});
