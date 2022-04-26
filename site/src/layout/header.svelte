<div class="orange-doc-header">
  <div class="title">OC套件</div>
  <div class="nav">
    <div class="nav-item">指引</div>
    <div class="nav-item">文档</div>
  </div>
</div>

<script lang="ts">
</script>

<style lang="less">
  .orange-doc-header {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    border-bottom: 1px solid rgba(60, 60, 67, 0.12);
    width: 100%;
    padding: 10px 0;
    left: 0;
    justify-content: space-between;
    .title {
      font-size: 20px;
      font-weight: 600;
      padding-left: 10px;
      display: flex;
      align-items: center;
    }
    .nav {
      font-size: 14px;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      &-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        position: relative;
        margin: 0 10px;
        cursor: pointer;
        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 4px;
          background-color: #747bff;
          display: none;
          bottom: 0;
        }
      }
      &-item:hover {
        &::after {
          display: block;
        }
      }
    }
  }
</style>
