<template>
  <div class="flex-search-part">
    <div class="search-label">
      <p>در محصولات سایت جستجو کنید...</p>
    </div>
    <div class="search-input-part">
      <input class="search-input" type="text" placeholder="نام محصول خود را وارد کنید" id="secondBox_txtBox">
    </div>
    <div class="btn-part">
<!--      <button class="search-btn">جستجو کنید</button>-->
      <Button btn_text="جستجو کنید"/>
    </div>

  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "HeroHeader",
  components: {Button}
}
</script>

<style scoped>
.flex-search-part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 80%;
  width: 100%;
  /*border: 1px solid blue;*/

}

/*
    Design of the label placed in hero header
 */
.search-label {
  /*flex: 40px;*/
  flex: 30px;
  direction: rtl;
  color: white;
  font-size: 2vw;
  /*border: 1px solid blue;*/

}

/*
   Design the partition size of the text box placed in hero header
 */
.search-input-part {
  /*flex: 35px;*/
  flex: 60px;
  width: 25%;
  /*border: 1px solid blue;*/
}

/*
  Design of the text box field in hero header
*/
.search-input {
  border:0.2em solid white;
  border-radius:2em;
  /*height: 100%;*/
  /*height: 100%;*/
  width: 100%;
  height: 35px;
  /*height: 10%;*/
  text-align: center;
  /*font-size: 0.7vw;*/
}

</style>