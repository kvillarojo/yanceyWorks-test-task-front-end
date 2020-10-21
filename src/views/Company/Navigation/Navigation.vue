<template>
    <div>
        <div class="Navigation">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <button class="button control" @click="getCompanies">
                        Company List
                    </button>

                    <button class="button control">
                        + Add Customer
                    </button>

                    <button class="button control">
                        + Add Employee
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        getCompanies: Function
    },
};
</script>
