<template>
  <div id="app">
    <WelcomeMessage :msg="$t('welcome')" />
  </div>
</template>

<script>
import WelcomeMessage from "@comp/WelcomeMessage.vue";
export default {
  components: {
    WelcomeMessage,
  },
};
</script>
