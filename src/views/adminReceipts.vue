<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <div>
          <h2>ادمین عزیز، خوش آمدید</h2>
        </div>
        <ToggleButton :number="3"/>
        <CodeSearch/>
        <Table :rows="rows" :headers="headers"/>
      </div>
    </div>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>

import ToggleButton from "../components/ToggleButton";
import Table from "../components/Table";
import CodeSearch from "../components/CodeSearch";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default {
  name: 'adminReceipts',
  components: {
    Footer,
    Header,
    CodeSearch,
    Table,
    ToggleButton,
  },
  data() {
    return {
      headers: [],
      rows: []
    }
  },
  created() {
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
      ],

    ]

  }
}
</script>

<style scoped>
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
</style>

