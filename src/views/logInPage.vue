<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <form class="flex-main-box">
        <div class="flex-login-title">
          <p>فروشگاه - ثبت نام</p>
        </div>

        <div class="flex-parts-login">
          <label class="flex-text-area">
            <div class="input-labels">ایمیل</div>
            <input class="text-input-part" type="email" placeholder="ایمیل خود را وارد کنید...">
          </label>

        </div>

        <div class="flex-parts-login">
          <label class="flex-text-area">
            <div class="input-labels">رمز عبور</div>
            <input class="text-input-part" type="password" minlength="6" placeholder="رمز عبور خود را وارد کنید...">
          </label>
        </div>

        <div class="flex-form-btn">
          <button class="search-btn">ثبت نام</button>
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
export default {
  name: "logInPage",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>