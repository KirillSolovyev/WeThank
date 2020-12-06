<template>
  <MainContent>
    <router-view></router-view>
  </MainContent>
</template>

<script>
  import MainContent from './components/containers/MainContent';

  export default {
    name: 'App',
    components: {
      MainContent
    }
  }
</script>
