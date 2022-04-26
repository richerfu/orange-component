<main class="main">
  <Header />
  <div class="content">
    <Side />
  </div>
</main>

<script>
  import Header from './layout/header.svelte';
  import Side from './layout/side.svelte';
</script>

<style lang="less">
  :global {
    @import '../../src/orange-component.less';
    * {
      margin: 0;
      padding: 0;
    }
    html,
    body {
      height: 100%;
    }
    #app {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      margin-top: 60px;
      height: 100%;
    }
  }
</style>
