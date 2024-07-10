<template>
    <div class="w-4/12 p-4 mx-auto border bg-zinc-700 rounded-xl border-transparent">
        <h1 class="text-neutral-100 text-6xl text-center">Log in</h1>
        <div class="text-neutral-100 pb-4">
            <div class="pb-4">
                <label class="block mb-2">Email address</label>
                <input type="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com" required="true" v-model="email">
            </div>
            <div>
                <label class="block mb-2">Password</label>
                <input type="password" placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="true" v-model="password">
            </div>
        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded" required="">
                </div>
                <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                password?</a>
        </div>
        <button type="submit" @click="login()"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
            in</button>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? <p @click="routeSignup()"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</p>
        </div>
    </div>
</template>

<script>

// import firebase from 'firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire'

// const auth = useFirebaseAuth()

export default {
    name: 'LoginForm',
    components: {},
    data() {
        return {
            email: "",
            password: "",
            auth: useFirebaseAuth(),
        }
    },
    methods: {
        login() {
            this.email = "mange2@mange.se";
            this.password = "test123"
            signInWithEmailAndPassword(this.auth, this.email, this.password)
                .then((data) => {
                    console.log('Successfully logged in!', data);
                    this.$router.push("/home")
                })
                .catch(error => {
                    console.log(error.code)
                    alert(error.message);
                });
            // firebase
            //     .auth()
            //     .signInWithEmailAndPassword(this.email, this.password)
            //     .then((data) => {
            //         console.log('Successfully logged in!', data);
            //         this.$router.push("/home")
            //     })
            //     .catch(error => {
            //         console.log(error.code)
            //         alert(error.message);
            //     });
        },
        routeSignup() {
            this.$router.push("/signup");
        }
    }
}
</script>