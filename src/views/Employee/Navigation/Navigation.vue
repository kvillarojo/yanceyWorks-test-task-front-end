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

                        <div class="field">
                            <div class="control">
                                <div class="select is-primary">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <button class="button control is-right is-warning">
                            Populate Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddEmployee from "@/views/Employee/Actions/addEmployee";
export default {
    components: {AddEmployee},
    props: {
        getEmployees: Function
    },
};
</script>
