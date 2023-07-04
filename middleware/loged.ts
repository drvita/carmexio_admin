export default defineNuxtRouteMiddleware(() => {
  const storage = useStorage();
  const token = storage.getToken();
  if (token) {
    return navigateTo("/dashboard");
  }
});
