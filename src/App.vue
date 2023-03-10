<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div>
    <AppHeader></AppHeader>
    <router-view></router-view>
   
  </div>

</template>

<style lang="scss">
@use './style/general.scss';

</style>

