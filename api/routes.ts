const config = useRuntimeConfig();

export default class Routes {
  static host = config.public.API_URL; // "http://localhost:8010/api/v1/";
}
