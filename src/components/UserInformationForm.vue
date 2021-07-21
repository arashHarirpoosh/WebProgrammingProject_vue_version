<template>
  <form class="flex-main-box">
    <div class="flex-parts-signup">
      <InputTextFiled  ref="form_name" label_id="name_part" label_name="نام" label_type="text" @input="check_name_input"
                       :label_place_holder=[[name_place_holder]] :label_disabled=disable_label />
      <InputTextFiled ref="form_family_name" label_id="family_name_part" label_name="نام خانوادگی" label_type="text"
                      @input="check_family_name"
                      :label_place_holder=[[family_name_place_holder]] :label_disabled=disable_label />
    </div>

    <div class="flex-parts-signup">
      <InputTextFiled ref="form_email" label_id="email_part" label_name="ایمیل" label_type="email" @input="check_email"
                      :label_place_holder=[[email_place_holder]] :label_disabled=disable_label />

      <!--          ToDo:min-length need to be added-->
      <InputTextFiled ref="form_pass" label_id="pass_part" label_kind="pass" label_name="رمز عبور" label_type="password"
                      @input="check_pass" :label_place_holder=[[password_place_holder]] :label_disabled=disable_label />
    </div>

    <div class="flex-parts-signup">
      <InputTextFiled ref="form_address" label_id="addr_part" label_kind="address" true label_name="آدرس" label_type="text"
                      @input="check_addr" :label_place_holder=[[address_place_holder]] :label_disabled=disable_label />
    </div>

    <div class="flex-form-btn">
      <Button :btn_text=btn_text @click="signupValidation" v-if="isSignUpBtn"/>
      <Button :btn_text=btn_text v-else/>
<!--      <Button :btn_text=btn_text @click="check_inputs" v-else/>-->
      <Modal ref="user_info_modal">
        <template v-slot:header>
          <!--            <h1>Modal title</h1>-->
<!--          <h1>ثبت نام در سایت</h1>-->
          <h1>
            {{ modal_header_text }}
          </h1>
        </template>

        <template v-slot:body>
          <p v-if="validation_result">ثبت نام با موفقیت انجام شد</p>
          <p v-else>ثبت نام با موفقیت انجام نشد</p>
        </template>

<!--        <template v-slot:footer>-->
<!--          <div>-->
<!--            &lt;!&ndash;              <button @click="$refs.modalName.closeModal()">Cancel</button>&ndash;&gt;-->
<!--            &lt;!&ndash;              <button @click="$refs.modalName.closeModal()">Save</button>&ndash;&gt;-->

<!--            <Button btn_text="Cancel" @click="$refs.modalName.closeModal()"/>-->
<!--            <Button btn_text="Save" @click="$refs.modalName.closeModal()"/>-->

<!--          </div>-->
<!--        </template>-->
      </Modal>
    </div>
  </form>

</template>

<script>
import InputTextFiled from "./InputTextFiled";
import Button from "./Button";
import Modal from "./Modal";
import {getAPI} from "../axios-api";

