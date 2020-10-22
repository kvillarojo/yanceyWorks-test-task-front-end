<template>
    <default-layout>
        <section class="section">
            <div class="container">
                <h1 class="title">Companies</h1>
            </div>

            <div class="container">
                <hr>
                <navigation
                    :get-companies="getCompanies"
                    :add-company="getCompanies"
                />
            </div>

            <div class="container">
                <customer-table
                    v-if="!isLoading"
                    :current-page="currentPage"
                    :data-items="dataItems"
                    :isloading="isLoading"
                    :page-count="pageCount"
                    :sort-by="sortBy"
                    :rows="rows"
                    :sort-desc="sortDesc"
                    :header="fields"
                />
                <loading v-else/>
            </div>
        </section>
    </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/defaultLayout";
import CustomerTable from "@/views/Company/table/CompanyTable";
import Navigation from "@/views/Company/Navigation/Navigation";
import {CompanyService} from "@/services/CompanyService";
import loading from "@/components/loading/index"
import eventBus from "@/utils/eventBus";

export default {
    name: "Company",
    components: {Navigation, CustomerTable, DefaultLayout, loading},
    data() {
        return {
            fields: [
                {
                    key: "id",
                    label: "ID",
                }, {
                    key: "name",
                    label: "Name",
                }, {
                    key: "email",
                    label: "Email",
                }, {
                    key: "phone",
                    label: "Phone",
                }, {
                    key: "logo",
                    label: "Logo",
                }, {
                    key: "action",
                    label: "Action",
                },
            ],
            sortBy: 'id',
            sortDesc: false,
            pageCount: 10,
            dataItems: [],
            currentPage: 1,
            rows: 0,
            isLoading: false
        }
    },
    methods: {
        async getCompanies(pageCount = 1) {
            this.isLoading = true
            const companies = await CompanyService.getCompanies({page: pageCount})
            this.dataItems = companies.data
            this.pageCount = companies.per_page
            this.currentPage = companies.current_page
            this.rows = companies.total

            this.isLoading = false
        },
        clickCallback(pageNum) {
            this.getCompanies(pageNum)
        },
    },
    created() {
        this.companies = this.getCompanies()
    },
    mounted() {
        eventBus.$on("get-companies", () => {
            this.getCompanies()
        });
    }
}
</script>

<style scoped>

</style>
