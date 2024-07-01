<template>
    <div class="text-white w-[250px] h-[calc(100vh - 60px)] channelList">

        <div class="w-full text-center h-[60px] serverHeader flex justify-center items-center">
            <h1>{{ currentServer.serverName }}</h1>
        </div>

        <div>
            <div class="mt-[20px] ml-[40px] text-sm">
                <p>Text Channels</p>
            </div>
            <hr class="channelHeader w-[200px] mx-auto mt-[10px]">
            <div v-for="textChannel in currentServer.textChannels" :key="textChannel.id"
                class="mt-[15px] ml-[25px] w-[200px] textChannel text-sm grid-flow-row-dense flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 ml-[10px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>


                <p class="ml-[10px]">{{ textChannel.name }}</p>
            </div>
        </div>

        <div>
            <div class="mt-[20px] ml-[40px] text-sm">
                <p>Voice Channels</p>
            </div>
            <hr class="channelHeader w-[200px] mx-auto mt-[10px]">

            <div v-for="voiceChannel in currentServer.voiceChannels" :key="voiceChannel.id"
                class="mt-[15px] ml-[25px] w-[200px] textChannel text-sm grid-flow-row-dense flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4 ml-[10px]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>
                <p class="ml-[10px]">
                    {{ voiceChannel.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
//   import { useDatabaseList, useDatabase, useCurrentUser } from 'vuefire';
//   import { ref as dbRef } from 'firebase/database'

export default {
    name: 'ChannelList',
    data() {
        return {
            currentUser: {},
            // currentServer: {},
            // db: useDatabase(),
        }
    },
    props: {
        currentServer: {}
    },
    mounted() {
        //   this.currentUser = useCurrentUser();
        //   const db = useDatabase()
        //   this.currentServer = useDatabaseList(dbRef(db, 'servers/', (this.currentUser.uid + this.currentUser.uid))).value[0]
        console.log(this.currentServer)

    },
    components: {
    }
}
</script>