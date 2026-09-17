export const APP_ENV = import.meta.env.VITE_APP_ENV || 'development';
export const IS_PRODUCTION = APP_ENV === 'production';

// Password separation: development password vs production surprise password
export const ACCESS_PASSWORD =
  import.meta.env.VITE_ACCESS_PASSWORD || (IS_PRODUCTION ? 'celebrate' : 'password');

export const getAccessPassword = (): string => ACCESS_PASSWORD;
