<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <h2 ref="ss" id="ss">ادمین عزیز، خوش آمدید</h2>
        <ToggleButton @click="changeVue" :number="3" style="margin-top: 0"/>

        <div v-if="activeTab==='categoryLists'">
          <input @click="categoryCreation" class="btn_createProduct" type="button" value="+ایجاد دسته بندی جدید"/>
        </div>

        <Modal ref="create_category">
          <template v-slot:header><h3>ایجاد دسته بندی</h3></template>

          <template v-slot:body>
            <div class="flex-parts-login">
              <label class="flex-text-area">
                <div class="input-labels">نام دسته بندی</div>
                <input class="text-input-part" type="text" ref="categoryName" value="">
              </label>
            </div>
          </template>

          <template v-slot:footer>
            <input @click="createCategory" class="register_btn" type="button" value="ثبت ویرایش"/>
          </template>
        </Modal>

        <ClassListTable @click="updateTable" :list-rows="listRows" :listHeaders="listHeaders" v-if="activeTab==='categoryLists'"/>

        <CodeSearch v-if="activeTab==='receipts3'"/>
        <Table :rows="rows" :headers="headers" v-if="activeTab==='receipts3'"/>

        <div>
          <input @click="addProduct" class="btn_createProduct" type="button" value="+ایجاد محصول جدید" v-if="activeTab==='profile3'"/>
        </div>

        <Modal ref="create_product">
          <template v-slot:header><h3>ایجاد محصول</h3></template>

          <template v-slot:body>
            <ProductCreate ref="addPro"/>
          </template>

          <template v-slot:footer>
            <input @click="registerProduct" class="register_btn" type="button" value="ثبت محصول"/>
          </template>
        </Modal>

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
import {getAPI} from "../axios-api";
import Modal from "../components/Modal";
import ProductCreate from "../components/ProductCreate";

export default {
  name: 'admin',
  components: {
    ProductCreate,
    Modal,
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
    this.productInfo()
    this.listHeaders = {
      title1: "دسته بندی",
      title2: "عملیات"
    }
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

  },
  methods:{
    changeVue(e){
      this.activeTab = e.target.id
      if (this.activeTab === 'profile3')
        this.productInfo()
      else if(this.activeTab === 'categoryLists')
        this.categoryInfo()
        // document.getElementsByClassName(this.downBox_class).innerHTML = "kdlskdlks"
        // console.log(document.getElementsByClassName(this.downBox_class).innerHTML)
        //document.getElementsByClassName(this.downBox_class).innerHTML = "kdlskdlks
    },
    async productInfo(){
      let req = {'request': 'products'}
      await getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
        this.products = response.data.slice(0, 3)
      })
    },
    addProduct(){
      this.$refs.create_product.openModal()
    },
    async registerProduct(){
      let req = {
        'createPro': 'true',
        'productName': this.$refs.addPro.$refs.proName.value,
        'price': parseInt(this.$refs.addPro.$refs.proPrice.value),
        'numberOfProducts': parseInt(this.$refs.addPro.$refs.numOfProducts.value),
        'numberOfPurchased': parseInt(this.$refs.addPro.$refs.numOfPurchased.value),
        'category': this.$refs.addPro.$refs.proCategory.value
      }
      await getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
      })
    },
     categoryInfo() {
      let req = {'categories': 'true'}
      getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
        this.listRows = response.data
      })
    },
    categoryCreation(){
      this.$refs.create_category.openModal()
    },
    async createCategory(){
      let req = {
        'createCategory': 'true',
        'category': this.$refs.categoryName.value
      }
      // console.log(req)
      await getAPI.post('/store/admin', req).then((response) => {
        console.log(response.data)
      })
      this.categoryInfo()
    },
    updateTable(){
      this.categoryInfo()
    }
  }

}
</script>

<style scoped>

*{
  direction: rtl;
}
.flex-main-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  left: 0;
  top: 0;
  /*top: 65px;*/
  height: 95%;
  width: 100%;
  overflow-y: auto;
  /*background-color: gray;*/
}
#mainContainer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 98%;
  border: solid yellow;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 70%;
  border: solid red;
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
  flex-wrap: wrap;
  justify-content: center;
  border: solid yellow;
  margin-top: 25px;
  width: 90%;
  height: 60%;
}

.register_btn{
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  font-size: 15px;
  padding: 6px 10px;
  box-shadow: 2px 8px 30px -3px rgb(0, 157, 255);
}

</style>