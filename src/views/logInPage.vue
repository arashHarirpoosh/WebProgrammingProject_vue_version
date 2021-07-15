<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <form class="flex-main-box">
        <div class="flex-login-title">
          <p>فروشگاه - ورود</p>
        </div>

        <div class="flex-parts-login">
          <InputTextFiled ref="login_email" id="id_login_email" @input="check_email"
                          label_name="ایمیل" label_type="email" label_place_holder="ایمیل خود را وارد کنید..."/>

        </div>

        <div class="flex-parts-login">
          <InputTextFiled ref="login_pass" id="id_login_pass" @input="check_pass"
                          label_kind="pass" label_name="رمز عبور" label_type="password" label_place_holder="رمز عبور خود را وارد کنید..."/>
<!--          <InputTextFiled label_name="رمز عبور" v-bind:label_disable=false label_type="password" label_place_holder="رمز عبور خود را وارد کنید..."/>-->
        </div>

        <div class="flex-form-btn">
<!--          <Button btn_text="ورود" @click="validate_login() ? $refs.loginModel.openModal() : null"/>-->
          <Button btn_text="ورود" @click="validate_login()"/>
            <Modal ref="loginModel">
              <template v-slot:header>
                <!--            <h1>Modal title</h1>-->
                <h1>ورود به سایت</h1>
              </template>

              <template v-slot:body>
                <p v-if="validation_result">ورود با موفقیت انجام شد</p>
                <p v-else>ایمیل یا رمز عبور صحیح نمی باشد</p>
              </template>

              <template v-slot:footer>
                <div>
                  <!--              <button @click="$refs.modalName.closeModal()">Cancel</button>-->
                  <!--              <button @click="$refs.modalName.closeModal()">Save</button>-->

<!--                  <Button btn_text="Cancel" @click="$refs.loginModel.closeModal()"/>-->
<!--                  <Button btn_text="Save" @click="$refs.loginModel.closeModal()"/>-->

                </div>
              </template>
            </Modal>

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
import Modal from "../components/Modal";
export default {
  name: "logInPage",
  components: {Modal, Button, InputTextFiled, Footer, Header},
  data() {
    return {
      login_email: "",
      validation_result: false
    };
  },

  methods:{
    validate_login(){
      let user_email = this.$refs.login_email.normal_text
      let user_pass = this.$refs.login_pass.pass_text
      console.log(user_email)
      console.log(user_pass)
      this.validation_result = user_email === "root" && user_pass === "123";
      this.$refs.loginModel.openModal()
    },
    true_input_changes(element){
      element.style.border = "1px solid forestgreen"
      element.style.borderRadius = "0.25em"
      element.style.boxShadow = "0 0 15px forestgreen"
    },
    wrong_input_changes(element){
      element.style.border = "1px solid red"
      element.style.borderRadius = "0.25em"
      element.style.boxShadow = "0 0 15px red"
    },
    check_email() {
      let email = document.getElementById('id_login_email')
      if (this.$refs.login_email.check_length('normal') && this.$refs.login_email.validateEmail()) {
        // name.className = 'true-input'
        this.true_input_changes(email)
      }
      else {
        this.wrong_input_changes(email)
      }
    },
    check_pass() {
      let pass = document.getElementById('id_login_pass')
      if (this.$refs.login_pass.check_length('pass')) {
        // name.className = 'true-input'
        this.true_input_changes(pass)
      }
      else {
        this.wrong_input_changes(pass)
      }
    },
  }
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

.overflow-hidden {
  overflow: hidden;
}
</style>