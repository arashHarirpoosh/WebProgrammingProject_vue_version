<template>
  <div class="num_productBox">
    <span class="number">{{ product.numberOfProducts }}</span>
    <div class="proBox">

      <div class="imageDetails">
        <div style="align-self: center;">
          <img src="../assets/winona.jpg" alt="Girl in a jacket" class="productImage">
        </div>

        <div class="details">
          <div><p ref="name" style="margin: 0; font-weight: bold; font-size: 20px">{{ product.productName }}</p></div>
          <div><p ref="category" style="margin: 0; font-size: 18px; color: #616060">{{ product.category }}</p></div>
        </div>
      </div>

      <div class="priceRow">
        <div style="direction: rtl">
          <p ref="price">{{ product.price * 1000}} تومان</p>
        </div>
        <div>
          <input @click="editProduct" class="btn_price_row" type="button" value="ویرایش محصول"/>
        </div>

        <Modal ref="product_editing">
          <template v-slot:header><h3>ویرایش محصول</h3></template>

          <template v-slot:body>
            <ProductInputs ref="proInputs"/>
          </template>

          <template v-slot:footer>
            <input @click="updateProduct" class="btn_price_row" type="button" value="ثبت ویرایش"/>
          </template>
        </Modal>

      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./Modal";
import ProductInputs from "./ProductInputs";
import {getAPI} from "../axios-api";
export default {
  name: "NumProduct",
  components: {ProductInputs, Modal},
  props: {
    product: Object
    // name: String,
    // category: String,
    // price: String,
    // number: Number
  },
  data(){
    return{
      bool: true,
      proName: ""
    }
  },
  methods:{
    editProduct(){
      this.$refs.product_editing.openModal()
      // console.log(this.$refs.name.innerHTML)
    },
    async updateProduct(){
      if (this.bool){
        this.$refs.proInputs.$refs.proName.value = this.$refs.name.innerHTML
        this.$refs.proInputs.$refs.proCategory.value = this.$refs.category.innerHTML
        this.$refs.proInputs.$refs.proPrice.value = this.$refs.price.innerHTML
        this.proName = this.product.productName
        this.bool = false
      }
      else {
        let price = this.$refs.proInputs.$refs.proPrice.value.split(" ")
        price = parseInt(price[0])
        let req = {
          'editPro': 'true',
          'productName': this.proName,
          'productName2': this.$refs.proInputs.$refs.proName.value,
          'price': price,
          'numberOfProducts': this.product.numberOfProducts,
          'numberOfPurchased': this.product.numberOfPurchased,
          'category': this.$refs.proInputs.$refs.proCategory.value
        }
        await getAPI.post('/store/admin', req).then((response) => {
          console.log(response.data)
        })
      }
      // let user_email = this.$refs.proInputs.normal_text
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.num_productBox{
  position: relative;
  width: 270px;
  height: 100%;
  border: solid;
  margin-left: 15px;
  margin-top: 10px;
}

.number{
  position: absolute;
  background-color: white;
  height: 33px;
  width: 33px;
  padding-right: 4px;
  padding-top: 4px;
  color: rgb(14, 186, 197);
  z-index: 1;
  top: -12px;
  left: 0px;
  border: 1px solid gray;
  border-radius: 50%;
  box-shadow: 2px 8px 15px -4px #2d2d2d;

}

div.proBox{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* vertically center*/
  align-items: center;
  flex-direction: column;
  padding: 15px 15px 0 15px;
  box-shadow: 20px 20px 200px 1px #d5cece;
  height: 100%;
  width: 250px;
  background-color: white;
  position: absolute;
}

div.imageDetails{
  order: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 4;
  width: 100%;
  /*border: solid red;*/
}

.productImage{
  width: 100%;
  height: 130px;
}

div.details{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

div.priceRow{
  order: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  border-top: solid;
  border-width: 1px;
  border-color: #d5cece;
  padding-bottom: 15px;
  padding-top: 15px;
  width: 100%;
}

.btn_price_row {
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  font-size: 15px;
  padding: 6px 10px;
  box-shadow: 2px 8px 30px -3px rgb(0, 157, 255);
}
</style>