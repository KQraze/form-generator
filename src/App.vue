<script setup lang="ts">
import { AppHeader } from '@/components/header'
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <router-view />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/main.scss';

#app,
.wrapper {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
