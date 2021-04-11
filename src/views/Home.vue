<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ store.state.counter }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: 'Home',
  setup() {
    const store =  inject('store')

    return {
      store
    }
  }
}
</script>
<style>
  div {
    margin-bottom: 10px;
  }
  .counter {
    font-size: 80px;
  }
  .buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }
</style>
