<template>
    <default-layout>
        <section class="section">
            <div class="container">
                <h1 class="title">Employee</h1>
            </div>

            <div class="container">
                <hr>
                <navigation
                    :get-employees="getEmployees"
                />
            </div>

            <div class="container">
                <employee-table
                    v-if="!isLoading"
                    :current-page="currentPage"
                    :data-items="dataItems"
                    :isloading="isLoading"
                    :page-count="pageCount"
                    :sort-by="sortBy"
                    :rows="rows"
                    :sort-desc="sortDesc"
                    :header="fields"
                    :next-page="nextPage"
                />
                <loading v-else/>
            </div>
        </section>

    </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import Navigation from "@/views/Employee/Navigation/Navigation";
import EmployeeTable from "@/views/Employee/table/EmployeeTable";
import {EmployeeService} from "@/services/EmployeeService";
import eventBus from "@/utils/eventBus";
import loading from "@/components/loading/index";

export default {
    name: "Employee",
    components: {'employee-table': EmployeeTable, Navigation, DefaultLayout, loading},
    data () {
        return {
            fields: [
                {
                    key: "id",
                    label: "ID",
                }, {
                    key: "first_name",
                    label: "firstname",
                }, {
                    key: "last_name",
                    label: "Lastname",
                }, {
                    key: "company",
                    label: "Company",
                }, {
                    key: "action",
                    label: "Action",
                },
            ],
            sortBy: 'id',
            sortDesc: false,
            pageCount: 10,
            dataItems: [],
            currentPage: 0,
            rows: 0,
            isLoading: false
        }
    },
    methods: {
        async getEmployees (params, page) {
            this.isLoading = true
            const employees = await EmployeeService.getEmployees(params, page)
            this.dataItems = employees.data
            this.pageCount = employees.per_page
            this.currentPage = employees.current_page
            this.rows = employees.total

            this.isLoading = false
        },
        nextPage(pageNum) {
            this.getEmployees({}, '?page='+ pageNum)
        },
    },
    created () {
        this.getEmployees()
    },
    mounted() {
        eventBus.$on("get-employees", () => {
            this.getEmployees()
        });
    }
}
</script>
