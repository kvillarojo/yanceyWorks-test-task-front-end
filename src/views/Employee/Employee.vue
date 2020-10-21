<template>
  <default-layout>
    <section class="section">
      <div class="container">
        <h1 class="title">Employee</h1>
      </div>

      <div class="container">
        <hr>
        <navigation/>
      </div>

      <div class="container">
        <employee-table/>
      </div>
    </section>

  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/defaultLayout";
import EmployeeTable from "@/views/Employee/EmployeeTable/EmployeeTable";
import Navigation from "@/views/Employee/Navigation/Navigation";

export default {
    name: "Employee",
    components: {Navigation, EmployeeTable, DefaultLayout},
    mounted() {

    }
}
</script>

<style scoped>

</style>
