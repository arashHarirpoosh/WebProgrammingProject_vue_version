<template>
  <div id="app">
    <ArrowDown/>
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <div class="flex-main-container">
      <div class="title_part">
        <Header/>
      </div>
      <div class="flex-hero-header">
        <HeroHeader/>
        <!--        <div class="flex-pic-part">-->
        <div>
          <img class="clock-img" src="../assets/clock.png">
        </div>
      </div>
      <div class="flex-others">
        <div class="order-part">
          <div>
            مرتب سازی بر اساس:
          </div>
          <button>بیشترین فروش</button>
          <button>قیمت</button>
        </div>
        <div class="products-part">
          <div class="flex-item-product">

          </div>
          <div class="flex-item-filters">
            <FilterBox :categories="categories"/>

            <div class="flex-set-price-part">
              order
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>

    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroHeader from "../components/HeroHeader";
import ArrowDown from "../components/ArrowDown";
import FilterBox from "../components/FilterBox";
export default {
  name: 'App',
  components: {
    FilterBox,
    ArrowDown,
    Header,
    HeroHeader,
    Footer
  },
  data(){
    return{categories: []}
  },
  created() {
    this.categories = ["دسته بندی 1", "دسته بندی 2", "دسته بندی 3", "دسته بندی 4", "دسته بندی 5"]
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Yekan';
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot?#iefix') format('embedded-opentype'),
  url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.woff') format('woff'),
  url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.ttf') format('truetype');
  font-weight: normal;
}

*{box-sizing: border-box}

/*
    Flex Container that contains menu, hero header, others and footer
 */
.flex-main-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-items: center;
  left: 0;
  top: 0;
  /*top: 65px;*/
  height: 100%;
  width: 100%;
  /*background-color: gray;*/
}
/*
    Title part of the flex container
 */
.title_part {
  flex: 65px;
  /*height: 65px;*/
  /*background-color: #111111;*/
  border: 1px solid red;
}
/*
    hero header part of the flex container
 */
.flex-hero-header{
  /*float: left;*/
  /*width: 100%;*/
  flex: 30%;
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  /*height: 40%;*/
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: orange;
  border: 1px solid red;
}
/*
    other part of the flex container
 */
.flex-others {
  flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /*float: top;*/
  /*width: 100%;*/
  /*height: 60%;*/
  /*padding:5px 5px 5px 5px;*/
  background-color: rgb(247, 247, 247);
  border: 1px solid red;
}
/*
    Design of the clk img in hero header
 */
.clock-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
/*
    Design the partition of the order parts
 */
.order-part {
  flex: 50px;
  direction: rtl;
  display: flex;
  align-items: center;
  /*justify-content: space-evenly;*/
  /*float: left;*/
  font-size: 1.5vw;
  /*height: 50px;*/
  margin: 7.5px;
  background-color: white;
  border: 1px solid blue;
}
/*
    Design of the product part
 */
.products-part {
  flex: 100%;
  display: flex;
  flex-direction: row;
  /*align-items: center;*/
  margin: 7.5px;
  background-color: rgb(247, 247, 247);
  border: 1px solid blue;
}
/*
    Design the partition of the part which product cards placed
 */
.flex-item-product {
  flex: 75%;
  margin: 7.5px;
  background-color: white;
  border: 1px solid orchid;
}
/*
    Design the partition of the part which category and price filter placed
 */
.flex-item-filters{
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border: solid yellow;
  padding: 0;
  direction: rtl;
}
/*
    Design the partition of the category filter
 */

/*
    Design the partition of the price filter
 */
.flex-set-price-part {
  flex: 30%;
  margin: 7.5px;
  background-color: white;
  border: 1px solid orchid;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-size: 16px;
  font-family: 'Yekan', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>