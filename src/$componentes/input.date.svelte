<script>
    
    export let size = ''
    export let value = ''
    export let color = ''
    export let placeholder = ''

    export let isDisabled = false
    export let isReadonly = false

</script>

<input
    bind:value
    type="datetime-local"
    class="input is-{ color } is-{ size }"
    placeholder={ placeholder }
    disabled={ isDisabled }
    readonly={ isReadonly }
>