<template>
  <div>

    <div v-if=" TotalSom > 0 "  class="col-12 promenu">
      <div class="row">
        <div class="col-12 menuo productf">
          <h1>OUR CARDS </h1>
          <p>{{ Msg }}</p>
        </div>

      </div>
    </div>

    <div class="row menupro">
      <div class="row  menu">
        <div v-for="prod in monPan" :key="prod.id" class="col-3 menup ">
          <div class="row col-12 menupa product">
            <h4> {{ prod.name }} </h4>
            <p>{{ prod.price }}</p>
          </div>
          <div class="row col-12 menupimg">
            <img class="" :src="prod.img" alt="" style="width: 100%;">
          </div>
          <div class="row col-12 blackbox">
            <div class="col-4 detailp" @click="addQteUnArt(prod)"><span>+</span> </div>
            <div class="col-4 addp"><span id="qteadd-${result.id}">{{ prod.qtebuy }}</span></div>
            <div class="col-4 detailm" @click="moinsQteUnArt(prod)"><span>-</span> </div>
          </div>
          <div class="row col-12 redbox">
            <div class="col-12 deleteitem" @click="deleteUnArt(prod)"> $ {{ prod.qtebuy * prod.price }} <i
                class="fa fa-trash"></i><span id="total-${result.id}"></span> </div>
          </div>
         
        </div>

      </div>
    </div>
    <div v-if=" TotalSom == 0 "  class="testimony">
      
      <p><span>VEUILLEZ  AJOUTER  OU AUGMENTER LA QUANTITE DES ARTICLE DANS VOTRE PANIER </span> </p>
      <p> <span> {{ TotalSom }} $ </span></p>

      <div class="  buttonmore">
        
      </div>
    </div>
    <div v-else class="testimony">
      
      <p><span>TOTAL </span> </p>
      <p> <span> {{ TotalSom }} $ </span></p>

      <div class="  buttonmore">
        <button @click="buynow"> BUY NOW</button>
      </div>
    </div>

    
  </div>
</template>

<script>
import { ref } from 'vue';
import { useProductsbd } from '../ProductsBD/product';


export default {
  components: {

  },

  setup() {
  
    let monPan = ref([]);
    let TotalSom= ref(0);
    let Msg = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla!');

    const bdProducts = useProductsbd();
    monPan.value = bdProducts.MonPan 

    TotalSom.value = bdProducts.SommeTotal ? bdProducts.SommeTotal : 0
    
    const boutique = function(){
        this.$router.push({name:'boutique'})

      }

    const addQteUnArt = function(prod){
      monPan.value = bdProducts.addQteUnArt(prod)
      TotalSom.value = bdProducts.totalSomme(monPan.value)
   
    }

    const moinsQteUnArt = function(prod){
      monPan.value = bdProducts.moinsQteUnArt(prod)
      TotalSom.value = bdProducts.totalSomme(monPan.value)
      
    }

    const deleteUnArt = function(prod){
      monPan.value = bdProducts.deleteUnArt(prod)
      TotalSom.value = bdProducts.totalSomme(monPan.value)
    }

  
    const buynow = function(){
      
      if(TotalSom.value <= 0){
        ''
      }else{
        Msg.value = 'Commande effectuée. Merci et à bientôt!!!'
        localStorage.removeItem("article");
        localStorage.clear();
        
        monPan.value = bdProducts.MonPan
        
      }


    }

    return {
      bdProducts,
      boutique,
      monPan,
      addQteUnArt,
      moinsQteUnArt,
      deleteUnArt,
      
      TotalSom,
      Msg,
      buynow,
      
    }
  },
  
}
</script>


<style lang="scss" scoped>
.productf {
  color: black;
  text-align: center;
  padding: 0px;
  opacity: 1;

  h1 {
    font-family: 'Gabarito', cursive;
  }

  #textvide {
    color: #000;
    font-size: 1.3em;
    padding: 30px;
    text-align: center;

    a {
      cursor: pointer;
      text-decoration: none;
    }
  }
}

.testimony {
      border: 2px solid #ccc;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 5px;
      padding: 16px;
      margin-top: 5% ;
      margin-right: 20%;
      margin-left: 20%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      &::after {
        content: "";
        clear: both;
        display: table;
      }

      span {
        display: grid;
        justify-content: center;
        font-size: 20px;
        //margin-right: 15px;
        font-weight: bold;
      }
    }
