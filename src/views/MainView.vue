<template>
  <Carouselvue />
  <Productsvue  />
  
</template>

<script>

import Carouselvue from '../components/Carousel.vue';
import Productsvue from '../components/Products.vue';


export default {
  props: {
    NbrInPan : Number
  },
  components: {
      Carouselvue,
      Productsvue,
      
   },
  setup() {

    

    return{
      
    }
  }

}
</script>

<style lang="scss" scoped>

</style>