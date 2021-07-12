<template>
  <div class="flex-main-container">

    <Header/>
    <div id="mainContainer">
      <div class="container">
        <div>
          <h2>ادمین عزیز، خوش آمدید</h2>
        </div>
        <ToggleButton :number="3"/>
        <div><input id="btn_createProduct" type="button" value="+ایجاد دسته بندی جدید"/></div>
        <ClassListTable :list-rows="listRows" :listHeaders="listHeaders"/>
      </div>
    </div>
    <Footer/>
    <router-view/>
  </div>

</template>

<script>

import ToggleButton from "../components/ToggleButton";
import ClassListTable from "../components/ClassListTable";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default {
  name: 'adminCategoryLists',
  components: {
    Footer,
    Header,
    ClassListTable,
    ToggleButton,
  },
  data() {
    return {
      listHeaders: {},
      listRows: []
    }
  },
  created() {
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
    this.number =3
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