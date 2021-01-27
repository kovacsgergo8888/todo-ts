<template>
  <div class="container mx-auto max-w-md p-5">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto mb-20"/>
    <div class="border-2 rounded-lg shadow p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>


