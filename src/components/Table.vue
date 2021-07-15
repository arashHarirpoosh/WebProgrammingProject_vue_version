<template>
  <div id="tableContainer">
    <table>
      <thead>
      <tr>
        <th :key="element" v-for="element in headers">{{ element }}</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="row[0]" v-for="row in rows">
        <td :key="el" v-for="el in row">{{ el }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: "Table",
  props: {
    rows: Array,
    headers: Array,
  }
}
</script>

<style scoped>
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(247, 247, 247);
}

h4{
  margin-top: 25px;
  margin-bottom: 0;
}

#tableContainer{
  margin-top: 25px;
  overflow-y: auto;
  background-color: white;
  height: 55%;
  width: 80%;
}

table {
  direction: rtl;
  font-family: arial, sans-serif;
  width: 100%;
}

td {
  direction: rtl;
  border-bottom: 1px solid #dddddd;
  text-align: right;
  padding: 12px;
}

th{
  direction: rtl;
  border-bottom: 1px solid #dddddd;
  text-align: right;
  padding: 12px;
  border-collapse: collapse;
}
</style>