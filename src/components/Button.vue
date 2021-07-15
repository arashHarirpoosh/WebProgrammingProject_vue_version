<template>
  <button class="search-btn">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  name: "button",
  props: {
    btn_text:String
  }
}
</script>

<style scoped>

/*
    Design of button placed in hero header
 */
.search-btn {
  font-size: 1.1vw;
  width: 100%;
  /*background-color: rgba(255, 192, 8, 0.99);*/
  background-color: rgb(255, 200, 10);
  display:block;
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
}

/*
    Design of button placed in hero header on hover
 */
.search-btn:hover {
  margin-top: 0px;
  -moz-box-shadow: 0px 0px 4px 1px grey;
  -webkit-box-shadow: 0px 0px 4px 1px grey;
  box-shadow: 0px 0px 4px 1px  grey;
}

</style>