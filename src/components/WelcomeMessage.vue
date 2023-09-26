<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>
      |
      <a href="https://vuejs.org/v2/guide/" target="_blank">Vue 2</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "WelcomeMessage",
  props: {
    msg: {
      type: String,
    },
  },
};
</script>
