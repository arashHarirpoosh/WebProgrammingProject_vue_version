<template>
  <div class="flex-parts-login">
    <label class="flex-text-area">
      <div class="input-labels">جستجوی کد پیگیری</div>
      <input @keyup="searchReceipt($event)" class="text-input-part" type="email"
             placeholder="کد پیگیری را برای جستجو وارد کنید..." value="" ref="code_search">
    </label>
  </div>
</template>

<script>
import {getAPI} from "../axios-api";

export default {
  name: "CodeSearch",
  methods:{
    searchReceipt(e){
      if (e.keyCode === 13){
        let req = {
          'receipts_search': 'true',
          'trackingCode': parseInt(this.$refs.code_search.value)
        }
        // console.log(req)
        getAPI.post('/store/admin', req).then((response) => {
          console.log(response.data)
          this.$parent.rows = response.data
        })
      }
    }
  }
}
</script>

<style scoped>
.flex-parts-login {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 25px 25px 0;
  width: 40%;
  /*border: 1px solid red;*/
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
  /*border: 1px solid white;*/
  border: white;
  border-radius: 0.25em;

}
</style>