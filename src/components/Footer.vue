<template>
    <div class="row footer">
        <div class="mask"></div>
        <div class="row col-12 container">
            <div id="boxes">
                <div class="leftbox">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li><i class="fa fa-map-marker"></i>Adress : Lomé TOGO</li>
                        <li><i class="fa fa-phone"> </i>Call : +228 00 00 00 00</li>
                        <li><i class="fa fa-envelope"> </i>Email : beauty@gmail.com</li>
                    </ul>
                </div>

                <div class="middlebox">
                    <h2>BEAUTIFLIE</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore repudiandae eius velit
                        vero
                        quaerat sed ipsam. Libero, cumque labore dignissimos dolores error placeat dolore.</p>
                    <div class="iconet">
                        <ul>
                            <li><i class="fa fa-facebook"></i></li>
                            <li><i class="fa fa-twitter"> </i></li>
                            <li><i class="fa fa-linkedin"> </i></li>
                            <li><i class="fa fa-whatsapp"> </i></li>
                        </ul>
                    </div>
                    <div class="row  afterfoot">
                        <p> 2020 All Rights Reserved. Design by free html Templates</p>
                    </div>
                </div>

                <div class="rightbox">
                    <h4>BEST PRODUCT</h4>
                    <ul>
                        <li><a href="">Lorem ipsum dolor </a></li>
                        <li><a href="">Lorem ipsum dolor </a></li>
                        <li><a href="">Lorem ipsum dolor </a></li>
                        <li><a href="">Lorem ipsum dolor </a></li>
                        <li><a href="">Lorem ipsum dolor </a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .footer{
  width: auto;
  height: 380px;
  margin-top: 2%;
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
    //border: 1px solid red;
    margin: 10px;
    .leftbox {
      float:left;
     // border: 1px solid yellow;
      margin-left: 5%;
     // background:Red;
      width:25%;
      height:280px;
      color: rgba(255, 255, 255, 1);
      h4{
        text-align: left;
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
      }
    }
  .middlebox{
      float:left;
     // border:1px solid red;
      width:30%;
      height:350px;
      
      color: rgba(255, 255, 255, 1);
      h2{
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
      p{
        padding-left: 15px;
        padding-right: 15px;
        text-align: center;
        margin-bottom: 5%;
      }
      .iconet{
        //padding-left: 15px;
        //padding-right: 15px;
        text-align: center;
        ul{
          list-style: none;
          padding: 0px;
          i{
            margin: 2px;
          }
          li{
            display: inline-block;
            margin: 5px;
            font-size: 20px;
          }
        }
      }
      .afterfoot{
        color: rgba(255, 255, 255, 1);
        margin-top: 5%;
        //border: 1px solid red;
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
      margin-right: 5%;
     // border: 1px solid blue;
      float:right;
      color: rgba(255, 255, 255, 1);
      width:25%;
      height:280px;
      h4{
        text-align: left;
        padding-left: 12%;
      }
      ul{
        list-style: none;
        i{
          margin: 2px;
        }
        li{
          margin: 5px;
          font-size: 20px;
          text-align: left;
          a{
            text-align: left;
            text-decoration: none;
            color: rgba(255, 255, 255, 1);
          }
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
</style>