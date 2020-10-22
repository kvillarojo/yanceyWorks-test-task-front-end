<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <action-modal
            :submit="handleOk"
            :show="modalShow"
            title="Add Company">
            <form
                ref="form"
                action="post"
                @submit.stop.prevent="handleSubmit">

                <label class="label"> Name
                    <input
                        type="text"
                        class="input control"
                        name="fname"
                        required
                        v-model='companyDetails.name'
                        placeholder="name">
                </label>

                <label class="label"> Email
                    <input
                        type="email"
                        class="input control"
                        name="email"
                        required
                        v-model='companyDetails.email'
                        placeholder="email">
                </label>
                <label class="label"> Phone
                    <input
                        type="text"
                        class="input control"
                        name="phone"
                        required
                        v-model='companyDetails.phone'
                        placeholder="phone">
                </label>

            </form>
        </action-modal>
    </div>
</template>

<script>

import eventBus from "@/utils/eventBus";
import {CompanyService} from "@/services/CompanyService";
import ActionModal from "@/components/button/Modal/ActionModal";

export default {
    props: {
        btn_name: String
    },
    components: {'action-modal': ActionModal},
    data() {
        return {
            modalShow: false,
            isLoading: false,
            companyDetails: {
                name: null,
                phone: null,
                email: null
            }
        }
    },
    methods: {
        checkFormValidity() {
            return this.$refs.form.checkValidity()
        },
        reset() {
            this.companyDetails = {
                name: null,
                phone: null,
                email: null
            }
            this.isLoading = false
        },
        handleOk(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.handleSubmit()
        },
        handleSubmit() {
            if (!this.checkFormValidity()) {
                return
            }
            this.$nextTick(() => {
                this.addCompany(this)
            });
        },
        async addCompany() {
            this.isLoading = true
            await CompanyService.createCompany(this.companyDetails)
            eventBus.$emit('get-companies');
            this.reset();
            this.modalShow = false
        }
    }
}
</script>
