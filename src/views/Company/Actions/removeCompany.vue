<template>
    <button class="button is-danger" @click="removeCompany"> {{ btn_name }}</button>
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
        removeCompany() {
            CompanyService.deleteCompany(this.company_id)
            eventBus.$emit('get-companies');
        }
    }
}
</script>
