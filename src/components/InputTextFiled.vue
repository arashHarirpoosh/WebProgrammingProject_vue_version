<template>
  <label v-if="label_kind === 'normal'" class="flex-text-area">
    <div class="input-labels">{{label_name}}</div>
    <input class="text-input-part" :disabled=label_disabled :type=[[label_type]] :placeholder=[[label_place_holder]]>
  </label>

  <label v-else-if="label_kind === 'pass'" class="flex-text-area">
    <div class="input-labels">{{label_name}}</div>
    <input class="text-input-part" :disabled=label_disabled :type=[[label_type]] minlength="6" :placeholder=[[label_place_holder]]>
  </label>

  <label v-else class="flex-text-address">
    <div class="address-input-labels">{{label_name}}</div>
    <input class="address-text-input-part" :disabled=label_disabled :type=[[label_type]] :placeholder=[[label_place_holder]]>
  </label>

</template>

<script>
export default {
  name: "InputTextFiled",
  props: {
    label_name:String,
    label_type:String,
    label_place_holder:String,
    label_kind: {
      default: "normal",
      type: String
    },
    label_disabled: {
      default: false,
      type:Boolean
    }
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

/*
    Design of the address part of the form
 */
.flex-text-address {
  height: 8vw;
  /*height: 40px;*/
  font-size: 1.2vw;
  flex: 100%;
  display: flex;
  flex-direction: row;
  margin: 5px;
  width: 50%;
  /*border: 1px solid red;*/
  /*direction: rtl;*/
  /*height: 100%;*/

}

/*
    Design partition of the address input text
 */
.address-text-input-part {
  font-size: 1.2vw;
  flex: 88%;
  height: 100%;
  /*border: 1px solid red;*/
  padding-right: 4%;
  border: white;
  border-radius: 0.25em;

}

/*
    Design of the labels beside address text input
 */
.address-input-labels {
  flex: 12%;
  height: 100%;
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
</style>