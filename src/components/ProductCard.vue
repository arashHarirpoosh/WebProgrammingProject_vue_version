<template>
  <div class="proBox">

    <div class="imageDetails">
      <div style="align-self: center;">
        <img src="../assets/winona.jpg" alt="Girl in a jacket" class="productImage">
      </div>

      <div class="details">
        <div><p style="margin: 0; font-weight: bold; font-size: 18px">{{ product.name }}</p></div>
        <div><p style="margin: 0; font-size: 14px; color: #616060">{{ product.category }}</p></div>
      </div>
    </div>

    <div class="priceRow">
      <div style="direction: rtl">
        <p style="font-size: 15px">{{ product.price }} تومان</p>
      </div>
      <div>
        <input class="btn_price_row" type="button" value="خرید محصول"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object
  }
}
</script>

<style scoped>

div.proBox {
  direction: rtl;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* vertically center*/
  align-items: center;
  flex-direction: column;
  padding: 15px 15px 0 15px;
  height: 320px;
  width: 250px;
  background-color: white;
  margin-right: 15px;
  margin-top: 15px;
}

div.imageDetails {
  order: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 4;
  width: 100%;
  /*border: solid red;*/
}

.productImage {
  width: 100%;
  height: 120px;
}

div.details {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

div.priceRow {
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

.btn_price_row:hover {
  margin-top: 0px;
  -moz-box-shadow: 0px 0px 4px 1px rgb(0, 157, 255);
  -webkit-box-shadow: 0px 0px 4px 1px rgb(0, 157, 255);
  box-shadow: 0px 0px 4px 1px  rgb(0, 157, 255);
}
</style>