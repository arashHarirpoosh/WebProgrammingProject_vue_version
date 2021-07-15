<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <div class="flex-login-title" v-if="activeTab==='profile2'">
        <div class="head1"><h3>هادی عزیز، خوش آمدید</h3></div>
        <div id = "vertical"></div>
        <div id="head2"><h6>موجودی حساب شما: 10,000 تومان</h6></div>
        <div><button id="btn">افزایش موجودی</button></div>
      </div>

      <div class="flex-login-title" v-if="activeTab==='receipts2'">
        <div class="head1"><h3>هادی عزیز، خوش آمدید</h3></div>
      </div>

      <TuggleButton :number="2" style="margin-bottom: 0; margin-top: 5px" @click="changeVue"/>
      <UserInformationForm btn_text="ثبت نام" style="margin-top: 25px" v-if="activeTab==='profile2'"/>

      <Table :rows="rows" :headers="headers" v-if="activeTab==='receipts2'" style="width: 75%; height: 45%"/>

    </div>
    <!--Footer-->
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import UserInformationForm from "./UserInformationForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TuggleButton from "../components/ToggleButton";
import Table from "../components/Table";
export default {
  name: "userProfile",
  components: {Table, TuggleButton, Footer, Header, UserInformationForm},
  data(){
    return{
      headers: [],
      rows: [],
      activeTab: 'profile2'
    }
  },
  created() {
    this.headers = [
      "کد پیگیری",
      "کالا",
      "قیمت پرداخت شده",
      "آدرس ارسال شده"
    ]
    this.rows = [
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ]
    ]
  },

  methods:{
    changeVue(e){
      this.activeTab = e.target.id
    }
  }
}
</script>

<style scoped>
*{direction: rtl}
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
.flex-login-title {
  display: flex;
  font-size: 20px;
  flex-wrap: wrap;
  align-items: center;
  color: black;
  margin: 15px 15px 0;
}
.head1{
  padding-left: 10px;
}
#head2{
  padding: 0 10px 0 10px;
}
#vertical {
  direction: rtl;
  border-left: 3px solid black;
  height: 40px;
}
#btn{
  background-color: rgb(255, 200, 10);
  border:0.2em solid rgb(246,190,0);
  border-radius:2em;
  font-size: 8px;
  text-align: center;
  font-weight: bold;
}

#btn:hover {
  margin-top: 0;
  -moz-box-shadow: 0 0 4px 1px grey;
  -webkit-box-shadow: 0 0 4px 1px grey;
  box-shadow: 0 0 4px 1px  grey;
}
</style>