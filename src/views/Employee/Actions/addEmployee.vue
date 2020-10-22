<template>
    <div>
        <button @click="modalShow = !modalShow" class="button">{{ btn_name }}</button>
        <action-modal
            :submit="handleOk"
            :show="modalShow"
            title="Add Employee">
            <form
                ref="form"
                action="post"
                @submit.stop.prevent="handleSubmit">

                <label class="label"> First Name
                    <input
                        type="text"
                        class="input control"
                        name="first_name"
                        required
                        v-model='employeeDetails.first_name'
                        placeholder="first name">
                </label>

                <label class="label"> Last Name
                    <input
                        type="text"
                        class="input control"
                        name="last_name"
                        required
                        v-model='employeeDetails.last_name'
                        placeholder="last name">
                </label>
            </form>
        </action-modal>
    </div>
</template>

<script>

import eventBus from "@/utils/eventBus";
import ActionModal from "@/components/modal/ActionModal";
import {EmployeeService} from "@/services/EmployeeService";

export default {
    props: {
        btn_name: String
    },
    components: {'action-modal': ActionModal},
    data() {
        return {
            modalShow: false,
            isLoading: false,
            employeeDetails: {
                first_name: null,
                last_name: null
            }
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
                this.handleAddEmployee()
            });
        },
        async handleAddEmployee() {
            this.isLoading = true
            await EmployeeService.createEmployee(this.employeeDetails)
            eventBus.$emit('get-employees');
            this.reset();
            this.modalShow = false
        }
    }
}
</script>
