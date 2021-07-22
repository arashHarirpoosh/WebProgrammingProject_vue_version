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
        <td :key="el" v-for="el in row" :ref="el">{{ el }}</td>
        <td><table><tr>
          <td class="nestedTd">
            <input @click="edit_category($event)" :id="row.category"
                   class="operationBtn" type="button" value="ویرایش دسته بندی"/>
          </td>

          <Modal ref="edit_category">
            <template v-slot:header><h3>ویرایش دسته بندی</h3></template>

            <template v-slot:body>
              <div class="flex-parts-login">
                <label class="flex-text-area">
                  <div class="input-labels">نام دسته بندی</div>
                  <input class="text-input-part" type="text" ref="categoryName" value="">
                </label>
              </div>
            </template>

            <template v-slot:footer>
              <input @click="registerCategory" id="register_btn" type="button" value="ثبت ویرایش"/>
            </template>
          </Modal>

          <td class="nestedTd">
            <input @click="rmv_category($event)"  :id="row.category"
                   style="direction: ltr" class="operationBtn" type="button" value="حذف دسته بندیX"/>
          </td>
        </tr></table></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getAPI} from "../axios-api";
import Modal from "./Modal";

export default {
  name: "ClassListTable",
  components: {Modal},
  props: {
    listRows: Array,
    listHeaders: Object,
  },
  data(){
    return{
      proName: ""
    }
  },
  methods:{
    async rmv_category(e){
      // console.log(e.target.id)
      let req = {
        'removeCategory': 'true',
        'category': e.target.id
      }
      await getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
      })
      this.$parent.categoryInfo()
    },
    edit_category(e){
      console.log(e.target.id)
      this.categoryName = e.target.id
      this.$refs.edit_category.openModal()
    },
    async registerCategory(){
      let req = {
        'editCategory': 'true',
        'category': this.categoryName,
        'category2': this.$refs.categoryName.value
      }
      await getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
      })
      this.$emit('tab-event', 'updating')
    }

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

.flex-parts-login {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 25px 25px 0;
  width: 70%;
  direction: rtl;
}

.flex-text-area {
  flex: 50%;
  display: flex;
  flex-direction: row;
  margin: 5px;
  height: 30px;
  border: 1px solid red;

}

.input-labels {
  flex: 35%;
  display: flex;
  background-color: rgb(14, 186, 197);
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 0.25em;
  border-top-right-radius: 0.25em;

}
.text-input-part {
  flex: 65%;
  border: white;
  border-radius: 0.25em;
}
</style>