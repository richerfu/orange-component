<button on:click class:disabled={disabled} class={className}>
    <slot />
</button>

<script lang="ts">
    export {
        className as class,
        disabled
    }
    let className: string = undefined;
    let disabled: boolean = undefined;
</script>

<style>
.disabled {
    cursor: not-allowed;
}
</style>