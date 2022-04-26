<div class="side">
  <div class="title">Component for Svelte</div>
  <div class="components">
    <div class="title">基础组件</div>
    <div>
      <div class="item">按钮</div>
    </div>
  </div>
</div>

<style lang="less">
  .side {
    width: 260px;
    border-right: 1px solid rgba(60, 60, 67, 0.12);
    height: 100%;
    & > .title {
      padding: 20px 0;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .components {
      margin-top: 20px;
      .title {
        color: #888;
        padding: 10px 20px;
      }
      .item {
        font-size: 18px;
        padding: 10px 20px;
      }
    }
  }
</style>
