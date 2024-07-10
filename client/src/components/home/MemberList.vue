<template>
    <div class="text-white w-[250px] h-[calc(100vh - 60px)] memberList absolute top-[32px] bottom-0 right-0">
        <div class="w-full text-center h-[60px] memberHeader flex justify-center items-center">
            <h1 class="unselectable">Members</h1>
        </div>
        <div class="mt-[15px] ml-[25px] w-[200px] textChannel text-sm grid-flow-row-dense flex items-center justify-center" @click="onModalOpen()">
            <p class="ml-[10px]">Add members</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6 ml-[10px]">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>

        </div>
        <div v-for="member in members" :key="member.uid" class=" flex items-center justify-center">
            <div class="flex items-center w-[230px] mt-[20px] member unselectable">
                <img class="w-[40px] h-[40px] rounded-full ml-[20px] mr-[10px]" :src="member.photoURL">
                <p>{{ member.displayName }}</p>
            </div>
        </div>
        <add-member-modal :is-open="modalOpen" @modal-close="closeModal()"/>
    </div>
</template>

<script>

import AddMemberModal from "@/components/modal/AddMemberModal.vue"

export default {
    name: 'MemberList',
    components: {
        AddMemberModal
    },
    data() {
        return {
            currentUser: {},
            members: [],
            modalOpen: false,
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
    mounted() { },
    methods: {
        getMembers() {
            if (this.currentServer) {
                this.currentServer.members.forEach(member => {
                    this.members.push(JSON.parse(member))
                });
            }
        },
        onModalOpen() {
            if (!this.modalOpen) {
                this.modalOpen = true;
                console.log("open");
            }
        },
        closeModal() {
            if (this.modalOpen) {
                this.modalOpen = false;
                console.log("close");
            }
        }
    }
}
</script>