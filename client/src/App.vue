<template>
  <div id="app">
    <Nav />
    <div class="container my-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components: {
    Nav
  }
}
</script>