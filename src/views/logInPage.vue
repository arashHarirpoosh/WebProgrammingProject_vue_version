<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <form class="flex-main-box">
        <div class="flex-login-title">
          <p>فروشگاه - ثبت نام</p>
        </div>

        <div class="flex-parts-login">
          <InputTextFiled label_name="ایمیل" label_type="email" label_place_holder="ایمیل خود را وارد کنید..."/>

        </div>

        <div class="flex-parts-login">
          <InputTextFiled label_kind="pass" label_name="رمز عبور" label_type="password" label_place_holder="رمز عبور خود را وارد کنید..."/>
<!--          <InputTextFiled label_name="رمز عبور" v-bind:label_disable=false label_type="password" label_place_holder="رمز عبور خود را وارد کنید..."/>-->
        </div>

        <div class="flex-form-btn">
          <Button btn_text="ورود"/>
        </div>
      </form>


    </div>
    <!--Footer-->
    <Footer/>

  <router-view/>
  </div>

</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputTextFiled from "../components/InputTextFiled";
import Button from "../components/Button";
export default {
  name: "logInPage",
  components: {Button, InputTextFiled, Footer, Header}
}
</script>

<style scoped>

/*
    Design partition of the entire page
 */
.flex-content {
  flex: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  /*height: 50%;*/
  background-color: rgb(247, 247, 247);
  /*border: 1px solid red;*/

}

/*
    Design flex box for signup form
 */
.flex-main-box {
  justify-content: center;
  /*height: 50%;*/
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /*border: 1px solid blue;*/

}

/*
    Design of the title part of the form
 */
.flex-login-title {
  /*flex: 10%;*/
  font-size: 1.5vw;
  color: rgb(14, 186, 197);
  margin: 15px;
  /*border: 1px solid red;*/

}

/*
    Design partition of each text inputs
 */
.flex-parts-login {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 7px;
  width: 40%;
  /*border: 1px solid red;*/
  direction: rtl;

}


/*
    Design button of the form
 */
.flex-form-btn {
  justify-content: center;
  margin: 7px;
  width: 10%;
  /*border: 1px solid red;*/
}

</style>