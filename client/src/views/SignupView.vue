<template>
    <div class="fullHeight flex items-center justify-center">
        <div class="w-4/12 p-4 mx-auto border bg-zinc-700 rounded-xl border-transparent">
            <h1 class="text-neutral-100 text-6xl text-center">Sign up</h1>
            <div class="text-neutral-100 pb-4">
                <div class="pb-4">
                    <label class="block mb-2">Username</label>
                    <input type="text" placeholder="Username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="true" v-model="username">
                </div>
                <div class="pb-4">
                    <label class="block mb-2">Email address</label>
                    <input type="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com" required="true" v-model="email">
                </div>
                <div class="pb-4">
                    <label class="block mb-2">Password</label>
                    <input type="password" placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="true" v-model="password">
                </div>
                <div class="pb-4">
                    <label class="block mb-2">Profile picture</label>
                    <input type="file" @change="getPicture"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="true">
                </div>
            </div>






            <button type="submit" @click="signup()"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                up</button>
            <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <p @click="routeLogin()"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</p>
            </div>
        </div>
    </div>
</template>

<script>

// import firebase from 'firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useFirebaseAuth, useCurrentUser, useFirebaseStorage, useStorageFile } from 'vuefire'
import { ref as storageRef } from 'firebase/storage'

// const auth = useFirebaseAuth()

export default {
    name: 'SignUp',
    components: {},
    data() {
        return {
            email: "",
            password: "",
            username: "",
            photoURL: "",
            auth: useFirebaseAuth(),
            storage: useFirebaseStorage(),
            currentUser: useCurrentUser(),
            picture: {},
        }
    },
    methods: {
        signup() {
            createUserWithEmailAndPassword(this.auth, this.email, this.password)
                .then(async (data) => {
                    console.log('Successfully logged in!', data);
                    this.currentUser = useCurrentUser()
                    await this.updateNewProfile()

                })
                .catch(error => {
                    console.log(error.code)
                    alert(error.message);
                });
        },
        getPicture(event) {
            this.picture = event.target.files[0];
            console.log(this.picture)
        },

        async updateNewProfile() {
            await this.uploadProfilePicture();
            await updateProfile(this.currentUser, { displayName: this.username, photoURL: this.photoURL })
            console.log("efter uppdatering", useCurrentUser());
            this.$router.push("/home")
        },

        async uploadProfilePicture() {
            if (this.picture) {
                const filePath = "users/" + this.currentUser.uid + "/" + this.picture.name;
                const mountainFileRef = storageRef(this.storage, filePath)

                const {
                    url,
                    // // gives you a percentage between 0 and 1 of the upload progress
                    // uploadProgress,
                    // uploadError,
                    // // firebase upload task
                    refresh,
                    upload,
                } = useStorageFile(mountainFileRef)

                await upload(this.picture);
                await refresh()
                this.photoURL = url;
            }


        },

        routeLogin() {
            this.$router.push("/")
        }
    }
}
</script>