<main class="main">
  <Header />
</main>

<script>
  import Header from './layout/header.svelte';
</script>

<style lang="less">
  :global {
    @import '../../src/orange-component.less';
    #app {
      width: 100%;
    }
  }
  .main {
    width: 100%;
  }
</style>
