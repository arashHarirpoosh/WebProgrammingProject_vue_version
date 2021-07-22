<template>
  <div class="inputs">
    <div class="flex-parts-login">
      <label class="flex-text-area">
        <div class="input-labels">نام محصول</div>
        <input class="text-input-part" type="text" ref="proName" value="">
      </label>
    </div>
    <div class="flex-parts-login">
      <label class="flex-text-area">
        <div class="input-labels">دسته بندی</div>
        <input class="text-input-part" type="text" ref="proCategory" value="">
      </label>
    </div>
    <div class="flex-parts-login">
      <label class="flex-text-area">
        <div class="input-labels">قیمت</div>
        <input class="text-input-part" type="text" ref="proPrice" value="">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInputs",
}
</script>

<style scoped>

.inputs{
  flex-direction: column;
  height: 80%;
}

.flex-parts-login {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 25px 25px 0;
  width: 60%;
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