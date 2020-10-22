<template>
    <button class="button is-danger" @click="handleCompanyRemove"> {{ btn_name }}</button>
</template>

<script>
import eventBus from "@/utils/eventBus";
import {EmployeeService} from "@/services/EmployeeService";

export default {
    props: {
        employee_id: Number,
        btn_name: String
    },
    methods: {
        handleCompanyRemove() {
            EmployeeService.removeEmployee(this.employee_id)
            eventBus.$emit('get-employees');
        }
    }
}
</script>
