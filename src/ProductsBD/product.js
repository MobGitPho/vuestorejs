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

        panier: [],

       nbPan : 0

    }),

    actions:{
        stockPan(Tab){
            this.panier = Tab
            //console.log("PanierStock",this.panier)
           
        },

        NbArtInPan (Tab) {
            this.panier = Tab
            console.log("TabLength", this.panier.length)
            return this.panier.length
            
        },
       
       
    },

    getters :{
        NbArt(state){
            return state.panier.length
        }
      
    }

})