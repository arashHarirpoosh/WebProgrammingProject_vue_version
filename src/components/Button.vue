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
.search-btn {
  font-size: 1.1vw;
  background-color: rgba(255, 192, 8, 0.99);
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

  /*width: 0%;*/
  /*box-shadow: 2px 8px 30px -3px rgba(253, 205, 86, 0.99);*/

  /*cursor: pointer;*/
}

.search-btn:hover {
  margin-top: 0px;
  -moz-box-shadow: 0px 0px 4px 1px grey;
  -webkit-box-shadow: 0px 0px 4px 1px grey;
  box-shadow: 0px 0px 4px 1px  grey;

}
</style>