<button on:click class={buttonClassName} {type}>
  <slot />
  <svelte:component this={icon} />
</button>

<script lang="ts">
  import classNames from 'classnames';
  import { usePrefix } from '../styles';

  let buttonClassName;

  const prefix = usePrefix();

  let icon;
  let className;
  let disabled;
  let theme = 'default';
  let type = 'button';

  $: buttonClassName = classNames(`${prefix}-button`, className, {
    [`${prefix}-button--theme-${theme}`]: true,
    [`${prefix}-is-disabled`]: disabled,
  });

  export { className, disabled, icon, theme, type };
</script>
