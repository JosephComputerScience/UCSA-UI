type AppConfig = {
  apiBaseUrl: string;
};
const prod: AppConfig = {
  apiBaseUrl: '',
};
const local: AppConfig = {
  ...prod,
  apiBaseUrl: 'http://localhost:8080',
};

const getConfig = () => {
  if (window.location.href.includes('localhost')) {
    return local;
  }
  return prod;
};

export default getConfig();
