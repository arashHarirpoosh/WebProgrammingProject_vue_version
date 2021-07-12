<template>
  <div class="toggleButton" v-if="number===3">
    <div><button type="checkbox" class="form-check rightBtn">لیست کالا ها</button></div>
    <div><button type="checkbox" class="form-check">لیست دسته ها</button></div>
    <div><button type="checkbox" class="form-check leftBtn">رسید ها</button></div>
  </div>

  <div class="toggleButton" v-else>
    <div><button type="checkbox" class="form-check rightBtn">پروفایل</button></div>
    <div><button type="checkbox" class="form-check leftBtn">رسید ها</button></div>
  </div>
</template>

<script>
export default {
  name: "TuggleButton",
  props:{
    number: Number
  }
}
</script>

<style scoped>
.toggleButton {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-top: 25px;
  height: 30px;
}

.form-check{
  border: none;
  width: 100px;
  height: 90%;
}

.rightBtn{
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.leftBtn{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.form-check:focus {
  display: inline-block;
  color:rgb(138, 138, 138);
  background-color: rgb(238, 238, 238) ;
}
</style>