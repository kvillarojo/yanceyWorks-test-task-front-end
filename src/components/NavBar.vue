<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <h1 class="title">Test Task</h1>
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="companies" class="navbar-item">
                    Companies
                </router-link>

                <router-link to="employee" class="navbar-item">
                    Employees
                </router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <logout btn_name="Sign out"/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Logout from "@/components/Logout/logout";
export default {
name: "NavBar",
    components: {Logout}
}
</script>

<style scoped>

</style>
