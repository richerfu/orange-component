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

<style>
  .o-button {
    font-size: 14px;
    height: 32px;
    padding: 0 14px;
    background-color: white;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 4px;
  }
  .o-button:hover {
    animation: .5s bg 0s linear;
  }
  @keyframes bg {
    0% {
      color: black;
      border-color: rgb(220, 220, 220);
    }
    100% {
      color: rgb(38, 111, 232);
      border-color: rgb(38, 111, 232);
    }
  }
</style>
