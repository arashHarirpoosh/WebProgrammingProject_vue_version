<template>
  <div class="toggleButton" v-if="number===3">
    <div>
      <button id="profile3" @click="onClick($event)" type="checkbox" class="form-check rightBtn">لیست کالا ها</button>
    </div>
    <div>
      <button id="categoryLists" @click="onClick($event)" type="checkbox" class="form-check">لیست دسته ها</button>
    </div>
    <div>
      <button id="receipts3" @click="onClick($event)" type="checkbox" class="form-check leftBtn">رسید ها</button>
    </div>
  </div>

  <div class="toggleButton" v-else>
    <div>
      <button id="profile2" @click="onClick($event)" type="checkbox" class="form-check rightBtn">پروفایل</button>
    </div>
    <div>
      <button id="receipts2" @click="onClick($event)" type="checkbox" class="form-check leftBtn">رسید ها</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuggleButton",
  props:{
    number: Number
  },
  methods: {
    onClick(e){
      this.$emit('tab-event', e.target.id)
    }
  }
}
</script>

<style scoped>
.toggleButton {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-top: 25px;
  height: 40px;
}

.form-check{
  border: 1px solid rgb(138, 138, 138);
  width: 140px;
  height: 90%;
  background-color: rgb(238, 238, 238) ;
  color:rgb(138, 138, 138);
  font-weight: bold;
}

.rightBtn{
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
}

.leftBtn{
  border-right: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
}

.form-check:focus {
  display: inline-block;
  color: black;
  background-color: rgb(206, 205, 205);
}

#categoryLists{
  border-right: none;
}
</style>