<template>
  <label class="flex-text-area">
    <div class="input-labels">{{label_name}}</div>
    <input class="text-input-part" :type=[[label_type]] :placeholder=[[label_place_holder]]>
  </label>

</template>

<script>
export default {
  name: "InputTextFiled",
  props: {
    label_name:String,
    label_type:String,
    label_place_holder:String
  }
}
</script>

<style scoped>
/*
    Design inner partition of each row
 */
.flex-text-area {
  font-size: 1.2vw;
  flex: 50%;
  height: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px;
  /*border: 1px solid red;*/
}

/*
    Design of the labels beside text input
 */
.input-labels {
  flex: 20%;
  height: 70%;
  font-size: 1.2vw;
  /*border: blueviolet;*/
  display: flex;
  background-color: rgb(14, 186, 197);
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 0.25em;
  /*border: black;*/

}

/*
    Design partition of the input text
 */
.text-input-part {
  font-size: 1.2vw;
  flex: 70%;
  height: 70%;
  /*border: 1px solid red;*/
  padding-right: 4%;
  border: white;
  border-radius: 0.25em;

}

</style>