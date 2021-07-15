<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <div>
          <h2>هادی عزیز، خوش آمدید</h2>
        </div>
        <ToggleButton :number="2"/>
        <Table :rows="rows" :headers="headers"/>
      </div>
    </div>
    <!--Footer-->
    <Footer/>

    <router-view/>
  </div>
</template>

<script>

import ToggleButton from "../components/ToggleButton";
import Table from "../components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default {
  name: 'userReceipts',
  components: {
    Footer,
    Header,
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