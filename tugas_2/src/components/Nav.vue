<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <nav class="flex justify-between">
    <div class="v-center">
      <a href="#">
        <img
          class="logo"
          src="https://hackdesign.org/assets/logo-941fdc47b5760af9654de5b6ba12fba1f4073426b16b2ebbb519e13b6c5a9600.svg" />
      </a>
    </div>
    <ul class="flex text-gray">
      <li>
        <a href="#">Lessons</a>
      </li>
      <li>
        <a href="#">Toolkit</a>
      </li>
      <li>
        <a href="#">Sign In</a>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

nav {
  margin: 0 2rem;
  padding: 0 1rem;
}

li {
  padding-left: 3rem;
  display: flex;
  align-items: center;
}

.logo {
  width: 200px;
  min-height: 70px;
  padding: 1rem 0;
}

</style>
