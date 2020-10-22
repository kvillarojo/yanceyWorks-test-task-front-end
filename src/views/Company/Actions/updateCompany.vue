<template>
    <div>
        <button @click="toggleModal" class="button">{{ btn_name }}</button>
        <!--        <b-modal-->
        <!--            v-model="modalShow"-->
        <!--            title="Update Company"-->
        <!--            ref="modal"-->
        <!--            id="modal-prevent-closing"-->
        <!--            @ok="handleOk"-->
        <!--        >-->
        <!--            <form-->
        <!--                ref="form"-->
        <!--                action="post"-->
        <!--                @submit.stop.prevent="handleSubmit">-->

        <!--                <label class="label"> Name-->
        <!--                    <input-->
        <!--                        type="text"-->
        <!--                        class="input control"-->
        <!--                        name="fname"-->
        <!--                        required-->
        <!--                        v-model='companyDetails.name'-->
        <!--                        placeholder="name" >-->
        <!--                </label>-->

        <!--                <label class="label"> Email-->
        <!--                    <input-->
        <!--                        type="email"-->
        <!--                        class="input control"-->
        <!--                        name="email"-->
        <!--                        required-->
        <!--                        v-model='companyDetails.email'-->
        <!--                        placeholder="email">-->
        <!--                </label>-->
        <!--                <label class="label"> Phone-->
        <!--                    <input-->
        <!--                        type="text"-->
        <!--                        class="input control"-->
        <!--                        name="phone"-->
        <!--                        required-->
        <!--                        v-model='companyDetails.phone'-->
        <!--                        placeholder="phone">-->
        <!--                </label>-->

        <!--            </form>-->
        <!--        </b-modal>-->
        <ActionModal
            :submit="handleOk"
            :show="modalShow"
            title="Update Comapny">
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
        </ActionModal>
    </div>
</template>

<script>

// import {BModal} from "bootstrap-vue";
import eventBus from "@/utils/eventBus";
import {CompanyService} from "@/services/CompanyService";
import ActionModal from "@/components/button/Modal/ActionModal";

export default {
    props: {
        btn_name: String,
        data: [Array, Object]
    },
    components: {ActionModal},
    data() {
        return {
            modalShow: false,
            isLoading: false,
            companyDetails: {
                name: this.data.name,
                phone: this.data.phone,
                email: this.data.email
            }
        }
    },
    methods: {
        checkFormValidity() {
            return this.$refs.form.checkValidity()
        },
        toggleModal(){
            this.modalShow = !this.modalShow
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
                this.handleUpdateCompany(this)
            });
        },
        async handleUpdateCompany() {
            this.isLoading = true
            await CompanyService.updateCompany({...this.companyDetails}, this.data.id)
            eventBus.$emit('get-companies');
            this.reset();
            this.modalShow = false
        }
    }
}
</script>
