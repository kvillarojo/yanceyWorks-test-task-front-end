<template>
  <div>
    <nav-bar/>
    <div>
      <slot/>
    </div>
  </div>

</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "defaultLayout",
  components: {NavBar}
}
</script>

<style scoped>

</style>
