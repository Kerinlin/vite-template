<template>
  <div>
    <button @click="increment">Count is: {{ state.count }}, double is: {{ state.double }}</button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<style lang="less" scoped>
</style>