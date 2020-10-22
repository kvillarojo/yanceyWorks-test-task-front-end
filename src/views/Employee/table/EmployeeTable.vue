<template>
    <div class="CustomerTable">
        <b-table
            :items="dataItems"
            :fields="header"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            responsive="sm"
        >
            <template #cell(action)="row">
                <button size="sm" @click="row.toggleDetails" class="mr-2 button">
                    {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </button>
            </template>

            <template #row-details="row">
                <b-card>
                    <b-row class="mb-2">
                        <remove-employee :employee_id="row.item.id" btn_name="Remove" />
                    </b-row>

                    <b-row class="mb-2">
                        <update-employee :data="row.item" btn_name="Update Details"/>
                    </b-row>

                    <b-row class="mb-2">
                        <UploadLogo btn_name="Upload Logo" :company_id="row.item.id"/>
                    </b-row>

                </b-card>
            </template>
        </b-table>

        <div class="container">
            <div class="columns">
                <div class="is-one-quarter">
                    <t-paginate
                        :page-count="pageCount"
                        :click-callback="nextPage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UploadLogo from "@/views/Company/Actions/uploadLogo";
import {BCard, BRow, BTable} from "bootstrap-vue";
import TPaginate from "@/components/pagination/TPaginate";
import RemoveEmployee from "@/views/Employee/Actions/removeEmployee";
import UpdateEmployee from "@/views/Employee/Actions/updateEmployee";

export default {
    props: {
        sortBy: String,
        sortDesc: Boolean,
        pageCount: Number,
        dataItems: Array,
        currentPage: Number,
        rows: Number,
        header: [Array, Object],
        removeCompany: Function,
        nextPage: Function
    },
    components: {UpdateEmployee, RemoveEmployee, UploadLogo, BTable, BRow, BCard, 't-paginate': TPaginate}
}
</script>
