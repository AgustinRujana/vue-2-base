<template>
  <div id="app" class="flex h-full w-full items-center justify-center">
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
