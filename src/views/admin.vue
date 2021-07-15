<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <h2 ref="ss" id="ss">ادمین عزیز، خوش آمدید</h2>
        <ToggleButton @click="changeVue" :number="3"/>

        <div v-if="activeTab==='categoryLists'">
          <input class="btn_createProduct" type="button" value="+ایجاد دسته بندی جدید"/>
        </div>
        <ClassListTable :list-rows="listRows" :listHeaders="listHeaders" v-if="activeTab==='categoryLists'"/>

        <CodeSearch v-if="activeTab==='receipts3'"/>
        <Table :rows="rows" :headers="headers" v-if="activeTab==='receipts3'"/>

        <div>
          <input class="btn_createProduct" type="button" value="+ایجاد محصول جدید" v-if="activeTab==='profile3'"/>
        </div>
        <div id="productsList" v-if="activeTab==='profile3'">
          <NumProduct :key="product.name" v-for="product in products" :product="product"/>
        </div>

      </div>
    </div>
    <Footer/>
    <router-view/>
  </div>

</template>

<script>

import ToggleButton from "../components/ToggleButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import ClassListTable from "../components/ClassListTable";
import NumProduct from "../components/NumProduct";
import CodeSearch from "../components/CodeSearch";

export default {
  name: 'admin',
  components: {
    CodeSearch,
    NumProduct,
    ClassListTable,
    Table,
    Footer,
    Header,
    ToggleButton
  },

  data() {
    return {
      listHeaders: {},
      listRows: [],
      activeTab: String,
      headers: [],
      rows: [],
      products: Array
    }
  },
  created() {
    this.activeTab = 'profile3'
    this.product ={
      name: "موس گیمینگ ریزر",
      category: "دسته بندی یک",
      price: "10,000 تومان",
      number: "12"
    }
    this.listHeaders = {
      title1: "دسته بندی",
      title2: "عملیات"
    }
    this.listRows = [
      {
        className: "دسته بندی"
      },
      {
        className: "دسته بندی"
      },
      {
        className: "دسته بندی"
      },
      {
        className: "دسته بندی"
      }
    ]
    this.headers = [
      "کد پیگیری",
      "کالا",
      "قیمت پرداخت شده",
      "نام خریدار",
      "آدرس ارسال شده"
    ]
    this.rows = [
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "هادی",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "هادی",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "هادی",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "هادی",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ],
      [
        "SHOP10230",
        "موس گیمینگ ریزر",
        "10,000 تومان",
        "هادی",
        "تهران، خیابان حافظ، دانشگاه امیرکبیر"
      ]
    ]

    this.products = [
      {
        name: "موس گیمینگ ریزر",
        category: "دسته بندی یک",
        price: "10,000 تومان",
        number: "12"
      },
      {
        name: "موس گیمینگ",
        category: "دسته بندی یک",
        price: "10,000 تومان",
        number: "12"
      },
      {
        name: "موس گیمینگ",
        category: "دسته بندی یک",
        price: "10,000 تومان",
        number: "12"
      }
    ]
  },
  methods:{
    changeVue(e){
      this.activeTab = e.target.id
        // document.getElementsByClassName(this.downBox_class).innerHTML = "kdlskdlks"
        // console.log(document.getElementsByClassName(this.downBox_class).innerHTML)
        //document.getElementsByClassName(this.downBox_class).innerHTML = "kdlskdlks
    }
  }

}
</script>

<style scoped>
#final-template {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border: solid;
  height: 100%;
}
*{
  direction: rtl;
}
html, body{
  height: 99%;
  margin: 0;
  padding: 0;
  background-color: rgb(247, 247, 247);
}
#mainContainer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 95%;
  border: solid yellow;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 70%;
  border: solid red;
}
.title_part {
  flex: 65px;
  /*height: 65px;*/
  /*background-color: #111111;*/
  border: 1px solid red;
}

.btn_createProduct{
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  font-size: 17px;
  padding: 6px 10px;
  margin-top: 25px;
  box-shadow: 2px 8px 30px -3px rgb(0, 157, 255);
}

#productsList{
  display: flex;
  justify-content: center;
  border: solid yellow;
  margin-top: 25px;
  width: 100%;
  height: 60%;
}
</style>