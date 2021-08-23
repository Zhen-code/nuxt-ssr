<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware() {
    console.log('middleware layouts!!!')
  },
  beforeCreate() {
    console.log('layouts beforeCreate')
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: auto;
}
</style>
