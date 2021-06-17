<template>
  <div id="app">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <dev class="flex-main-container">
      <dev class="title_part">
        <Header/>
      </dev>
      <dev class="flex-hero-header">
        <HeroHeader/>
        <div class="flex-pic-part">
          <img class="clock-img" src="../assets/clock.png">
        </div>
      </dev>
      <dev class="flex-others"></dev>
      <Footer/>
    </dev>

<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroHeader from "../components/HeroHeader";

export default {
  name: 'App',
  components: {
    Header,
    HeroHeader,
    Footer
    // HelloWorld
  }
}
</script>

<style>
@font-face {
  font-family: 'Yekan';
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot');
  src: url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.eot?#iefix') format('embedded-opentype'),
  url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.woff') format('woff'),
  url('https://cdn.fontcdn.ir/Font/Persian/Yekan/Yekan.ttf') format('truetype');
  font-weight: normal;
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
  flex: 35%;
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
  flex: 53%;
  display: flex;
  flex-direction: column;
  /*float: top;*/
  /*width: 100%;*/
  /*height: 60%;*/
  background-color: darkgrey;
  border: 1px solid red;
}

.clock-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
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
