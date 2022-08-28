<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from "./components/Nav.vue";
import Banner from "./components/Banner.vue";
import Content from "./components/Content.vue";
import Newsletter from "./components/Newsletter.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <main>
    <Banner />
    <Content />
    <Newsletter />
  </main>
  <Footer />
</template>

<style scoped>
</style>
