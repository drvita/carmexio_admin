export default defineNuxtRouteMiddleware(() => {
  const storage = useStorage();
  if (!storage.hasRole('root')) {
    console.log("[Middelware] Role unauthorizade");
    console.log("[Middelware] send to dashboard");
    return navigateTo("/dashboard");
  }
});
