<template>
  <default-layout>
    <section class="section">
      <div class="container">
        <h1 class="title">Home</h1>
        <div class="columns">
          <div class="column">
            <article class="tile is-child box">
              <p class="title">439k</p>
              <p class="subtitle"> Employees </p>
            </article>
          </div>
          <div class="column">
            <article class="tile is-child box">
              <p class="title">439k</p>
              <p class="subtitle"> Companies </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  </default-layout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/layouts/defaultLayout";

export default {
  name: 'Home',
  components: {
    DefaultLayout
  }
}
</script>
