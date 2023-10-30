<template>
    <div>
        <div class="col-12 promenu">
            <div class="row">
                <div class="col-12 menuo productf">
                    <h1>OUR PRODUCTS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla!</p>
                </div>

            </div>
        </div>

        <div class="row menupro">
            <div class="row  menu">
                <div v-for="prod in bdProducts.products" :key="prod.id" class="col-3 menup ">
                    <div class="popup" @click="myFunction(prod.id)">
                        <span class="popuptext" :id='"myPopup-"+ prod.id'></span>
                    </div>
                    <div class="row col-12 menupa product">
                        <h4>  {{prod.name}} </h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="row col-12 menupimg">
                        <img class="" :src="prod.img"    alt="" style="width: 100%;">
                        </div>
                        <div class="row col-12 blackbox">
                        <div class="col-4 detail">Voir</div>
                        <div class="col-4 add" @click="addPan(prod)"><span>BUY NOW</span></div>
                        <div class="col-4 price"> Price $ {{prod.price}}</div>
                    </div>
                </div>

            </div>
        </div>
        
        <div class="  buttonmore">
            <button> SEE MORE</button>
        </div>

        <div class="row about">
            <div class="row ">
                <div class="col-6 sectiontext">
                    <h1> ABOUT OUR BEAUTY STORE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum unde, aliquid molestias excepturi,
                    facere accusamus reprehenderit assumenda praesentium eaque eligendi tenetur optio id fugit illum mollitia
                    quasi natus nostrum quae iure dolorem et. Facere dignissimos, architecto aperiam veniam sed natus porro,
                    inventore saepe repellendus possimus nisi exercitationem cupiditate minus, cum minima asperiores quisquam
                    delectus aliquid magnam perferendis doloremque similique.

                    </p>
                    <div id="button" class="row  buttonreadmore">
                      <button type="button" id="Btn">READ MORE</button>
                    </div>

                </div>
                <div class="col-3 sectionimg">
                    <img src="@/assets/ma.jpg" alt="">


                </div>

            </div>
        </div>

        <div class=" ">
          <div class=" customers ">
            <h1>WHAT SAYS CUSTOMERS</h1>
          </div>
        </div>

        <div class="testimony">
          <img src="@/assets/custa.jpg" alt="Avatar" style="width:90px">
          <p><span>Jeannette</span></p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, ipsam?</p>
        </div>
        <div class="prevnext">
          <a href="" class="prev round">&#8249;</a>
          <a href="" class="next round">&#8250;</a>
        </div>

        <div class="row gettouch">
          <div class="row ">
            <div class="col-6 sectiontext">
              <h1> GET IN TOUCH</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, quidem? Aliquam ut earum
                accusamus esse exercitationem quaerat architecto vero nulla.
              </p>
            </div>
            <!--div class="row  sectionimg">
              <div id="button" class="buttonreadmore">
                <button type="button" id="Btn" class="contform">CONTACT FORM</button>
                <button type="button" id="Btn" class="newslett">NEWSLETTER</button>
              </div>
            </div-->
          </div>
          <div class=" sectionimg">
              <div id="button" class="buttonreadmore">
                <button type="button" id="Btn" class="contform">CONTACT FORM</button>
                <button type="button" id="Btn" class="newslett">NEWSLETTER</button>
              </div>
          </div>
        </div>

      <div class="cartmaps map-responsive" id="">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15865.794531968788!2d1.20253005!3d6.2043992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stg!4v1695826308456!5m2!1sfr!2stg" width="" height="" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>



    </div>
   
  
</template>

<script>
import { ref } from 'vue';

import { useProductsbd } from '../ProductsBD/product';

