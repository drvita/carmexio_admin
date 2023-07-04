<template>
    <NuxtLayout name="login">
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('Sign in to your account') }}
                </h1>
                <form class="space-y-4 md:space-y-6" action="#" @submit="handleLogin">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {{ $t('Your email') }}
                        </label>
                        <input type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@company.com" v-model="email">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            {{ $t('Password') }}</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            v-model="password">
                    </div>
                    <!-- <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-gray-500 dark:text-gray-300">{{ $t('Remember me')
                                }}</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            {{ $t('Forgot password?') }}
                        </a>
                    </div> -->
                    <button type="submit"
                        class="w-full text-white bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        {{ $t('Sign in') }}
                    </button>
                    <!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        {{ $t('Don’t have an account yet?') }}
                        <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            {{ $t('Sign in') }}
                        </a>
                    </p> -->
                </form>
            </div>
        </div>
    </NuxtLayout>
</template>
<script>
definePageMeta({
    middleware: ["loged"],
})

export default {
    data() {
        return {
            email: "",
            password: "",
            swal: null,
        };
    },
    methods: {
        async handleLogin(e) {
            e.preventDefault();
            const cx = new loginHlp();
            const credetials = { email: this.email, password: this.password };

            if (!this.validation) {
                console.error("[Login] Validacion fallo");
                return;
            }

            cx.login(credetials)
                .then((res) => {
                    if (res.data && res.token) {
                        console.log("[Login] Login complete");
                        return navigateTo("/dashboard");
                    }
                })
                .catch((err) => {
                    console.error("[Login] login failer:", err);
                    this.swal.fire({
                        position: 'top-end',
                        text: this.$t(err.message),
                        showConfirmButton: false,
                        timer: 2500,
                        toast: true,
                    });
                    this.email = "";
                    this.password = "";
                });

        },
    },
    computed: {
        validation() {
            const rgPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W_]).{8,}$/;
            const rgEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (!rgEmail.test(this.email)) {
                this.swal.fire({
                    position: 'top-end',
                    text: this.$t("Please, type e-mail valid"),
                    showConfirmButton: false,
                    timer: 2500,
                    toast: true,
                });
                return false;
            }

            if (this.password.length < 8) {
                this.swal.fire({
                    position: 'top-end',
                    text: this.$t("Please, type password valid"),
                    showConfirmButton: false,
                    timer: 2500,
                    toast: true,
                });
                return false;
            }

            return true;

        }
    },
    mounted() {
        const { $swal } = useNuxtApp();
        this.swal = $swal;
        console.log("[Login] Mounted form login");

    }
}
</script>