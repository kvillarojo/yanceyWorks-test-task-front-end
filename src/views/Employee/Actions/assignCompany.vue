<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <action-modal
            :submit="handleOk"
            :show="modalShow"
            title="Assign Company">
            <form
                ref="form"
                action="post"
                @submit.stop.prevent="handleSubmit">

                <label class="label"> Company ID
                    <input
                        type="number"
                        class="input control"
                        name="first_name"
                        required
                        v-model='company_id'
                        placeholder="Company ID">
                </label>
            </form>
        </action-modal>
    </div>
</template>

<script>

import eventBus from "@/utils/eventBus";
import ActionModal from "@/components/modal/ActionModal";
import {CompanyService} from "@/services/CompanyService";

export default {
    props: {
        btn_name: String,
        employee_id: Number
    },
    components: {'action-modal': ActionModal},
    data() {
        return {
            modalShow: false,
            isLoading: false,
            company_id: 0
        }
    },
    methods: {
        checkFormValidity() {
            return this.$refs.form.checkValidity()
        },
        reset() {
            this.employeeDetails = {
                first_name: null,
                last_name: null
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
                this.handleAssignEmployee()
            });
        },
        async handleAssignEmployee() {
            this.isLoading = true
            await CompanyService.addEmployee(this.company_id, this.employee_id)
            eventBus.$emit('get-employees');
            this.reset();
            this.modalShow = false
        }
    }
}
</script>
