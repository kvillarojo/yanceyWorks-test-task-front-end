<template>
    <b-modal
        v-model="showAble"
        :title="title"
        id="modal-prevent-closing"
        @ok="submit"
    >
        <slot />
    </b-modal>
</template>

<script>
import {BModal} from "bootstrap-vue";

export default {
    props: {
        show: Boolean,
        title: String,
        submit: Function
    },
    data () {
        return {
            showAble: false
        }
    },
    watch : {
        show: function (val) {
            this.showAble = val
        }
    },
    components: {BModal}
}
</script>
