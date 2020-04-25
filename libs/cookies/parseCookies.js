import cookie from 'cookie';

export default (req) => (cookie.parse(req ? req.headers.cookie || '' : document.cookie));
