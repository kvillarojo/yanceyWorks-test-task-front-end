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

            <template #row-details="">
                <b-card>
                    <b-row class="mb-2">
                        <button class="button is-danger"> remove </button>
                    </b-row>

                    <b-row class="mb-2">
                        <button class="button "> Update Details </button>
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

export default {
    props: {
        sortBy: String,
        sortDesc: Boolean,
        pageCount: Number,
        dataItems: Array,
        currentPage: Number,
        rows: Number,
        header: [Array, Object]
    },
    components: {BTable, BPagination, BRow, BCard}
};
</script>

