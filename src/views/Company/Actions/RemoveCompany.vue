<template>
    <button class="button is-danger" @click="handleRemoveCompany"> {{ btn_name }}</button>
</template>

<script>
import {CompanyService} from "@/services/CompanyService";
import eventBus from "@/utils/eventBus";

export default {
    props: {
        company_id: Number,
        btn_name: String
    },
    methods: {
        handleRemoveCompany() {
            CompanyService.deleteCompany(this.company_id)
            eventBus.$emit('get-companies');
        }
    }
}
</script>
