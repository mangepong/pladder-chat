<template>
    <div class="text-white w-[calc(100%-500px)] h-[calc(100vh - 60px)] chat-window">
        
    </div>
</template>

<script>

export default {
    name: 'ChatWindow',
    components: {
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
    mounted() {},
    methods: {
    }
}
</script>