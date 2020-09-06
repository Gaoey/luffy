
import {
  atom,
  selector,
  useRecoilCallback
} from 'recoil';
import userAPI from "./userAPI";

const usersState = atom({
  key: 'Users',
  default: [],
});

export {
  usersState
}