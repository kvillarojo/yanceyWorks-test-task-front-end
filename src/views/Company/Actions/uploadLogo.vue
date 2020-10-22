<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <b-modal
            v-model="modalShow"
            title="Upload Logo"
            ref="modal"
            id="modal-prevent-closing"
            @ok="handleOk"
        >
            <div class="large-12 medium-12 small-12 cell">
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                </label>
            </div>
        </b-modal>
    </div>
</template>

<script>

import {BModal} from "bootstrap-vue";
import eventBus from "@/utils/eventBus";
import {CompanyService} from "@/services/CompanyService";

export default {
    props: {
        btn_name: String,
        company_id: Number
    },
    components: {BModal},
    data() {
        return {
            modalShow: false,
            isLoading: false,
            files: ''
        }
    },
    methods: {
        handleOk(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.handleSubmit()
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
        handleSubmit() {
            let formData = new FormData();
            formData.append('img', this.file);
            CompanyService.uploadLogo(this.company_id, formData)
            eventBus.$emit('get-companies');
            this.modalShow = false
        },
    }
}
</script>
