<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <action-modal
            :submit="handleOk"
            :show="modalShow"
            title="Upload Logo">
            <div class="large-12 medium-12 small-12 cell">
                <label>File
                    <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                </label>
            </div>
        </action-modal>
    </div>
</template>

<script>

import eventBus from "@/utils/eventBus";
import {CompanyService} from "@/services/CompanyService";
import ActionModal from "@/components/modal/ActionModal";

export default {
    props: {
        btn_name: String,
        company_id: Number
    },
    components: {'action-modal': ActionModal},
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
