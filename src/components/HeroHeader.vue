<template>
  <div id="heroHeader" class="flex-hero-header" :style="{backgroundImage:'url(' + imgAddr + ')'}">
    <div class="flex-search-part">
      <div class="search-label">
        <p>در محصولات سایت جستجو کنید...</p>
      </div>

      <div class="search-input-part">
        <!-- Next button -->
        <div class="slider-btn">
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
        </div>
        <!-- Search input -->
        <div class="search">
          <input v-model='search_input' class="search-input" type="text" placeholder="نام محصول خود را وارد کنید"
                 id="secondBox_txtBox" @keyup.enter="searchProduct">
        </div>
        <!-- Previous Button -->
        <div class="slider-btn">
          <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
      </div>

      <div class="btn-part">
        <!--      <button class="search-btn">جستجو کنید</button>-->
        <Button btn_text="جستجو کنید" @click="searchProduct"/>
      </div>

    </div>

    <div>
      <img id="heroHeaderImg" class="clock-img" src="../assets/clock.png">
    </div>

  </div>


</template>

<script>
import Button from "./Button";
import img1 from "../assets/slidesPhoto/slider1.jpg"
import img2 from "../assets/slidesPhoto/slider2.jpg"
import img3 from "../assets/slidesPhoto/slider3.jpg"
import clockImg from "../assets/clock.png"
import compImg from "../assets/slidesPhoto/computer.png"
import toolsImg from "../assets/slidesPhoto/tools.jpg"
import {getAPI} from "../axios-api";
import mainPage from "../views/mainPage";

export default {
  name: "HeroHeader",
  components: {Button},
  data(){
    return {
      slideIndex: 0,
      imgAddr:img1,
      search_input:'',
      search_result:[]
    }
  },
  mounted() {
    this.startSlider()
  },
  methods: {
    showSlides() {
      // let background = document.getElementById("heroHeader")
      let img = document.getElementById("heroHeaderImg")
      // console.log(this.slideIndex)
      if (this.slideIndex === 0) {
        this.imgAddr = img1
        img.src = clockImg

        // background.style.backgroundColor = 'orange'
      }
      else if (this.slideIndex === 1) {
        this.imgAddr = img2
        img.src = compImg

        // background.style.backgroundColor = 'red'
      }
      else {
        this.imgAddr = img3
        img.src = toolsImg
        // background.style.backgroundColor = 'yellow'
      }
      this.slideIndex += 1
      this.slideIndex %= 3
    },

    startSlider() {
      this.showSlides()
      setTimeout(this.startSlider, 10000); // Change image every 10 seconds
    },

    plusSlides(n) {
      this.slideIndex += n
      if (this.slideIndex < 0) {
        this.slideIndex -= n
      }
      this.slideIndex %= 3

      this.showSlides();
    },

    async searchProduct(){
      let req = {'method': 'search',
        'order':'price',
        'searchParam': this.search_input}
      await getAPI.post('/store/products', req).then((response) => {
        console.log(response.data)

        this.search_result = response.data['products']
      })
      this.$emit('searchResult', mainPage)
    }
  },
}

</script>


<style scoped>
/*
    hero header part of the flex container
 */
.flex-hero-header{
  background-size: cover;
  /*max-width: 100%;*/
  /*float: left;*/
  /*width: 100%;*/
  flex: 30%;
  /*width: 100%;*/
  display: flex;
  flex-direction: column;
  /*height: 40%;*/
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: orange;
  border: 1px solid red;
}
.flex-search-part {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 80%;
  width: 100%;
}

/*
    Design of the label placed in hero header
 */
.search-label {
  /*flex: 40px;*/
  flex: 30px;
  direction: rtl;
  color: white;
  font-size: 2vw;
  /*border: 1px solid blue;*/

}

/*
   Design the partition size of the text box placed in hero header
 */
.search-input-part {
  /*flex: 35px;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 60px;
  width: 100%;
  /*border: 1px solid blue;*/
}

.search {
  flex: 98%;
}
/*
  Design of the text box field in hero header
*/
.search-input {
  border:0.2em solid white;
  border-radius:2em;
  /*height: 100%;*/
  /*height: 100%;*/
  width: 25%;
  height: 35px;
  /*height: 10%;*/
  text-align: center;
  /*font-size: 0.7vw;*/
}

/*
    Design the partition of the search button
 */
.btn-part {
  flex: 33%;
  width: 10%;
  /*border: 1px solid blue;*/

}

/*
    Design of the clk img in hero header
 */
.clock-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.slider-btn {
  flex: 1%;
}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  flex: 1%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 1.5vw;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}


/* Position the "next button" to the right */
.next {
  left: 30%;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}


</style>