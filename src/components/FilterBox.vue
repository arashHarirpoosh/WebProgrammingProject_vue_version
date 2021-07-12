<template>
  <div id="filtersContainer">
    <div style="width: 100%"><h5 id="filtersTitle">دسته بندی ها</h5></div>
    <div class="container">
      <label class="script" :key="c" v-for="c in categories">
        <input type="checkbox">
        <label>{{c}}</label>
        <span class="w3docs"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    categories: Array
  }
}
</script>

<style scoped>
.flex-item-filters{
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border: solid yellow;
  padding: 0;
  direction: rtl;

}
#filtersContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 3px solid #d5cece;
  border-radius: .2em;
  box-shadow: 20px 20px 200px 1px #d5cece;
  height: 70%;
  width: 100%;
  padding-bottom: 0;
}

#filtersTitle{
  border-bottom: solid #d5cece 1px;
  width: 100%;
  text-align: right;
  padding: 15px;
  margin-top: 0;
}

.container{
  border: solid red;
  direction: ltr;
  overflow-y: scroll;
  height: 130px;
  width: 100%;
  margin-bottom: 0;
}
.script {
  display: block;
  position: relative;
  text-align: right;
  padding-right: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 12px;
}
/* Hide the default checkbox */
input[type=checkbox] {
  visibility: hidden;
}
/* creating a custom checkbox based on demand */
.w3docs {
  position: absolute;
  top: 0;
  right: 5px;
  height: 15px;
  width: 15px;
  background-color: white;
  border: solid #d5cece 1px;
  border-radius:50%;
}
/* specify the background color to be shown when hovering over checkbox */
.script:hover input ~ .w3docs {
  background-color: orange;
}

/* specify the background color to be shown when checkbox is checked */
.script input:checked ~ .w3docs {
  background-color: #0664bb;

}
/* checkmark to be shown in checkbox */
/* It is not be shown when not checked */
.w3docs:after {
  content: "";
  position: absolute;
  display: none;
}
/* display checkmark when checked */
.script input:checked ~ .w3docs:after {
  display: block;
}
/* styling the checkmark using webkit */
/* creating a square to be the sign of checkmark */
.script .w3docs:after {
  left: 6px;
  bottom: 6px;
  border-radius:50%;

}

input[type=checkbox]:checked + label {
  color: red;
  font-style: normal;
}
</style>