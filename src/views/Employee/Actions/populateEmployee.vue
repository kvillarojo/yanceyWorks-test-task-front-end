<template>
    <button class="button is-warning" @click="handledPopulateEmployee"> {{ btn_name }}</button>
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
        handledPopulateEmployee() {
            EmployeeService.populateEmployees()
            eventBus.$emit('get-employees');
        }
    }
}
</script>
