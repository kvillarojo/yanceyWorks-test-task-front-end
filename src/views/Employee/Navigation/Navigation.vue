<template>
    <div class="Navigation">
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <div class="field is-grouped">

                        <button class="button control" @click="getEmployees">
                            Refresh
                        </button>

                        <add-employee btn_name="+ Add Employee"/>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <populate-employee btn_name="Populate"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddEmployee from "@/views/Employee/Actions/addEmployee";
import PopulateEmployee from "@/views/Employee/Actions/populateEmployee";
export default {
    components: {PopulateEmployee, AddEmployee},
    props: {
        getEmployees: Function
    },
};
</script>
