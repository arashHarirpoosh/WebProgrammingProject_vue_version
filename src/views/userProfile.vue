<template>
  <div class="flex-main-container">

    <Header/>

    <div class="flex-content">
      <div class="flex-login-title" v-if="activeTab==='profile2'">
        <div class="head1"><h3>{{name}}، خوش آمدید</h3></div>
        <div id = "vertical"></div>
        <div id="head2"><h6>موجودی حساب شما:{{balance}} تومان</h6></div>
        <div><button id="btn" @click="changeBalance">افزایش موجودی</button></div>
      </div>

      <div class="flex-login-title" v-if="activeTab==='receipts2'">
        <div class="head1"><h3>هادی عزیز، خوش آمدید</h3></div>
      </div>

      <TuggleButton :number="2" style="margin-bottom: 0; margin-top: 5px" @click="changeVue"/>
      <UserInformationForm ref="userInfoForm" :is_signup="false" btn_text="ویرایش اطلاعات" :disable_label="true"
                           style="margin-top: 25px" v-if="activeTab==='profile2'"/>

      <Table :rows="rows" :headers="headers" v-if="activeTab==='receipts2'" style="width: 75%; height: 45%"/>

    </div>
    <!--Footer-->
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import UserInformationForm from "../components/UserInformationForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TuggleButton from "../components/ToggleButton";
import Table from "../components/Table";
import {getAPI} from "../axios-api";
export default {
  name: "userProfile",
  components: {Table, TuggleButton, Footer, Header, UserInformationForm},
  data(){
    return{
      headers: [],
      rows: [],
      activeTab: 'profile2',
      name: 'هادی',
      balance: 10000
    }
  },
  created() {
    this.getUserInfo()
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
      if (this.activeTab === 'profile2'){
        this.getUserInfo()
      }
    },
    async getUserInfo(){
      let req = {'method': 'getProfile'}
      await getAPI.post('/store/userprofile', req).then((response) => {
        console.log(response.data)
        this.$refs.userInfoForm.name_place_holder = response.data['first_name']
        this.$refs.userInfoForm.family_name_place_holder = response.data['last_name']
        // this.$refs.userInfoForm.email_place_holder = response.data['email']
        // this.$refs.userInfoForm.password_place_holder = response.data['password']
        this.$refs.userInfoForm.address_place_holder = response.data['address']
        this.name = response.data['first_name']
        this.balance = response.data['balance']
      })
    },

    async changeBalance(){
      let req = {'method': 'changeBalance'}
      await getAPI.post('/store/userprofile', req).then((response) => {
        console.log(response.data)
        this.balance = response.data['balance']
      })
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