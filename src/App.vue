<script setup>
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div>
   <router-view></router-view>
   <AppMain></AppMain>
  </div>

</template>

<style lang="scss">
@use './style/general.scss';

</style>

