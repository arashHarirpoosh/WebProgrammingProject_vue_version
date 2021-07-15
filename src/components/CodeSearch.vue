<template>
  <div class="flex-parts-login">
    <label class="flex-text-area">
      <div class="input-labels">جستجوی کد پیگیری</div>
      <input class="text-input-part" type="email" placeholder="کد پیگیری را برای جستجو وارد کنید...">
    </label>
  </div>
</template>

<script>
export default {
  name: "CodeSearch"
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