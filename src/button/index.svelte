<button on:click class={buttonClassName} {type} {disabled}>
  <slot />
  <svelte:component this={icon} />
</button>

<script lang="ts">
  import classNames from 'classnames';
  import { SIZE_MAP } from '../common';
  import { usePrefix } from '../styles';

  let buttonClassName;

  const prefix = usePrefix();

  let icon = undefined;
  let className = undefined;
  let disabled = false;
  let theme = 'default';
  let type = 'button';
  let size = undefined;

  $: buttonClassName = classNames(`${prefix}-button`, className, {
    [`${prefix}-button--theme-${theme}`]: true,
    [`${prefix}-is-disabled`]: disabled,
    [`${prefix}-${SIZE_MAP[size]}`]: size,
  });

  export { className, disabled, icon, theme, type, size };
</script>