export default {
  name: "UserInformationForm",
  components: {Modal, Button, InputTextFiled},
  props:{
    // name_place_holder:{
    //   default:"نام خود را وارد کنید...",
    //   type:String
    // },
    // family_name_place_holder:{
    //   default:"نام خانوادگی خود را وارد کنید...",
    //   type:String
    // },
    // email_place_holder:{
    //   default:"ایمیل خود را وارد کنید...",
    //   type:String
    // },
    // password_place_holder:{
    //   default:"رمز عبور خود را وارد کنید...",
    //   type:String
    // },
    // address_place_holder:{
    //   default:"آدرس خود را وارد کنید...",
    //   type:String
    // },
    btn_text:String,
    isSignUpBtn: Boolean,
    disable_label:{
      default:false,
      type:Boolean
    },
    modal_header_text:{
      default:"ثبت نام در سایت",
      type:String
    }
  },
  data() {
    return {
      // input_name: "",
      // family_name:"",
      // user_email:"",
      // user_pass:"",
      // user_addr:"",
      name_place_holder: "نام خود را وارد کنید...",
      family_name_place_holder: "نام خانوادگی خود را وارد کنید...",
      email_place_holder: "ایمیل خود را وارد کنید...",
      password_place_holder: "رمز عبور خود را وارد کنید...",
      address_place_holder: "آدرس خود را وارد کنید...",
      validation_result: false
    }
  },

  methods: {
    // update_values() {
    //   this.input_name = this.$refs.form_name.normal_text
    //   this.family_name = this.$refs.form_family_name.normal_text
    //   this.user_email = this.$refs.form_email.normal_text
    //   this.user_pass = this.$refs.form_pass.pass_text
    //   this.user_addr = this.$refs.form_address.addr_text
    // },
    // check_inputs(){
    //   this.update_values()
    //   this.$refs.user_info_modal.openModal()
    //   console.log(this.input_name)
    //   return true
    // },
    // true_input_changes(element){
    //   element.style.border = "1px solid forestgreen"
    //   element.style.borderRadius = "0.25em"
    //   element.style.boxShadow = "0 0 15px forestgreen"
    // },
    // wrong_input_changes(element){
    //   element.style.border = "1px solid red"
    //   element.style.borderRadius = "0.25em"
    //   element.style.boxShadow = "0 0 15px red"
    // },
    check_name_input() {
      // let name = document.getElementById('name_part')
      if (this.$refs.form_name.check_length('normal')) {
        // name.className = 'true-input'
        // this.true_input_changes(name)
        this.$refs.form_name.true_input_changes('name_part')
        this.$refs.form_name.error_msg = ""
        return true
      }
      else {
        // this.wrong_input_changes(name)
        this.$refs.form_name.wrong_input_changes('name_part')
        this.$refs.form_name.error_msg = "لطفا نام خود را وارد کنید"
        return false
      }
    },
    check_family_name() {
      // let family_name = document.getElementById('family_name_part')
      if (this.$refs.form_family_name.check_length('normal')) {
        // name.className = 'true-input'
        // this.true_input_changes(family_name)
        this.$refs.form_family_name.true_input_changes('family_name_part')
        this.$refs.form_family_name.error_msg = ""
        return true
      }
      else {
        // this.wrong_input_changes(family_name)
        this.$refs.form_family_name.wrong_input_changes('family_name_part')
        this.$refs.form_family_name.error_msg = "لطفا نام خانوادگی خود را وارد کنید"
        return false
      }
    },
    check_email() {
      // let email = document.getElementById('email_part')
      let emailLength = this.$refs.form_email.check_length('normal')
      let emailFormat = this.$refs.form_email.validateEmail()
      if (emailLength && emailFormat) {
        // name.className = 'true-input'
        // this.true_input_changes(email)
        this.$refs.form_email.true_input_changes('email_part')
        this.$refs.form_email.error_msg = ''
        return true
      }
      else {
        // this.wrong_input_changes(email)
        this.$refs.form_email.wrong_input_changes('email_part')
        if (emailLength === false) {
          this.$refs.form_email.error_msg = 'لطفا ایمیل خود را وارد کنید'
        }
        if (emailFormat === false) {
          this.$refs.form_email.error_msg = 'فرمت ایمیل وارد شده صحیح نمی باشد'
        }
        return false
      }
    },
    check_pass() {
      // let pass = document.getElementById('pass_part')
      if (this.$refs.form_pass.check_length('pass')) {
        // name.className = 'true-input'
        // this.true_input_changes(pass)
        this.$refs.form_pass.true_input_changes('pass_part')
        this.$refs.form_pass.error_msg = ''
        return true
      }
      else {
        // this.wrong_input_changes(pass)
        this.$refs.form_pass.wrong_input_changes('pass_part')
        this.$refs.form_pass.error_msg = 'حداقل 8 کاراکتر برای رمز عبور نیاز است'
        return false
      }
    },
    check_addr() {
      // let addr = document.getElementById('addr_part')
      if (this.$refs.form_address.check_length('addr')) {
        // name.className = 'true-input'
        // this.true_input_changes(addr)
        this.$refs.form_address.true_input_changes('addr_part')
        this.$refs.form_address.error_msg = ''
        return true
      }
      else {
        // this.wrong_input_changes(addr)
        this.$refs.form_address.wrong_input_changes('addr_part')
        this.$refs.form_address.error_msg = 'لطفا آدرس خود را وارد کنید'
        return false
      }
    },
    checkInputs() {
      return this.check_name_input() && this.check_family_name() && this.check_email()
          && this.check_pass() && this.check_addr()
    },
    signupValidation(){
      if (this.checkInputs()) {
        let req = {
          'name':this.$refs.form_name.normal_text,
          'familyName':this.$refs.form_family_name.normal_text,
          'email':this.$refs.form_email.normal_text,
          'password':this.$refs.form_pass.pass_text,
          'address':this.$refs.form_address.addr_text
          }
        getAPI.post('/store/signup', req).then((response) => {
          console.log(response.data)
          this.validation_result = response.data['result']
        })
      }
      this.$refs.user_info_modal.openModal()
    }
  },

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
  margin: 3px;
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

.true-input {
  font-size: 1.2vw;
  flex: 50%;
  height: 2.75vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 0.25em;
  border:1px solid forestgreen;
  box-shadow: 0 0 15px forestgreen;
}

.wrong-input {
  border-radius: 0.25em;
  border:1px solid red;
  box-shadow: 0 0 15px red;
}
</style>