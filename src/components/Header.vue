<template>
  <div class="navbar">
    <a href="">
      <div class="store_text" @click="redirect">فروشگاه</div>
    </a>
    <a href="\main">صفحه اول</a>
    <a href="#contact">تماس با ما</a>
    <a href="#contact">پشتیبانی</a>
    <a href="#news">محصولات</a>
    <div class="dropdown">
      <button class="dropbtn"> {{dropDownBtn}}
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="\signUp">{{ firstBtn }}</a>
        <a href="\logIn">{{secondBtn}}</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      dropDownBtn: 'ورود / ثبت نام',
      firstBtn: 'ثبت نام',
      secondBtn: 'ورود'
    }
  },
  methods: {
    redirect(){
      this.$router.push('/main')
    }
  }
}
</script>

<style scoped>
  .store_text {
    /*font-size: 1.5vw;*/
    font-size: 1.2em;
    /*font-size: 120%;*/
    color: cadetblue;
    font-weight: bold;
  }

  .navbar {
    overflow: hidden;
    position: fixed;
    flex-shrink: 0;
    right: 0;
    top: 0;
    width: 100%;
    height: 65px;
    background-color: white;
  }

  .navbar a {
    font-size: 1.2vw;
    float: right;
    display: block;
    color: black;
    text-align: center;
    /*padding: 14px 16px;*/
    padding: 14px 25px;
    text-decoration: none;
  }

  .dropdown {
    /*float: left;*/
    position: fixed;
    left: 2%;
    padding: 0.5%;
    /*padding: 0.2em 0.75em;;*/
    overflow: hidden;
  }

  /*
      Design a button for submitting the github username
  */
  .dropdown .dropbtn {
    font-size: 1.1vw;
    background-color: white;
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 0.1em 0.1em 0;
    border:0.2em solid rgb(246,190,0);
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    /*font-family:'Roboto',sans-serif;*/
    font-family: 'Yekan', serif;
    font-weight:300;
    color:black;
    /*background-color: cadetblue;*/
    /*text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);*/
    text-align:center;
    transition: all 0.2s;
    /*width: 50%;*/
    /*cursor: pointer;*/
  }

  .navbar a:hover {
    background-color: rgb(220, 220, 220);
    color: cadetblue;
    border-radius:1em;
  }

  /*.dropdown:hover {*/
  /*    background-color: rgb(220, 220, 220);*/
  /*    border-radius:2em;*/
  /*}*/

  .dropbtn:hover {
    background-color: rgb(246,190,0);
    /*border-radius:2em;*/
  }

  .dropdown-content {
    font-size: 1.1vw;
    display: none;
    position: relative;
    border-radius:1em;
    background-color: rgb(220, 220, 220);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .dropdown-content a:hover {
    border-radius:1em;
    background-color: rgb(247, 247, 247);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }


</style>