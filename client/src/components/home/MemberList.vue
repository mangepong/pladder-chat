<template>
    <div class="text-white w-[250px] h-[calc(100vh - 60px)] memberList absolute top-[32px] bottom-0 right-0">
        <div class="w-full text-center h-[60px] memberHeader flex justify-center items-center">
            <h1>Members</h1>
        </div>
        <div v-for="member in members" :key="member.uid" class=" flex items-center justify-center">
            <div class="flex items-center w-[230px] mt-[20px] member">
                <img class="w-[40px] h-[40px] rounded-full ml-[20px] mr-[10px]" :src="member.photoURL">
                <p>{{ member.displayName }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MemberList',
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
    watch: {
        currentServer: {
            handler: function () {
                this.getMembers();
            },
            deep: false,
            immediate: true,
            once: true
        }
    },
    mounted() {},
    methods: {
        getMembers() {
            if (this.currentServer) {
                this.currentServer.members.forEach(member => {
                    this.members.push(JSON.parse(member))
                });
            }
        }
    }
}
</script>