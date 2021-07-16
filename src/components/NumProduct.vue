<template>
  <div class="num_productBox">
    <span class="number">{{ product.number }}</span>
    <div class="proBox">

      <div class="imageDetails">
        <div style="align-self: center;">
          <img src="../assets/winona.jpg" alt="Girl in a jacket" class="productImage">
        </div>

        <div class="details">
          <div><p style="margin: 0; font-weight: bold; font-size: 1vw">{{ product.name }}</p></div>
          <div><p style="margin: 0; font-size: 0.7vw; color: #616060">{{ product.category }}</p></div>
        </div>
      </div>

      <div class="priceRow">
        <div style="direction: rtl">
          <p style="font-size: 0.95vw">{{ product.price }}</p>
        </div>
        <div>
          <input class="btn_price_row" type="button" value="خرید محصول"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumProduct",
  props: {
    product: Object
    // name: String,
    // category: String,
    // price: String,
    // number: Number
  }
}
</script>

<style scoped>
.num_productBox{
  position: relative;
  /*width: 270px;*/
  width: 20%;
  /*height: 100%;*/
  /*width: 30%;*/
  /*height: 40%;*/
  border: solid;
  margin-left: 5%;
}

.number{
  position: absolute;
  background-color: white;
  height: 30px;
  width: 30px;
  padding-right: 6px;
  padding-top: 4px;
  z-index: 1;
  top: -10px;
  left: -25px;
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
  /*height: 90%;*/
  /*width: 250px;*/
  /*border: 1px solid red;*/
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
  /*width: 100%;*/

  /*border: solid red;*/
}

.productImage{
  /*width: 100%;*/
  /*height: 130px;*/
  width: 40%;
  height: 50%;
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
  height: 100%;
  /*border: 1px solid red;*/

}

.btn_price_row {
  background-color: rgb(0, 157, 255);
  color: white;
  border-radius: 20px;
  /*font-size: 15px;*/
  font-size: 1vw;
  padding: 6px 10px;
  box-shadow: 2px 8px 30px -3px rgb(0, 157, 255);
}
</style>