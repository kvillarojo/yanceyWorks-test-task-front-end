<template>
    <div class="container text-center">
        <div class="column">
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner"></b-spinner>
        </div>
    </div>
</template>

<script>
import {BSpinner} from "bootstrap-vue";

export default {
name: "index",
    components: {'b-spinner': BSpinner}
}
</script>

<style scoped>

</style>
