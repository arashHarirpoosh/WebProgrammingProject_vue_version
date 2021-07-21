<template>
  <div v-if="label_kind === 'normal'" class="input-container">
    <label class="flex-text-area" :id=[[label_id]]>
      <div class="input-labels">{{label_name}}</div>
      <input v-model="normal_text" :id="[[label_name]]" class="text-input-part"
             :disabled="label_disabled" :type=[[label_type]] :placeholder=[[label_place_holder]]>
    </label>

    <span class="error">{{error_msg}}</span>
  </div>

  <div  v-else-if="label_kind === 'pass'" class="input-container">
    <label class="flex-text-area" :id=[[label_id]]>
      <div class="input-labels">{{label_name}}</div>
      <input v-model="pass_text" id="pass_input" class="text-input-part" :disabled="label_disabled"
             :type=[[label_type]] minlength="6" :placeholder=[[label_place_holder]] autocomplete="on">
    </label>

    <span class="error">{{error_msg}}</span>
  </div>

  <div v-else class="input-addr-container">
    <label class="flex-text-address" :id=[[label_id]]>
      <div class="address-input-labels">{{label_name}}</div>
      <input v-model="addr_text" id="address_input" class="address-text-input-part"
             :disabled="label_disabled" :type=[[label_type]] :placeholder=[[label_place_holder]]>
    </label>

    <span class="error">{{error_msg}}</span>
  </div>


</template>

<script>
export default {
  name: "InputTextFiled",
  props: {
    label_id:String,
    label_name:String,
    label_type:String,
    label_place_holder:String,
    label_kind: {
      default:"normal",
      type:String
    },
    // label_disabled: {
    //   default:false,
    //   type:Boolean
    // }
  },
  data() {
    return {
      label_disabled: false,
      normal_text: "",
      pass_text: "",
      addr_text: "",
      error_msg: ""
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
        return 7 < value.length && value.length < 256
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
    },
    true_input_changes(id_kind){
      let element = document.getElementById(id_kind)
      element.style.border = "1px solid forestgreen"
      element.style.borderRadius = "0.25em"
      element.style.boxShadow = "0 0 10px forestgreen"
    },
    wrong_input_changes(id_kind){
      let element = document.getElementById(id_kind)
      element.style.border = "1px solid red"
      element.style.borderRadius = "0.25em"
      element.style.boxShadow = "0 0 7px red"
    },
    reset_input_change(id_kind){
      let element = document.getElementById(id_kind)
      element.style.border = "1px solid white"
      element.style.borderRadius = "0.25em"
      element.style.boxShadow = "0 0 7px white"
    }

  }
}
</script>

<style scoped>

.input-container {
  flex: 50%;
  display: flex;
  flex-direction: column;
}

.input-addr-container {
  flex: 100%;
  height: 10vw;
  display: flex;
  flex-direction: column;
}
/*
    Design inner partition of each row
 */
.flex-text-area {
  font-size: 1.2vw;
  /*flex: 50%;*/
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
  max-width: 99px;
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
  /*height: 40px;*/
  font-size: 1.2vw;
  flex: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 5px;
  width: 99%;
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

/* This is the style of our error messages */
.error {
  width  : 100%;
  padding: 0;

  font-size: 0.75vw;
  color: red;
  /*background-color: white;*/
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
</style>