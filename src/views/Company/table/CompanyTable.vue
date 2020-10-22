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
                <button size="sm" @click="row.toggleDetails" class="mr-2">
                    {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
                </button>
            </template>

            <template #row-details="row">
                <b-card>
                    <b-row class="mb-2">
                        <remove-company :company_id="row.item.id" btn_name="Remove"/>
                    </b-row>

                    <b-row class="mb-2">
                       <update-company :data="row.item" btn_name="Update Details"/>
                    </b-row>

                    <b-row class="mb-2">
                        <button class="button "> Upload </button>
                    </b-row>

                </b-card>
            </template>
        </b-table>

        <div class="container">
            <div class="columns">
                <div class="is-one-quarter">
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="pageCount"
                        aria-controls="my-table"
                    ></b-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {BCard, BPagination, BRow, BTable} from "bootstrap-vue";
import RemoveCompany from "@/views/Company/Actions/removeCompany";
import UpdateCompany from "@/views/Company/Actions/updateCompany";

export default {
    props: {
        sortBy: String,
        sortDesc: Boolean,
        pageCount: Number,
        dataItems: Array,
        currentPage: Number,
        rows: Number,
        header: [Array, Object],
        removeCompany: Function
    },
    components: {UpdateCompany, RemoveCompany, BTable, BPagination, BRow, BCard}
};
</script>

