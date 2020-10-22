<template>
  <div>
    {{ hello }}
    <button @click="changeHello">改名</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello world',
    };
  },
  methods: {
    changeHello() {
      this.hello = 'develop';
    },
  },
  created() {
    this.hello = 'hello 欧阳铖';
  },
};
</script>