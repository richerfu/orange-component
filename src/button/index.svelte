<script lang="ts">
  import classNames from "classnames";
  export { className as class, disabled };
  let className: string = undefined;
  let disabled: boolean = undefined;
</script>

<button
  on:click
  class={classNames("o-button", className, {
    "o-is-disabled": disabled,
  })}
>
  <slot />
</button>

