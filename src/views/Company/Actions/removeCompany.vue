<template>
    <button class="button is-danger" @click="removeCompany"> remove</button>
</template>

<script>
import {CompanyService} from "@/services/CompanyService";
import eventBus from "@/utils/eventBus";

export default {
    props: {
        company_id: Number
    },
    methods: {
        removeCompany() {
            CompanyService.deleteCompany(this.company_id)
            eventBus.$emit('get-companies');
        }
    }
}
</script>

<style scoped>

</style>
