<template>
    <div class="section">
    <div class=" content">
      <div class="mask"></div>
      <div id="first">
        <h1 class="paraph ">
          <span class="">Beauty <br>Kit</span>
        </h1>
        <div class=" paraphT">
          <div class="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque doloribus iure dolores, cumque est ea
              ullam voluptatibus optio hic.</p>
          </div>
        </div>
        <div id="buttonM" class="row  buttonM">
          <button type="button" id="BtnJ">BUY NOW</button>
        </div>
      </div>
      <div class="imgm">
        <img src="@/assets/ta.jpeg" alt="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
      .section{
    //border: 1px solid red;
    width: auto;
    height: 500px;
    margin-bottom: 0px;
    .content{
        width: auto;
        height: 450px;
        
        border-radius: 5px;
        background: #ffffff;
        color: #000;
       
        //box-shadow: 0px 7px 5px 0px grey;
        position: relative;
        
        .imgm{
           float: right;
           width: 100%;
           border-radius: 5px;
            img{
              float: right;
                width: 100%;
                height: 100%;
                display: block;
                padding: 0;
                position: absolute;
                top: 0;
                right: 0;
                object-fit: cover;
            } 

        }
        
        .mask{
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: rgba(121, 122, 124, 0.5);
        }
    }
    
  }
  .paraph{
    color: rgba(0, 0, 0, 1);
    font-family: 'Great Vibes', cursive; //'Dancing Script', cursive;
    font-weight: bold;
    font-size: 70px;    //3em;
    margin-top:0px;
    margin-left: 10%;
    margin-bottom: 10px;
    //border:1px solid red; 
    width:auto;
    height:180px;
    z-index: 2;
    position: relative;
  }
  .paraphT{
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    padding-top:0px;
    padding-left: 0px;
    padding-bottom: 5px;
    margin-left: 10%;
    margin-bottom: 5px;
    margin-top: 0px;
    width:auto;
    height:auto;
    //border:1px solid yellow; 
    z-index: 2;
    position: relative;
    p{
      font-size: 20px;
    }
  }
  .buttonM{
    border: none;
    z-index: 2;
    position: relative;
    //border: 1px solid blue;
    width: auto;
    height: 50px;
    margin-top:50px;
    margin-left:10%;
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
</style>