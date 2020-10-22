<template>
    <div>
        <div class="Navigation">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <button class="button control" @click="getCompanies">
                        refresh
                    </button>

                    <add-company btn_name="+ Add Company "/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddCompany from "@/views/Company/Actions/addCompany";

export default {
    components: {
      'add-company': AddCompany
    },
    props: {
        getCompanies: Function,
        addCompany: Function
    },
};
</script>
