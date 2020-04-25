import getConfig from 'next/config';

const { publicRuntimeConfig: { BUILD_ENV } } = getConfig();
// export const isProd = BUILD_ENV === 'production';
export const cookieName = 'ourCollegeTree_token';