.menu {
  width: auto;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 15px;

  //border: 2px solid red;
  .menup {
    width: 24%;
    margin: 6px;
    border: 2px solid gray;
    padding-top: 10px;

    .menupimg {
      img {
        object-fit: fill;
        margin: 0 auto;
      }
    }

    .menupa {
      padding: 10 px;
      margin-left: 0px;
      margin-right: 0px;
      opacity: 1;

      h4 {
        margin-top: 1px;
        margin-bottom: 1px;
      }

      p {

        margin-left: 0px;
        margin-right: 0px;
      }
    }

    .blackbox {
      cursor: pointer;
      margin: 0px;
      height: auto;
      //border: 1px solid yellow;
      padding: 5px;
      background-color: rgba(0, 0, 0, 1);
      color: rgba(255, 255, 255, 1);
      font-size: 15px;
      // display: grid;
      grid-column-gap: 2px;

      .detail {
        width: 25%;
        height: auto;
        margin-right: 5px;
        border: none;
        border-radius: 25px;
        background-color: rgb(238, 192, 131);
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        text-align: center;
        padding: 5px;
      }

      .add {
        width: 30%;
        padding: 5px;
        margin-right: 2px;
        border: none;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 1);
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        text-align: center;

        //border: 1px solid red;
        .button {
          border: none;
          background-color: transparent;
        }
      }

      .price {
        width: 40%;
        // border: 1px solid yellow;
        text-align: center;
        font-size: 15px;
        padding: 5px;
        float: right;
      }

      .detailp {
        width: 30%;
        height: auto;
        margin-right: 5px;

        border: none;
        border-radius: 5px;
        background-color: rgb(238, 192, 131);
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        text-align: center;
      }

      .addp {
        width: 30%;
        height: auto;
        //margin-right: 5px;
        margin-left: 5px;
        border: none;
        border-radius: 5px;
        background-color: rgb(238, 192, 131);
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        text-align: center;
      }

      .detailm {
        float: right;
        width: 30%;
        height: auto;
        margin-right: 0px;
        //margin-left: 5px;
        border: none;
        border-radius: 5px;
        background-color: rgb(238, 192, 131);
        color: rgba(0, 0, 0, 1);
        font-size: 15px;
        text-align: center;
      }

    }

    .redbox {
      margin-bottom: 0px;
      cursor: pointer;

      .deleteitem {
        height: 20px;
        background-color: rgba(196, 5, 5, 1);
        color: rgba(255, 255, 255, 1);
        text-align: center;

      }
    }
  }

  .product {
    color: black;
    text-align: center;
    padding: 0px;
    background-color: white;
  }
}

.productf {
  color: black;
  text-align: center;
  padding: 0px;
  opacity: 1;

  h1 {
    font-family: 'Gabarito', cursive;
  }

  #textvide {
    color: #000;
    font-size: 1.3em;
    padding: 30px;
    text-align: center;

    a {
      cursor: pointer;
      text-decoration: none;
    }
  }
}

.produit::after {
  content: "";
  clear: none;
  display: table;
}

.buttonmore {
  display: grid;
  justify-content: center;
  //padding-left: 50%;
  width: auto;
  border: none;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 1);

  button {
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    width: auto;

    //margin-left: 46%;
    margin-top: 3%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgb(247, 174, 231);;
    background-color: rgb(247, 174, 231);
    color: rgb(19, 17, 17);
  }

}

.about {
  //border: 1px solid red;
  width: auto;
  height: 400px;
  background-color: #f7c8c8;

  .sectiontext {
    //  border: 1px solid blueviolet;
    width: 50%;
    margin-top: 5%;
    margin-bottom: 5%;
    margin-right: 2%;
    margin-left: 10%;

    h1 {
      font-family: 'Gabarito', cursive;
      font-size: 2em;
      font-weight: bold;
    }

    .buttonreadmore {
      border: none;
      //border: 1px solid blue;
      width: auto;
      height: 50px;
      margin-top: 10px;
      margin-left: 0px;
      margin-bottom: 0px;

      button {
        cursor: pointer;
        border: 1px solid black;
        height: auto;
        width: auto;
        color: rgba(255, 255, 255, 1);
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 30px;
        background-color: rgba(0, 0, 0, 1);
        border-radius: 5px;
      }
    }
  }

  .sectionimg {
    float: right;
    width: 30%;
    top: 0px;
    left: 0px;
    // border: 1px solid black;
    margin-right: 2%;
    margin-left: 0%;
    margin-top: 5%;
    height: auto;
    margin-bottom: 5%;

    img {
      top: 0px;
      left: 0px;
      object-fit: cover;
      width: 100%;
      height: 300px;
    }


  }

}



@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }

  .sidebar a {
    font-size: 18px;
  }
}

@media screen and (max-width: 1337px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 24%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;

        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 37%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);

          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 35%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 1133px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 24%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;

        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 35%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);

          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 36%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 1123px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 24%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;

        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 35.5%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);

          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 34.5%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 1109px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.90%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 35.4%;
          padding: 5px;
          margin-right: 0.8px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 34.2%;

          text-align: center;
          font-size: 13.5px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 1009px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.85%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 35.5%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);

          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 34.5%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 969px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.69%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 36%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);

          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 34.5%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 851px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.50%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 36%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 13.5px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 33.5%;

          text-align: center;
          font-size: 13.5px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 744px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.25%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);

          text-align: center;
        }

        .add {
          width: 36%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 14px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 32.5%;

          text-align: center;
          font-size: 13px;
          padding: 5px;
          float: right;
        }
      }

    }

  }
}

