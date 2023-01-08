import { SITE_URL } from 'constants/base';

//-----------------------------------------------------------
// type
//-----------------------------------------------------------
export type IUseEnv = {
  getEnvUrl: () => string;
};

//-----------------------------------------------------------
// hooks
//-----------------------------------------------------------
export const useEnv = (): IUseEnv => {
  //-----------------------------------------------------------
  // envによってURLを変更する
  //-----------------------------------------------------------
  const getEnvUrl = (): string => {
    return process.env.NODE_ENV === 'production' ? SITE_URL : 'http://localhost:3000';
  };

  return {
    getEnvUrl
  };
};