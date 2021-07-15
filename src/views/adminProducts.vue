<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <div>
          <h2>ادمین عزیز، خوش آمدید</h2>
        </div>
        <TuggleButton :number="3"/>
        <div><input id="btn_createProduct" type="button" value="+ایجاد محصول جدید"/></div>
        <div id="productsList">
          <NumProduct :key="product.name" v-for="product in products" :product="product"/>
        </div>
      </div>
    </div>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import TuggleButton from "../components/ToggleButton";
import NumProduct from "../components/NumProduct";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "adminProducts",
  components: {Footer, Header, TuggleButton, NumProduct},
  data(){
    return {
      products: []
    }
  },
  created() {
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
  }

}
</script>

<style scoped>
*{
  box-sizing: border-box;
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
}
.container{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border: solid red;
  height: 80%;
  width: 70%;
}

h2{
  margin-top: 25px;
  margin-bottom: 0;
}

#productsList{
  display: flex;
  justify-content: center;
  border: solid yellow;
  margin-top: 25px;
  width: 100%;
  height: 60%;
}
#btn_createProduct{
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  font-size: 17px;
  padding: 6px 10px;
  margin-top: 25px;
  box-shadow: 2px 8px 30px -3px rgb(0, 157, 255);
}
</style>