@media screen and (max-width: 645px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: 23.15%;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: fill;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 3px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;

        .detail {
          width: 25%;
          height: auto;
          margin-right: 1px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);
          font-size: 13px;
          text-align: center;
        }

        .add {
          width: 30%;
          padding: 2px;
          margin-right: 0.2px;
          border: none;
          border-radius: 20px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 12px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 32.5%;

          text-align: center;
          font-size: 12px;
          padding: 5px;
          float: left;
        }
      }

    }

  }
}

@media screen and (max-width: 604px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: auto;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: cover;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;
        /* .detail{
         width: 25%;
         height: auto;
         margin-right: 5px;
         border: none;
         border-radius: 25px;
         background-color: rgb(238, 192, 131);
         color: rgba(0, 0, 0, 1);
       
         text-align: center;
       }
       .add{
         width: 30%;
         padding-left: 2px;
         padding-right: 2px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:25%;
       text-align: center;
       }*/

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          text-align: center;
          padding: 5px;
        }

        .add {
          width: 30%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 40%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }


      }

    }

  }
}

@media screen and (max-width: 332px) {
  .menu {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;

    .menup {
      width: auto;
      margin: 5px;
      border: 2px solid gray;
      padding-top: 10px;

      .menupimg {
        img {
          object-fit: cover;
          margin: 0 auto;
        }
      }

      .menupa {
        padding: 0 auto;
        margin-left: 0px;
        margin-right: 0px;
        opacity: 1;

        h4 {
          margin-top: 1px;
          margin-bottom: 1px;
        }

        p {

          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .blackbox {
        cursor: pointer;
        margin: 0px;
        height: auto;
        border: 1px solid black;
        padding: 5px;
        background-color: rgba(0, 0, 0, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 15px;

        grid-column-gap: 2px;
        /* .detail{
         width: 25%;
         height: auto;
         margin-right: 5px;
         border: none;
         border-radius: 25px;
         background-color: rgb(238, 192, 131);
         color: rgba(0, 0, 0, 1);
       
         text-align: center;
       }
       .add{
         width: 30%;
         padding-left: 2px;
         padding-right: 2px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:25%;
       text-align: center;
       }*/

        .detail {
          width: 25%;
          height: auto;
          margin-right: 5px;
          border: none;
          border-radius: 25px;
          background-color: rgb(238, 192, 131);
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          text-align: center;
          padding: 5px;
        }

        .add {
          width: 35%;
          padding: 5px;
          margin-right: 2px;
          border: none;
          border-radius: 25px;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
          font-size: 15px;
          text-align: center;

          .button {
            border: none;
            background-color: transparent;
          }
        }

        .price {
          width: 35%;

          text-align: center;
          font-size: 15px;
          padding: 5px;
          float: right;
        }


      }

    }

  }
}

@media screen and (max-width : 1023px) {
  .footer {
    width: auto;
    height: 380px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    position: relative;

    .mask {
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      z-index: 1;
      width: auto;
    }

    .container {
      z-index: 2;
      position: absolute;
      width: auto;
      /* border: 1px solid red;  */
      margin: 10px;

      .leftbox {
        /* //float:left;
       border: 1px solid yellow;
       margin-left: 10%;
       margin-right: 10%;
      // background:Red;
       width:auto;
       height:200px;
       color: rgba(255, 255, 255, 1);
       h4{
         text-align: center;
       }
       ul{
         padding-left: 2px;
         list-style: none;
         i{
           text-align: left;
           margin-right: 2px;
         }
         li{
           text-align: left;
           margin-top: 8px;
           margin-bottom: 8px;
           font-size: 20px;
         }
       }*/
        visibility: hidden;
        display: none;
      }

      .middlebox {
        float: left;
        /*border:1px solid red;*/
        margin-left: 5%;
        margin-right: 5%;
        width: auto;
        height: 380px;
        padding: 15px;
        color: rgba(255, 255, 255, 1);

        h2 {
          text-align: center;
        }

        p {
          text-align: center;
          margin-bottom: 5%;
        }

        .iconet {
          text-align: center;
          /* border: 1px solid red;  */

          ul {
            list-style: none;
            padding: 0%;

            i {
              margin: 2px;
            }

            li {
              text-align: center;
              display: inline-block;
              margin: 5px;
              font-size: 20px;
            }
          }
        }

        .afterfoot {
          color: rgba(255, 255, 255, 1);
          margin-top: 5%;
          /*border: 1px solid red;*/
          border-top: 1px solid rgba(255, 255, 255, 1);
          width: auto;
          height: auto;

          p {
            padding-top: 5%;
            text-align: center;
          }
        }
      }

      .rightbox {
        /*margin-right: 10%;
       border: 1px solid blue;
       float:right;
       color: rgba(255, 255, 255, 1);
       width:25%;
       height:280px;
       h4{
         text-align: center;
         
       }
       ul{
         list-style: none;
         i{
           margin: 2px;
         }
         li{
           margin: 5px;
           font-size: 20px;
           a{
             text-decoration: none;
             color: rgba(255, 255, 255, 1);
           }
         }
       }*/
        visibility: hidden;
        display: none;


      }
    }
  }
}
</style>