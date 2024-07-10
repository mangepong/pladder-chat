<template>
    <div class="text-white w-[calc(100%-575px)] h-[calc(100vh - 60px)] chat-window overflow-hidden">

        <div class="p-5 overflow-auto h-[calc(100vh-120px)]">
            <chat-bubble class="pb-[20px]" :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                <chat-bubble :message-text="'Hej detta är ett test på chat bubblan'" :username="'Mange'"
                :timestamp="'11:46'"
                :imgURL="'https://firebasestorage.googleapis.com/v0/b/pladder-4aa1e.appspot.com/o/users%2Fsc0MvxaZnETDsfoYHt3niKHnhQn2%2Fprofilpic.png?alt=media&token=b5ea6f20-5dfd-4c66-9fed-0b61b7c1c586'" />
                
        </div>


        <!-- Input -->
        <div class="flex items-center justify-center bottom-0 absolute w-[calc(100%-575px)]">
            <div
                class="flex items-center h-[40px] input-div mb-[30px] w-[calc(100%-30px)]">
                <input type="text" placeholder="Message" class="chatinput w-[calc(80%)] ml-[40px]">
            </div>
        </div>
    </div>
</template>

<script>
import ChatBubble from './chat/ChatBubble.vue'

export default {
    name: 'ChatWindow',
    components: {
        ChatBubble
    },
    data() {
        return {
            currentUser: {},
            members: [],
        }
    },
    props: {
        currentServer: {}
    },
    mounted() { },
    methods: {
    }
}
</script>