<template>
  <label v-if="label_kind === 'normal'" class="flex-text-area">
    <div class="input-labels">{{label_name}}</div>
    <input v-model="normal_text" :id="[[label_name]]" class="text-input-part"
           :disabled=label_disabled :type=[[label_type]] :placeholder=[[label_place_holder]]>
  </label>

  <label v-else-if="label_kind === 'pass'" class="flex-text-area">
    <div class="input-labels">{{label_name}}</div>
    <input v-model="pass_text" id="pass_input" class="text-input-part" :disabled=label_disabled
           :type=[[label_type]] minlength="6" :placeholder=[[label_place_holder]] autocomplete="on">
  </label>

  <label v-else class="flex-text-address">
    <div class="address-input-labels">{{label_name}}</div>
    <input v-model="addr_text" id="address_input" class="address-text-input-part"
           :disabled=label_disabled :type=[[label_type]] :placeholder=[[label_place_holder]]>
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
  },
  data() {
    return {
      normal_text: "",
      pass_text: "",
      addr_text: ""
    };
  },
  methods: {
    check_length(kind) {
      let value = ""
      if (kind === "normal") {
        value = this.normal_text
        return 0 < value.length && value.length < 256
      }
      else if (kind === "pass") {
        value = this.pass_text
        return 8 < value.length && value.length < 256
      }
      else {
        value = this.addr_text
        return 0 < value.length && value.length < 1000
      }
    },
    // check_normal_value() {
    //   // let name = document.getElementById('normal_input')
    //   // Use trim to remove white spaces from beginning and end of input value
    //   let name_val = this.normal_text.trim()
    //   return this.check_length(name_val, 'normal')
    // },

    validateEmail() {
      let email = this.normal_text
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return this.check_length('normal') && re.test(String(email).toLowerCase())
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
  height: 2.75vw;
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

/*
    Design partition of the input text
 */
.text-input-part {
  font-size: 1.2vw;
  flex: 70%;
  height: 95%;
  /*border: 1px solid red;*/
  padding-right: 4%;
  border: white;
  border-radius: 0.25em;

}

/*
    Design of the address part of the form
 */
.flex-text-address {
  height: 10vw;
  /*height: 40px;*/
  font-size: 1.2vw;
  flex: 100%;
  display: flex;
  align-items: center;
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
  flex: 90%;
  height: 95%;
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