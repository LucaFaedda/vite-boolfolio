<script setup>
import AppMain from './components/AppMain.vue'
</script>

<template>
  <div>
   <router-view></router-view>
  </div>
  <AppMain  />
</template>

<style lang="scss">
@use './components/style/general.scss';

</style>

