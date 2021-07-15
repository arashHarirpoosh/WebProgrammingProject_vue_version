<template>
  <div id="tableContainer">
    <table>
      <thead>
      <tr>
        <th :key="header" v-for="header in listHeaders">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="row[0]" v-for="row in listRows">
        <td :key="el" v-for="el in row">{{ el }}</td>
        <td><table><tr>
          <td class="nestedTd"><input class="operationBtn" type="button" value="ویرایش دسته بندی"/></td>
          <td class="nestedTd"><input style="direction: ltr" class="operationBtn" type="button" value="حذف دسته بندیX"/></td>
        </tr></table></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ClassListTable",
  props: {
    listRows: Array,
    listHeaders: Object,
  }
}
</script>

<style scoped>
#tableContainer{
  margin-top: 25px;
  overflow-y: auto;
  background-color: white;
  width: 80%;
}


table {
  direction: rtl;
  font-family: arial, sans-serif;
  width: 100%;
}

tr > td {
  direction: rtl;
  text-align: center;
  border-bottom: 1px solid #dddddd;
  padding: 8px;
}

.nestedTd {
  border: none;
}

th{
  direction: rtl;
  text-align: center;
  border-bottom: 1px solid #dddddd;
  padding: 8px;
  border-collapse: collapse;
}

.operationBtn {
  background-color: white;
  border: none;
  font-size: 15px;
  height: 100%;
  width: 100%;
}

.operationBtn:hover{
  cursor: pointer;
  color: rgb(14, 186, 197);
}
</style>