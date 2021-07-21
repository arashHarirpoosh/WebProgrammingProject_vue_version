<template>
  <div class="flex-item-product">
    <div id="productsContainer">
      <ProductCard :key="product.name" v-for="product in current_products" :product="product"/>
    </div>
    <PageButtons @click="click" :btn_num="numOfPages"/>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard";
import PageButtons from "./PageButtons";
import {getAPI} from "../axios-api";
export default {
  name: "ProducstList",
  components: {PageButtons, ProductCard},
  data(){
    return {
      products: [],
      current_products: [],
      numOfProsInPage: 15,
      numOfPages: Number,
      currentPage: 1
    }
  },
  async created() {
    this.prolength = 0
    this.products = []
    await this.fetchNumOfData()
    await this.getData()

    // this.products = [
    //   {
    //     "name": "name 1",
    //     "category": "category 1",
    //     "price": 100,
    //     "id": "1"
    //   },
    //   {
    //     "name": "name 2",
    //     "category": "category 2",
    //     "price": 2,
    //     "id": "2"
    //   },
    //   {
    //     "name": "name 3",
    //     "category": "category 3",
    //     "price": 22,
    //     "id": "3"
    //   },
    //   {
    //     "name": "name 4",
    //     "category": "category 4",
    //     "price": 68,
    //     "id": "4"
    //   },
    //   {
    //     "name": "name 5",
    //     "category": "category 5",
    //     "price": 89,
    //     "id": "5"
    //   },
    //   {
    //     "name": "name 6",
    //     "category": "category 6",
    //     "price": 62,
    //     "id": "6"
    //   },
    //   {
    //     "name": "name 7",
    //     "category": "category 7",
    //     "price": 48,
    //     "id": "7"
    //   },
    //   {
    //     "name": "name 8",
    //     "category": "category 8",
    //     "price": 28,
    //     "id": "8"
    //   },
    //   {
    //     "name": "name 9",
    //     "category": "category 9",
    //     "price": 78,
    //     "id": "9"
    //   },
    //   {
    //     "name": "name 10",
    //     "category": "category 10",
    //     "price": 95,
    //     "id": "10"
    //   },
    //   {
    //     "name": "name 11",
    //     "category": "category 11",
    //     "price": 95,
    //     "id": "11"
    //   },
    //   {
    //     "name": "name 12",
    //     "category": "category 12",
    //     "price": 10,
    //     "id": "12"
    //   },
    //   {
    //     "name": "name 13",
    //     "category": "category 13",
    //     "price": 77,
    //     "id": "13"
    //   },
    //   {
    //     "name": "آرش محسن",
    //     "category": "دسته بندی 14",
    //     "price": "10,000",
    //     "id": "14"
    //   },
    //   {
    //     "name": "name 15",
    //     "category": "category 15",
    //     "price": 73,
    //     "id": "15"
    //   },
    //   {
    //     "name": "name 16",
    //     "category": "category 16",
    //     "price": 25,
    //     "id": "16"
    //   },
    //   {
    //     "name": "name 17",
    //     "category": "category 17",
    //     "price": 42,
    //     "id": "17"
    //   },
    //   {
    //     "name": "name 18",
    //     "category": "category 18",
    //     "price": 25,
    //     "id": "18"
    //   },
    //   {
    //     "name": "name 19",
    //     "category": "category 19",
    //     "price": 65,
    //     "id": "19"
    //   },
    //   {
    //     "name": "name 20",
    //     "category": "category 20",
    //     "price": 21,
    //     "id": "20"
    //   },
    //   {
    //     "name": "name 21",
    //     "category": "category 21",
    //     "price": 7,
    //     "id": "21"
    //   },
    //   {
    //     "name": "name 22",
    //     "category": "category 22",
    //     "price": 94,
    //     "id": "22"
    //   },
    //   {
    //     "name": "name 23",
    //     "category": "category 23",
    //     "price": 23,
    //     "id": "23"
    //   },
    //   {
    //     "name": "name 24",
    //     "category": "category 24",
    //     "price": 22,
    //     "id": "24"
    //   },
    //   {
    //     "name": "name 25",
    //     "category": "category 25",
    //     "price": 69,
    //     "id": "25"
    //   },
    //   {
    //     "name": "name 26",
    //     "category": "category 26",
    //     "price": 24,
    //     "id": "26"
    //   },
    //   {
    //     "name": "name 27",
    //     "category": "category 27",
    //     "price": 48,
    //     "id": "27"
    //   },
    //   {
    //     "name": "name 28",
    //     "category": "category 28",
    //     "price": 46,
    //     "id": "28"
    //   },
    //   {
    //     "name": "name 29",
    //     "category": "category 29",
    //     "price": 71,
    //     "id": "29"
    //   },
    //   {
    //     "name": "name 30",
    //     "category": "category 30",
    //     "price": 64,
    //     "id": "30"
    //   },
    //   {
    //     "name": "name 31",
    //     "category": "category 31",
    //     "price": 54,
    //     "id": "31"
    //   },
    //   {
    //     "name": "name 32",
    //     "category": "category 32",
    //     "price": 50,
    //     "id": "32"
    //   },
    //   {
    //     "name": "name 33",
    //     "category": "category 33",
    //     "price": 48,
    //     "id": "33"
    //   },
    //   {
    //     "name": "name 34",
    //     "category": "category 34",
    //     "price": 37,
    //     "id": "34"
    //   },
    //   {
    //     "name": "name 35",
    //     "category": "category 35",
    //     "price": 33,
    //     "id": "35"
    //   },
    //   {
    //     "name": "name 36",
    //     "category": "category 36",
    //     "price": 85,
    //     "id": "36"
    //   },
    //   {
    //     "name": "name 37",
    //     "category": "category 37",
    //     "price": 42,
    //     "id": "37"
    //   },
    //   {
    //     "name": "name 38",
    //     "category": "category 38",
    //     "price": 41,
    //     "id": "38"
    //   },
    //   {
    //     "name": "name 39",
    //     "category": "category 39",
    //     "price": 77,
    //     "id": "39"
    //   },
    //   {
    //     "name": "name 40",
    //     "category": "category 40",
    //     "price": 8,
    //     "id": "40"
    //   }
    // ]
    this.numOfPages = Math.ceil(this.prolength/this.numOfProsInPage)
    this.current_products = this.products.slice(0, 14)
  },

  methods:{
    click(e){
      // console.log(e.target.id)
      if (e.target.id === 'next'){
        if (this.currentPage !== this.numOfPages){
          this.currentPage += 1
          let curr_page = document.getElementById(this.currentPage.toString())
          console.log(curr_page)
          curr_page.focus()
          let tmp = this.currentPage - 1
          let start = tmp * this.numOfProsInPage
          let end = this.currentPage * this.numOfProsInPage - 1
          console.log(start, end)
          this.current_products.length = 0
          this.current_products = this.products
        }
      }
      else if(e.target.id === 'previous'){
        if (this.currentPage !== 1){
          this.currentPage -= 1
          let curr_page = document.getElementById(this.currentPage.toString())
          console.log(curr_page)
          curr_page.focus()
          let tmp = this.currentPage - 1
          let start = tmp * this.numOfProsInPage
          let end = this.currentPage * this.numOfProsInPage - 1
          console.log(start, end)
          this.current_products.length = 0
          this.current_products = this.products
        }
      }
      else {
        let btn_intValue = parseInt(e.target.innerHTML)
        if (this.currentPage !== btn_intValue){
          this.currentPage = btn_intValue
          let tmp = this.currentPage - 1
          let start = tmp * this.numOfProsInPage
          let end = this.currentPage * this.numOfProsInPage - 1
          console.log(start, end)
          this.current_products.length = 0
          this.current_products = this.products
        }
      }

      if (this.currentPage == 1){
        document.getElementById("previous").classList.add("disable")
        document.getElementById("previous").classList.remove("nextPre_btn")
        document.getElementById("previous").disabled = true
        console.log(document.getElementById("previous").classList)
      }
      else {
        document.getElementById("previous").classList.remove("disable")
        document.getElementById("previous").classList.add("nextPre_btn")
        document.getElementById("previous").disabled = false
        console.log(document.getElementById("previous").classList)
      }
      if(this.currentPage == this.numOfPages){
        document.getElementById("next").classList.add("disable")
        document.getElementById("next").classList.remove("nextPre_btn")
        document.getElementById("next").disabled = true
        console.log(document.getElementById("next").classList)
      }
      else {
        document.getElementById("next").classList.remove("disable")
        document.getElementById("next").classList.add("nextPre_btn")
        document.getElementById("next").disabled = false
        console.log(document.getElementById("next").classList)
      }
      this.getData()
    },
    async fetchNumOfData(){
      // let req = {'order':'price',
      //   'pageNumber': this.pageNumber}
      await getAPI.get('/store/products').then((response) => {
        console.log(response.data)
        this.prolength = response.data['numProducts']
      })
    },
    async getData(){
      let req = {'order':'price',
                 'pageNumber': this.currentPage}
      await getAPI.post('/store/products', req).then((response) => {
        console.log(response.data)

        this.products = response.data['products']
      })
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  direction: rtl;
}
.flex-item-product {
  direction: ltr;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 77%;
  padding-bottom: 0;
  margin: 0 7px;
  background-color: rgb(247, 247, 247);
  justify-content: space-between;
  border: 1px solid red;
  /*overflow: scroll;*/
}
#productsContainer{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  border: solid dodgerblue;

  /*height: 95%;*/
  width: 80%;
  align-self: flex-end;
}
</style>