import { User, Storage } from "../interfaces/storage";

export default () => {
  const nameStorage = "carmexio";
  const initialStorage: Storage = {
    token: "",
    data: {},
  };
  const dataLocalStorage = localStorage.getItem(nameStorage);
  const storage = ref(
    dataLocalStorage ? JSON.parse(dataLocalStorage) : initialStorage
  );

  const setSession = (data: Storage) => {
    localStorage.setItem(nameStorage, JSON.stringify(data));
    storage.value = data;
  };
  const deleteSession = async () => {
    const data: Storage = storage.value;
    data.token = "";
    data.data = {};
    setSession(data);
  };

  const getToken = (): string => {
    const data: Storage = storage.value;
    return data.token;
  };
  const getUser = (): User => {
    const { data }: Storage = storage.value;
    return data;
  };

  return {
    setSession,
    deleteSession,
    getToken,
    getUser,
  };
};
