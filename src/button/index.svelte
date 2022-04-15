<button
  on:click
  class={classNames('o-button', className, {
    'o-is-disabled': disabled,
  })}
>
  <slot />
</button>

<script lang="ts">
  import classNames from 'classnames';

  const className = '';
  const disabled = false;

  export { className as class, disabled };
</script>
