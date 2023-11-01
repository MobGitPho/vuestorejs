<template>
    <div class="header">
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <!--a href="" @click="boutique">boutique</a-->
      <RouterLink to="/vuestorejs/">boutique</RouterLink>
      <a href="#">Nos Produits</a>
      <a href="">Panier</a>
      <a href="#">Contact</a>
    </div>
    <div class="topnav">
        <div class="topnav-centered">
          <RouterLink to="/vuestorejs/">BEAUTIFLIE</RouterLink>
        </div>
       
        <div id="main">
          <a  class="openbtn" @click="openNav"><i class="fa fa-bars"></i></a>
        </div>
          
       
        <div class="topnav-right">
          <a href=""><i class="fa fa-user"></i></a>
          <RouterLink to="payement"> <i class="fa fa-shopping-bag"><span id="count"
            class="count">{{ storeProduct.NbArt }}</span></i> </RouterLink>
          <!--a href="" @click="monPanier" class="shop"><i class="fa fa-shopping-bag"><span id="count"
            class="count">{{ NbArtPan }}</span></i></a-->
          <a href=""><i class="fa fa-search"></i></a>
        </div>    
    </div>
  </div>


  
</template>

<script>


import { useProductsbd } from '../ProductsBD/product'

export default {
  
    props:{
      nbp:Number,
    },
   /* beforeMount() {
      console.log('this.NbArtPan',this.NbArtPan)
      

     },*/
    setup(){
      const storeProduct = useProductsbd()
      
      const openNav= function() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }

      const closeNav= function() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
      
      const boutique = function(){
        this.$router.push({name:'boutique'})

      }

      const monPanier = function(){
        this.$router.push({name:'payement'})

      }

        return {
          storeProduct,
            openNav,
            closeNav,
            boutique,
            monPanier,
            
   
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        background-color: #fddff2;
        
        color: rgb(0, 0, 0);
        padding: 0px;
        padding-bottom:5px;
        border-bottom: 1px solid #fddff2;;
        margin-bottom: 0px;
        width: auto;

        .topnav {
        position: relative;
        overflow: hidden;
        background-color:  #fddff2;
        color: rgba($color: #000000, $alpha: 1.0);
        }
        
        .topnav a {
        float: left;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        }
    
        .topnav a:hover {
        background-color:  #fddff2;;
        color: black;
        }
        
        .topnav a.active {
        background-color:  #fddff2;;
        color: black;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: bold;
        }
        
        .topnav-centered a {
        float: none;
        font-family: 'Open Sans', sans-serif;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        }
    
        .topnav-right {
        float: right;
        .shop{
            cursor: pointer;
            .count{
            width: auto;
            top: -5px;
            border: 1px solid red;
            border-radius: 50%;
            background-color: red;
            color:white;
            }
        }
        }
        
    }
    .sidebar {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 3;
      top: 0;
      left: 0;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
     
      a {
        
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: rgba(255, 255, 255, 1);
        display: block;
        transition: 0.3s;

        &:hover {
          color: #70120b;
        }
     }
      .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
      }
  }
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #fddff2;
    color: rgba(0, 0, 0, 1);
    padding: 10px 15px;
    border: none;
  }
  
  .openbtn:hover {
    background-color: #444;
  }
  
  #main {
    transition: margin-left .5s;
    //padding: 16px;
  }
  .count{
    width: auto;
    top: -5px;
    border: 1px solid red;
    border-radius: 50%;
    background-color: red;
    color:white;
  }

</style>