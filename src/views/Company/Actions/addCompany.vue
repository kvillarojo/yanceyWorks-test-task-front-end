<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <b-modal
            v-model="modalShow"
            title="Add Company"
            ref="modal"
            id="modal-prevent-closing"
            @ok="handleOk"
        >
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
        </b-modal>
    </div>
</template>

<script>

import {BModal} from "bootstrap-vue";
import eventBus from "@/utils/eventBus";
import {CompanyService} from "@/services/CompanyService";

export default {
    props: {
        btn_name: String || null
    },
    components: {BModal},
    data() {
        return {
            modalShow: false,
            companyDetails: {
                name: null,
                phone: null,
                email: null
            }
        }
    },
    methods: {
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            console.log(valid)
            this.nameState = valid
            return valid
        },
        reset() {
            this.companyDetails = {
                name: null,
                phone: null,
                email: null
            }
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
                this.addCompany()
                this.modalShow = false
            });
        },
        async addCompany() {
            await CompanyService.createCompany(this.companyDetails)
            eventBus.$emit('add-company');
            this.reset();
        }
    }
}
</script>
