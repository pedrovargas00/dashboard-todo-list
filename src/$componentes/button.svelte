<script>

    export let text = ''
    export let size = ''
    export let icon = ''
    export let color = ''
    export let type = 'button'

    export let isActive = false
    export let isFocused = false
    export let isRounded = false
    export let isDisabled = false
    export let isOutlined = true
    

</script>

<button
    on:click
    type={ type }
    class="button is-{ color } is-{ size }"
    disabled={ isDisabled }
    class:is-rounded={ isRounded }
    class:is-outlined={ isOutlined }
    class:is-focused={ isFocused }
    class:is-active={ isActive }
>
    {#if icon != ''}
        <span class="icon">
            <i class="fas fa-{ icon }"></i>
        </span>
    {/if}
    <span>{ text }</span>
</button>