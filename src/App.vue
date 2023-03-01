<template>
  <div class="app-page">
    <div class="box">
        <div>
            <BlogHeader />
        </div>
        <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import {BlogHeader} from './components/layout/header';

</script>

<style scoped>
.app-page {
  background-color: #ededed;
  height: 100%;
  width: 100%;
}

</style>
