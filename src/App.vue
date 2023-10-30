<template>
  
  <Navbar />
  
  <router-view /> 
  <footervue />

</template>

<script>

import Navbar from './components/NavBar.vue';
import footervue from './components/footer.vue';
export default {
  components: {
    Navbar,
    footervue
  }
}
</script>

<style>

</style>