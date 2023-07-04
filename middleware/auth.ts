import { User } from "../interfaces/storage";
import { Response } from "../interfaces/users";

export default defineNuxtRouteMiddleware(() => {
  const storage = useStorage();
  const token = storage.getToken();
  if (!token) {
    return navigateTo("/login");
  }

  const users = new usersHlp();
  console.info("[Auth] Validating...");
  users.get().then((res: Response) => {
    const currentUser: User = storage.getUser();

    if (!res.data || res.data.id !== currentUser.id) {
      console.error("[Auth] Session not valid");
      storage.deleteSession();
      return navigateTo("/login");
    }

    console.info("[Auth] Validate: ok");
  });
});
