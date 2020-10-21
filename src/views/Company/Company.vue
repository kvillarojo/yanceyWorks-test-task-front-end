<template>
  <default-layout>
    <section class="section">
      <div class="container">
        <h1 class="title">Companies</h1>
      </div>

      <div class="container">
        <hr>
        <navigation />
      </div>
      <div class="container">
        <customer-table />
      </div>
    </section>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/defaultLayout";
import CustomerTable from "@/views/Company/CustomerTable/CustomerTable";
import Navigation from "@/views/Company/Navigation/Navigation";

export default {
  name: "Company",
  components: {Navigation, CustomerTable, DefaultLayout}
}
</script>

<style scoped>

</style>
