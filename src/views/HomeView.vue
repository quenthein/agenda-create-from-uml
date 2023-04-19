<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AjouterContact></AjouterContact>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AjouterContact from "@/components/AjoutContact";

export default {
  name: 'HomeView',
  components: {
    AjouterContact,
    HelloWorld
  }
}
</script>
