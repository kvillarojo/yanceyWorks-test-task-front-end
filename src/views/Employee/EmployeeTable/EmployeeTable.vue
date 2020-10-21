<template>
  <div class="EmployeeTable">
    <table class="table is-fullwidth is-hoverable">
      <thead>
      <tr>
        <th><abbr title="Position"> ID </abbr></th>
        <th> Name</th>
        <th>Action</th>
      </tr>
      </thead>
    </table>
      {{ employee }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
    props: {},
    data () {
        return {
            employee: null
        }
    },
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.employee = response))
    }
};
</script>
