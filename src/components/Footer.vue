<template>
  <div class="footer">
    <p>تمامی حقوق برای توسعه دهندگان آرش حریرپوش و محسن محمدیان محفوظ است</p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
/*
    footer part of the flex container
 */
.footer {
  /*flex: 5%;*/
  flex-shrink: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(49, 52, 54);
  color: rgb(114, 120, 125);
  text-align: center;
  font-size: 1vw;
  /*border: 1px solid red;*/

}
</style>