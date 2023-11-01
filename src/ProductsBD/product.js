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

        addQteUnArt(tab){
            let fnd = this.panier.find(p => p.id == tab.id)
            fnd.qtebuy++
            fnd.totbuy= ((fnd.qtebuy) * (fnd.price))
            localStorage.setItem("article", JSON.stringify(this.panier))
            let resultadd =  JSON.parse(localStorage.getItem('article'))
            
            return resultadd
        },

        moinsQteUnArt(tab){
            let fnd = this.panier.find(p => p.id == tab.id)
            console.log(fnd.qtebuy)
            if(fnd.qtebuy > 1){
              fnd.qtebuy--
                fnd.totbuy= ((fnd.qtebuy) * (fnd.price))
                localStorage.setItem("article", JSON.stringify(this.panier))
                let resultadd =  JSON.parse(localStorage.getItem('article'))
                
                return resultadd  
            }else{
                
                this.panier.splice(fnd, 1);
                localStorage.setItem("article", JSON.stringify(this.panier))
                let resultadd =  JSON.parse(localStorage.getItem('article'))
               
                return resultadd  
            }
            
        },

        deleteUnArt(tab){
            let fnd = this.panier.find(p => p.id == tab.id)
            this.panier.splice(fnd, 1);
            localStorage.setItem("article", JSON.stringify(this.panier))

            let resultadd =  JSON.parse(localStorage.getItem('article'))
            return resultadd

        },

        totalSomme(pan){
            let TotalSom  = 0
            pan.forEach((value)=>{
                 TotalSom += value.totbuy
            })
            
            return TotalSom
        },

       
    },

    getters :{ 
        MonPan: (state) =>{
            state.panier = localStorage.getItem('article') ? JSON.parse(localStorage.getItem('article')) : []

            return state.panier
            
        },

        NbArt(state){
            return state.panier.length ? state.panier.length : 0
        },

        MsgT:(state)=>{
            return state.msgtxt
        },
        
        SommeTotal:(state) =>{
            state.panier = localStorage.getItem('article')? JSON.parse(localStorage.getItem('article')) : []
            let TotalSom  = 0
            //console.log('state.panier',state.panier)
            state.panier.forEach((value)=>{
                 TotalSom += value.totbuy
            })
            //console.log('state.panierTotalSom',TotalSom)
            return TotalSom
        },
    }

})