export default {

    setup(){
        const bdProducts = useProductsbd();
        const Panier = ref([]);
        const NbArtPan = ref(0);
        let monPan = ref([]);

        monPan.value = localStorage.getItem('article');
        
        if (monPan.value != null){
          monPan.value = JSON.parse(localStorage.getItem('article'));

          monPan.value.forEach((value) => {
            let rechArt = bdProducts.products.find(p => p.id == value.id);
            //console.log("rechArtProd",rechArt)
            rechArt.qtebuy = value.qtebuy
            Panier.value.push(rechArt)
          });

          
        }else{
         ''
        }

        const popupAjout= function (popid,textA) {
          var popup = document.getElementById(popid);
         // console.log("popup",`myPopup-${popid}`)
          popup.textContent = textA;
          popup.classList.toggle("show");

        }

        const myFunction =function (popid) {
          var popup = document.getElementById("myPopup-"+ popid);
          //console.log("popup",popup)
          popup.classList.toggle("show");
        }
        const addPan= function(monProd) {
          
          let rechArt = Panier.value.find(p => p.id == monProd.id);
          if (rechArt != undefined){
           
            bdProducts.stockPan(Panier)
            NbArtPan.value = bdProducts.NbArtInPan(Panier)
            NbArtPan.value = Panier.value.length
            let textB = `Vous avez déjà ajouter ${monProd.name} au panier`;
            let pid= `myPopup-${monProd.id}`
            popupAjout(pid,textB)

          }else{
            Panier.value.push({...monProd,qtebuy:1,totbuy:monProd.price})
            NbArtPan.value = bdProducts.NbArtInPan(Panier)
            localStorage.setItem("article",JSON.stringify(Panier.value))

            let textB = `Vous avez  ajouter ${monProd.name} au panier`;
            let pid= `myPopup-${monProd.id}`
            popupAjout(pid,textB)

          }   
        }
      
        return {
            bdProducts,
            Panier,
            addPan,
            NbArtPan,
            monPan,
            myFunction,
            popupAjout
        }

    }
    
}
</script>

