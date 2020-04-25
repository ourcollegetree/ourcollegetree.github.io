 import user from '../../components/user/LoginSlice';
// import store from '../../components/admin/layout/StoreSlice';
import {combineReducers} from 'redux';

const reducers = combineReducers({
   user,
  // store,
});
export default reducers;

