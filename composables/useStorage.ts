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
  const updateDataSession = (data: User) => {
    const dataStorage: Storage = storage.value;
    
    if(data.name){
      dataStorage.data.name = data.name;
    }
    if(data.gender){
      dataStorage.data.gender = data.gender;
    }
    if(data.phones && Array.isArray(data.phones)){
      dataStorage.data.phones = data.phones;
    }

    localStorage.setItem(nameStorage, JSON.stringify(dataStorage));
    storage.value = data;
    console.log("[Storage] it was updated");
  };

  const getToken = (): string => {
    const data: Storage = storage.value;
    return data.token;
  };
  const getUser = (): User => {
    const { data }: Storage = storage.value;
    return data;
  };
  const hasRole = (role: string = ""): boolean => {
    const { data }: Storage = storage.value;
    const acl = data.roles?.find(r => r.name === role);

    return acl ? true : false;
  };

  return {
    setSession,
    updateDataSession,
    deleteSession,
    getToken,
    getUser,
    hasRole,
  };
};
