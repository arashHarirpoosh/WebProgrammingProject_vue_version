<template>
  <div class="toggleButton">
    <div>
      <button id="next" @click="onClick($event)" type="checkbox" class="nextPre_btn">بعدی</button>
    </div>
    <div style="direction: ltr;">
      <button :key=i :id="i" @click="onClick($event)" type="checkbox" class="form-check" v-for="i in btn_num">
        {{ i }}</button>
    </div>
    <div>
      <button id="previous" @click="onClick($event)" type="checkbox" class="nextPre_btn">قبلی</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageButtons",
  props:{
    btn_num: Number
  },
  methods: {
    onClick(e){
      if (e.target.id === 'next' || e.target.id === 'previous')
        this.$emit('tab-event', e.target.id)
      else
        this.$emit('tab-event', e.target.innerHTML)
      // e.target.classList.add("disable");
      // document.getElementById("next").classList.remove("form-check")
      // console.log(document.getElementById("0"))
    }
  }
}
</script>

<style scoped>
*{box-sizing: border-box;
  direction: rtl
}
.toggleButton {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-self: center;
  margin-bottom: 0;
  border: solid blue;
  /*height: 5%;*/
}

.form-check:focus{
  border: 1px solid rgb(138, 138, 138);
  background-color: rgb(238, 238, 238) ;
  color:rgb(138, 138, 138);
  font-size: 12px;
}

.form-check{
  display: inline-block;
  color: black;
  background-color: rgb(206, 205, 205);
}

.disable{
  border: 1px solid rgb(224, 215, 215);
  background-color: rgb(238, 238, 238) ;
  color:red;
  font-size: 12px;
}

.nextPre_btn{
  display: inline-block;
  color: black;
  background-color: rgb(206, 205, 205);
}

</style>