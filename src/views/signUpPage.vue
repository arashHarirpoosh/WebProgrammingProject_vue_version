<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <div class="flex-login-title">
      <p>فروشگاه - ثبت نام</p>
      </div>
<!--      <form class="flex-main-box">-->
<!--        <div class="flex-parts-signup">-->
<!--          <InputTextFiled label_name="نام" label_type="text" label_place_holder="نام خود را وارد کنید..."/>-->
<!--          <InputTextFiled label_name="نام خانوادگی" label_type="text" label_place_holder="نام خانوادگی خود را وارد کنید..."/>-->
<!--        </div>-->

<!--        <div class="flex-parts-signup">-->
<!--          <InputTextFiled label_name="ایمیل" label_type="email" label_place_holder="ایمیل خود را وارد کنید..."/>-->

<!--&lt;!&ndash;          ToDo:min-length need to be added&ndash;&gt;-->
<!--          <InputTextFiled label_name="رمز عبور" label_type="password" label_place_holder="رمز عبور خود را وارد کنید..."/>-->
<!--        </div>-->

<!--        <div class="flex-parts-signup">-->
<!--          <InputTextFiled label_name="آدرس" label_type="text" label_place_holder="آدرس خود را وارد کنید..."/>-->
<!--        </div>-->

<!--        <div class="flex-form-btn">-->
<!--          <Button btn_text="ثبت نام"/>-->
<!--        </div>-->
<!--      </form>-->
      <UserInformationForm btn_text="ثبت نام" :is-sign-up-btn="true"/>
    </div>
    <!--Footer-->
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
// import InputTextFiled from "../components/InputTextFiled";
// import Button from "../components/Button";
import UserInformationForm from "../components/UserInformationForm";
export default {
  name: "signUpPage",
  components: {UserInformationForm, Footer, Header}
  // components: {Button, InputTextFiled, Footer, Header}
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
/*.flex-main-box {*/
/*  justify-content: center;*/
/*  height: 50%;*/
/*  width: 80%;*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  text-align: center;*/
/*  align-items: center;*/
/*  !*border: 1px solid blue;*!*/

/*}*/

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
    Design each item of the form
 */
/*.flex-parts-signup {*/
/*  !*flex: 20%;*!*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  flex-direction: row;*/
/*  !*margin: 7px;*!*/
/*  width: 70%;*/
/*  !*border: 1px solid red;*!*/
/*  direction: rtl;*/

/*}*/

</style>