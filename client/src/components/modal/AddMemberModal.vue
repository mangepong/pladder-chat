<template>
    <div v-if="isOpen" class="modal-mask text-black">
        <div class="modal-wrapper">
            <div class="modal-container" ref="target">
                <div class="modal-header">
                    <slot name="header"> default header </slot>
                </div>
                <div class="modal-body">
                    <slot name="content"> default content </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <div>
                            <button @click="closeModal()">Submit</button>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddMemberModal',
    components: {
        
    },
    data() {
        return {
            currentUser: {},
            members: [],
        }
    },
    props: {
        isOpen: Boolean
    },
    mounted() { },
    methods: {
        closeModal() {
            this.$emit("modal-close");
        }
    }
}
</script>