<style lang="scss" scoped>
      .productf {
        color: black;
        text-align: center;
        padding: 0px;
        opacity: 1;
        h1{
        font-family: 'Gabarito', cursive;
        }
        #textvide{
        color: #000;
        font-size: 1.3em;
        padding: 30px;
        text-align: center;
        a{
            cursor: pointer;
            text-decoration: none;
        }
        }
    }
    .menu{
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 15px;
    //border: 2px solid red;
    .menup{
     width: 24%;
     margin: 6px;
      border: 2px solid gray;
      padding-top: 10px;
       
      .menupimg{
        img{
          object-fit: fill;
          margin: 0 auto;
        }
      }
    
      .menupa{
          padding: 10 px;
          margin-left: 0px;
          margin-right: 0px;
          opacity: 1;
          h4{
            margin-top: 1px;
            margin-bottom: 1px;
          }
          p{
          
            margin-left: 0px;
            margin-right: 0px;
          }
      }
      .blackbox{
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
        .detail{
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
        .add{
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
          .button{
            border: none;
            background-color: transparent;
          }
        }
        .price{
          width:40%;
         // border: 1px solid yellow;
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
        }
        .detailp{
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
        .addp{
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
        .detailm{
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
      .redbox{
        margin-bottom: 0px;
        cursor: pointer;
        .deleteitem{
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
    h1{
      font-family: 'Gabarito', cursive;
    }
    #textvide{
      color: #000;
      font-size: 1.3em;
      padding: 30px;
      text-align: center;
      a{
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  .produit::after{
    content: "";
    clear: none;
    display: table;
  }

    .buttonmore{
        display: grid;
        justify-content: center;
        //padding-left: 50%;
        width: auto;
        border: none;
        margin-bottom: 20px;
        background-color: rgba(255, 255, 255, 1);
        button{
            display: flex;
            justify-content: center;
            align-content: center;
            cursor: pointer;
            width: auto;
            //margin-left: 46%;
            margin-top: 3%;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left:20px ;
            padding-right: 20px;
            background-color: rgba(0, 0, 0, 1);
            color: rgba(255, 255, 255, 1);
        }
        
    }

   .about{
        //border: 1px solid red;
        width: auto;
        height: auto;
        background-color: #f7c8c8;

        .sectiontext{
        //  border: 1px solid blueviolet;
            width: 50%;
            margin-top: 5%;
            margin-bottom: 5%;
            margin-right: 2%;
            margin-left: 10%;
            h1{
            font-family: 'Gabarito', cursive;
            font-size: 2em;
            font-weight: bold;
            }
            .buttonreadmore{
            border: none; 
            //border: 1px solid blue;
            width: auto;
            height: 50px;
            margin-top:10px;
            margin-left:0px;
            margin-bottom: 0px;
            button{
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
        .sectionimg{
            float: right; 
            width:30%;
            top: 0px; 
            left: 0px;
        // border: 1px solid black;
            margin-right: 2%;
            margin-left: 0%;
            margin-top: 5%;
            height: auto;
            margin-bottom: 5%;
            img{
            top: 0px; 
            left: 0px;
            object-fit: cover;
            width: 100%;
            height: 400px;//300px;
            }
            
            
        }

    }

    .customers{
      text-align: center;
      font-size: 1.2em;
      margin-top: 3%;
      margin-bottom: 5px;
      h1{
        font-family: 'Gabarito', cursive;
      }
      //border: 1px solid red;

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
      img {
        float: left;
        margin-right: 20px;
        border-radius: 100%;
        height: 90px;
      }
      span {
        font-size: 20px;
        margin-right: 15px;
        font-weight: bold;
      }
    }
    .prevnext{
      margin-top: 25px;
      margin-bottom: 10px;
      text-align: center;
      cursor: pointer;
      a {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
      }
      /*&:hover {
        background-color: red;
        color: white;
        cursor: pointer;
      }*/
      .prev {
        background-color: #b9bebe;
        color: black;
      }
      
      .next {
        background-color: #b9bebe;
        color: black;
      }
      .round {
        border-radius: 50%;
      }
    }

    .gettouch{
        //border: 1px solid red;
        width: auto;
        height: auto;
        background-color: rgba(255, 255, 255, 1);
        .sectiontext{
        //  border: 1px solid blueviolet;
          width: auto;//50%;
          margin-top: 5%;
          margin-bottom: 5%;
          margin-right: 2%;
          margin-left: 5%;
          h1{
            font-size: 2em;
            font-weight: bold;
            padding: 0px;
            font-family: 'Gabarito', cursive;
          }
          p{
            text-align: justify;
          }
          #totalpaye{
            font-size: 3em;
            font-weight: bold;
            padding: 0px;
            color: rgba(0, 0, 0, 1);
            text-align: center;
          }
        }
      .sectionimg{
          //float: right; 
          //width:30%;
         display: flex;
         justify-content: center;
         left: 0px;
         margin-bottom: 5%;
        // border: 1px solid black;
         
          margin-left: 0%;
          height: auto;
         // margin-top: 8%;
          .buttonreadmore{
            display: flex;
            justify-content: space-between;

            border: none; 
            //border: 1px solid blue;
            width: auto;
            height: 50px;
            margin-top:10px;
            margin-left:0px;
            margin-right: 0px;
            margin-bottom: 0px;
            button{
              cursor: pointer;
              margin: 5px;
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
            .newslett{
              background-color: #f7c8c8;
              color: rgba(0, 0, 0, 1);
              border: none;
            }
          }
        
        }
    }

    .map-responsive {
      overflow:hidden;
      position:relative;
      height:200px;
      iframe {
        left:0;
        top:0;
        height:200px;
        width:100%;
        //position:absolute;
      }
    }




 @media screen and (max-height: 450px) {
   .sidebar {padding-top: 15px;}
   .sidebar a {font-size: 18px;}
 }

@media screen  and (max-width: 1337px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;

   .menup{
    width: 24%;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
      
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 37%;
         padding: 5px;
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
         width:35%;
         
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}

@media screen  and (max-width: 1133px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
  
   .menup{
    width: 24%;
    margin: 5px;
    border: 2px solid gray;
    padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 35%;
         padding: 5px;
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
         width:36%;
       
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}

@media screen  and (max-width: 1123px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;

   .menup{
    width: 24%;
    margin: 5px;
    border: 2px solid gray;
    padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
      
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
    
       grid-column-gap: 2px;
       .detail{
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
         width: 35.5%;
         padding: 5px;
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
         width:34.5%;
         
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}

@media screen  and (max-width: 1109px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
   
   .menup{
    width: 23.90%;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 35.4%;
         padding: 5px;
         margin-right: 0.8px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 14px; 
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:34.2%;
         
          text-align: center;
          font-size: 13.5px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}
@media screen  and (max-width: 1009px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
  
   .menup{
    width: 23.85%;
    margin: 5px;
    border: 2px solid gray;
    padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 35.5%;
         padding: 5px;
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
         width:34.5%;
         
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}
@media screen  and (max-width: 969px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
 
   .menup{
    width: 23.69%;
    margin: 5px;
    border: 2px solid gray;
    padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 36%;
         padding: 5px;
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
         width:34.5%;
        
          text-align: center;
          font-size: 15px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}
@media screen  and (max-width: 851px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
   
   .menup{
    width: 23.50%;
    margin: 5px;
    border: 2px solid gray;
    padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
     
       grid-column-gap: 2px;
       .detail{
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
         width: 36%;
         padding: 5px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 13.5px;
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:33.5%;
       
          text-align: center;
          font-size: 13.5px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}
@media screen  and (max-width: 744px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
   
   .menup{
    width: 23.25%;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 5px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
    
       grid-column-gap: 2px;
       .detail{
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
         width: 36%;
         padding: 5px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 14px;
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:32.5%;
         
          text-align: center;
          font-size: 13px; 
          padding: 5px;
          float: right;
       }
     }

 }

 }
}
@media screen  and (max-width: 645px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
   
   .menup{
    width: 23.15%;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: fill;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
       cursor: pointer;
       margin: 0px;
       height: auto;
       border: 1px solid black;
       padding: 3px;
       background-color: rgba(0, 0, 0, 1);
       color: rgba(255, 255, 255, 1);
       font-size: 15px;
  
       grid-column-gap: 2px;
       .detail{
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
       .add{
         width: 30%;
         padding: 2px;
         margin-right: 0.2px;
         border: none;
         border-radius: 20px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 12px;
         text-align: center;
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:32.5%;
         
          text-align: center;
          font-size: 12px; 
          padding: 5px;
          float: left;
       }
     }

 }

 }
}
@media screen  and (max-width: 604px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
  
   .menup{
    width: auto;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: cover;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
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
       
       .detail{
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
       .add{
         width: 30%;
         padding: 5px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 15px;
         text-align: center;
        
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:40%;
        
         text-align: center;
         font-size: 15px; 
         padding: 5px;
         float: right;
       }
    
    
     }

 }

 }
}
@media screen  and (max-width: 332px) {
 .menu{
   width: auto;
   margin-left: 5%;
   margin-right: 5%;
   margin-bottom: 15px;
  
   .menup{
    width: auto;
    margin: 5px;
    border: 2px solid gray;
     padding-top: 10px;
     
     .menupimg{
       img{
         object-fit: cover;
         margin: 0 auto;
       }
     }
   
     .menupa{
         padding: 0 auto;
         margin-left: 0px;
         margin-right: 0px;
         opacity: 1;
         h4{
           margin-top: 1px;
           margin-bottom: 1px;
         }
         p{
         
           margin-left: 0px;
           margin-right: 0px;
         }
     }
     .blackbox{
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
       
       .detail{
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
       .add{
         width: 35%;
         padding: 5px;
         margin-right: 2px;
         border: none;
         border-radius: 25px;
         background-color: rgba(255, 255, 255, 1);
         color: rgba(0, 0, 0, 1);
         font-size: 15px;
         text-align: center;
         
         .button{
           border: none;
           background-color: transparent;
         }
       }
       .price{
         width:35%;
       
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
 .footer{
   width: auto;
   height: 380px;
   margin-top: 10px;
   background-color: rgba(0, 0, 0, 0.7);
   position: relative;
  
   .mask{
     background-color: rgba(0, 0, 0, 0.2);
     position: absolute;
     z-index: 1;
     width: auto;
   }
   
   .container{
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
   .middlebox{
       float:left;
       /*border:1px solid red;*/
       margin-left:5%;
       margin-right: 5%;
       width:auto;
       height:380px;
       padding: 15px;
       color: rgba(255, 255, 255, 1);
       h2{
         text-align: center;
       }
       p{
         text-align: center;
         margin-bottom: 5%;
       }
       .iconet{
         text-align: center;
        /* border: 1px solid red;  */ 
         
         ul{
           list-style: none;
           padding: 0%;
           i{
             margin: 2px;
           }
           li{
             text-align: center;
             display: inline-block;
             margin: 5px;
             font-size: 20px;
           }
         }
       }
       .afterfoot{
         color: rgba(255, 255, 255, 1);
         margin-top: 5%;
         /*border: 1px solid red;*/
         border-top: 1px solid rgba(255, 255, 255, 1);
         width: auto;
         height: auto;
         p{
           padding-top: 5%;
          text-align: center;
         }
       }
     }
   .rightbox{
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


.popup {
 position: relative;
 display: inline-block;
 cursor: pointer;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}


.popup .popuptext {
 visibility: hidden;
 width: 100px;
 background-color: #555;
 color: #fff;
 text-align: center;
 border-radius: 6px;
 padding: 8px 0;
 position: absolute;
 z-index: 1;
 bottom: 125%;
 left: 50%;
 margin-left: -90px;
}


.popup .popuptext::after {
 content: "";
 position: absolute;
 top: 100%;
 left: 50%;
 margin-left: -5px;
 border-width: 5px;
 border-style: solid;
 border-color: #555 transparent transparent transparent;
}


.popup .show {
 visibility: visible;
 -webkit-animation: fadeIn 1s;
 animation: fadeIn 1s;
}


@-webkit-keyframes fadeIn {
 from {opacity: 0;} 
 to {opacity: 1;}
}

@keyframes fadeIn {
 from {opacity: 0;}
 to {opacity:1 ;}
}



[class*="col-"] {
    width: 100%;
  }
  
  @media only screen and (min-width: 768px) {
 
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    
  }


 
  .row,
  .row > .column {
    padding: 0px;
  }
</style>