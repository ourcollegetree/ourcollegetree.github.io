import Cookie from 'js-cookie';
import { cookieName } from '../../config/Config';

export const setCookie = (key) => {
  Cookie.set(cookieName, key, { expires: 30 });
};

export const deleteCookie = () => { Cookie.remove(cookieName); };
