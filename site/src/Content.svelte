<div class="content">
  <svelte:component this={component} />
</div>

<script lang="ts">
  import { onMount } from 'svelte';

  const demoFiles = import.meta.globEager('../../src/**/_example/*.svelte');
  const demoObject = {};
  Object.keys(demoFiles).forEach(key => {
    const match = key.match(/([\w-]+)._example.([\w-]+).svelte/);
    const [, componentName, demoName] = match;

    demoObject[`${componentName}/${demoName}`] = demoFiles[key].default;
  });

  let component = null;

  onMount(() => {
    const { history, location } = window;
    const { pathname } = location;
    if (pathname) {
      const [, componentName, demoName] = pathname.match(/([\w-]+)\/([\w-]+)/);
      component = demoObject[`${componentName}/${demoName}`];
    }
    history.pushState = new Proxy(history.pushState, {
      apply(target, thisBinding, args) {
        return target.apply(thisBinding, args);
      },
    });
  });
</script>

<style lang="less">
  .content {
    flex: 1;
  }
</style>
