<script>

    import Button from './button.svelte'

    export let style = ''
    export let classForm = ''
    export let textButton = ''

    export let loading = false

</script>

<form on:submit|preventDefault
    class={ classForm }
    style={ style }>
    
    <slot></slot>

    <Button type="submit" text={ textButton } isLoading={ loading } />
    
</form>