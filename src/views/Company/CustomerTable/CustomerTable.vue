<template>
    <div class="CustomerTable">
        <table class="table is-fullwidth is-hoverable">
            <thead>
            <tr>
                <th><abbr title="Position"> ID </abbr></th>
                <th> Name</th>
                <th>Action</th>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>

import {CompanyService} from "@/services/CompanyService";
import EventBus from '@/utils/eventBus'

export default {
    props: {},
    data () {
        return {
            currentPage: 1,
            perPage: 10,
            totalRows: null,
            sortBy: "employee_id",
            sortDesc: false,
            filter: {}
        }
    },
    methods: {
        getCompanies (context, callback) {
            CompanyService.getCompanies()
                .then(response => {
                    const employees = this.$_.get(response, "data.data.employees", []);
                    const items = [];
                    this.$_.each(employees, employee => {
                        const o = {};
                        this.$_.each(employee, (item, index) => {
                            o[index] = item;
                        });
                        items.push(o);
                    });
                    this.totalRows = this.$_.get(response, "data.data.total", null);
                    callback(items);
                })
                .catch(() => {
                    callback([]);
                })
                .finally(() => {
                    this.isBusy = false;
                });
        }
    },
    mounted() {
        EventBus.$on("reload-companies-datatable", () => {
            this.$parent.$children[0].$refs.datatable.refresh();
        });
    }
};
</script>
