<template>
  <form class="flex-main-box">
    <div class="flex-parts-signup">
      <InputTextFiled label_name="نام" label_type="text"
                      :label_place_holder=[[name_place_holder]] :label_disable=label_disabled />
      <InputTextFiled label_name="نام خانوادگی" label_type="text"
                      :label_place_holder=[[family_name_place_holder]] :label_disable=label_disabled />
    </div>

    <div class="flex-parts-signup">
      <InputTextFiled label_name="ایمیل" label_type="email"
                      :label_place_holder=[[email_place_holder]] :label_disable=label_disabled />

      <!--          ToDo:min-length need to be added-->
      <InputTextFiled label_kind="pass" label_name="رمز عبور" label_type="password"
                      :label_place_holder=[[password_place_holder]] :label_disable=label_disabled />
    </div>

    <div class="flex-parts-signup">
      <InputTextFiled label_kind="address" true label_name="آدرس" label_type="text"
                      :label_place_holder=[[address_place_holder]] :label_disable=label_disabled />
    </div>

    <div class="flex-form-btn">
      <Button :btn_text=btn_text />
    </div>
  </form>

</template>

<script>
import InputTextFiled from "../components/InputTextFiled";
import Button from "../components/Button";
export default {
  name: "UserInformationForm",
  components: {Button, InputTextFiled},
  props:{
    name_place_holder:{
      default:"نام خود را وارد کنید...",
      type:String
    },
    family_name_place_holder:{
      default:"نام خانوادگی خود را وارد کنید...",
      type:String
    },
    email_place_holder:{
      default:"ایمیل خود را وارد کنید...",
      type:String
    },
    password_place_holder:{
      default:"رمز عبور خود را وارد کنید...",
      type:String
    },
    address_place_holder:{
      default:"آدرس خود را وارد کنید...",
      type:String
    },
    btn_text:String,
    label_disabled:{
      default:false,
      type:Boolean
    }
  }
}
</script>

<style scoped>

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
    Design each item of the form
 */
.flex-parts-signup {
  /*flex: 20%;*/
  display: flex;
  justify-content: center;
  flex-direction: row;
  /*margin: 7px;*/
  width: 70%;
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