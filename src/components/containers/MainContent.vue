<template>
  <section class="flex flex-col items-center min-h-full w-full bg-gray-300">
    <MainHeader class="mb-10" />
    <div class="w-content">
      <slot />
    </div>
  </section>
</template>

<script>
  import MainHeader from './MainHeader';

  export default {
    name: 'MainContent',
    components: {
      MainHeader
    }
  };
</script>