import { defineStore } from "pinia";
import  img1 from '@/assets/mip.jpg';
import  img2 from '@/assets/mep.jpg';
import  img3 from '@/assets/mmp.jpg';
import  img4 from '@/assets/mbp.jpg';
 
export const useProductsbd = defineStore('productsbd',
{
    
    state: ()=> ({
        products: [
            {
                id: 1,
                name: 'Tige Bursh',
                img: img1,
                price: 40
        
            },
            {
                id: 2,
                name: 'Beauty Bursh',
                img: img2,
                price: 140
        
            },
            {
                id: 3,
                name: 'Color Bursh',
                img: img3,
                price: 20
            },
            {
                id: 4,
                name: 'Maki Kola',
                img: img4,
                price: 10
        
            }
        ],
        panier : localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : [],
        msgtxt : ''
    }),
    
    actions:{
        stockPan(tab){
            let artChoix = ({...tab,qtebuy:1,totbuy:tab.price})
            let fnd = this.panier.find(p => p.id == artChoix.id)
            var x = document.getElementById("snackbar");
            if(fnd != undefined){ 
                this.msgtxt = 'Vous avez déjà ajouter ce produit dans le panier'
                x.className = "show";
              
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }else{
                this.panier.push(artChoix)
                this.msgtxt = 'Votre Produit est enrégistré dans le panier'
                x.className = "show";
              
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
           
            localStorage.setItem("article",JSON.stringify(this.panier))
            
        },

    },

    getters :{
        NbArt(state){
            return state.panier.length ? state.panier.length : 0
        },

        MonPan: (state) =>{
            state.panier = JSON.parse(localStorage.getItem('article'))
            if(this.panier != undefined){
                state.panier = this.panier
                return state.panier
            }else{
                 return state.panier 
            }
            

        },

        MsgT:(state)=>{
            return state.msgtxt
        },
        
        SommeTotal:(state) =>{
            state.panier = localStorage.getItem('article')? JSON.parse(localStorage.getItem('article')) : []
            let TotalSom  = 0
            state.panier.forEach((value)=>{
                 TotalSom += value.totbuy
            })

            return TotalSom
        }
      
    }

})