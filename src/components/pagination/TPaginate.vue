<template>
    <Paginate
        :page-count="pageCount"
        :click-handler="clickCallback"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'pagination-link'"
        :prev-class="'pagination-previous'"
        :next-class="'pagination-next'"
    />
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
    name: "paginate",
    props: {
        pageCount: Number,
        clickCallback: Function
    },
    components: {Paginate}

}
</script>
