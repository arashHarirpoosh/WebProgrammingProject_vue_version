<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <div class="flex-main-container">

      <div class="title_part">
        <ArrowDown />
        <Header />
      </div>

      <HeroHeader />

      <div class="flex-others">
        <div class="order-part">
          <div style="margin-right: 15px;">
            مرتب سازی بر اساس:
          </div>
          <button class="sort_btn">بیشترین فروش</button>
          <button class="sort_btn">قیمت</button>
        </div>

        <div class="products-part">
          <ProducstList ref="pro"/>
          <div class="flex-item-filters">

            <FilterBox :categories="categories"/>

<!--            <div class="flex-set-price-part">-->
<!--              order-->
<!--            </div>-->

          </div>
        </div>
        <Footer/>
      </div>
      <router-view/>

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
import ProducstList from "../components/ProducstList";

export default {
  name: 'Main',
  components: {
    ProducstList,
    FilterBox,
    ArrowDown,
    Header,
    HeroHeader,
    Footer
  },
  data(){
    return{
      categories: []
    }
  },
  created() {
    this.categories = ["دسته بندی 1", "دسته بندی 2", "دسته بندی 3", "دسته بندی 4", "دسته بندی 5"]
  },

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
html body{
  height: 100%;
}


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
  height: 95%;
  width: 100%;
  overflow-y: auto;
  /*background-color: gray;*/
}

/*
    Title part of the flex container
 */
.title_part {
  flex: 65px;
  flex-shrink: 0;
  /*height: 65px;*/
  /*background-color: #111111;*/
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
  margin-bottom: 0;
  background-color: white;
  border: 1px solid #47b847;
}
/*
    Design of the product part
 */
.products-part {
  flex: 100%;
  display: flex;
  flex-direction: row;
  /*align-items: center;*/
  margin: 0 7.5px 7.5px;
  background-color: rgb(247, 247, 247);
  border: 2px solid blue;
}
/*
    Design the partition of the part which product cards placed
 */
.flex-item-product {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 77%;
  padding-bottom: 0;
  margin: 0 7px;
  background-color: rgb(247, 247, 247);
  justify-content: space-between;
  border: 1px solid red;
  /*overflow: scroll;*/
}
/*
    Design the partition of the part which category and price filter placed
 */
.flex-item-filters{
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70%;
  border: solid yellow;
  padding: 0;
  direction: rtl;
}

/*
    Design the partition of the price filter
 */
.flex-set-price-part {
  flex: 30%;
  margin: 7.5px;
  background-color: white;
  border: 1px solid orchid;
}
.sort_btn{
  margin-right: 15px;
  border: none;
  background-color: white;
}

.sort_btn:hover {
  margin-top: 0px;
  -moz-box-shadow: 0px 0px 4px 1px grey;
  -webkit-box-shadow: 0px 0px 4px 1px grey;
  box-shadow: 0px 0px 4px 1px  grey;
}
.sort_btn:focus{
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  font-size: 15px;
  padding: 6px 10px;
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