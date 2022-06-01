<script>

    import { createEventDispatcher } from 'svelte'

    import { SubtasksStore, SubtaskStore } from '../stores'

    import SubtasksService from '../$services/subtasks.service'

    import Form from '../$componentes/form.svelte'

    const dispatch = createEventDispatcher()

    async function deleteSubtask() {

        const resp = await SubtasksService.deleteTask($SubtaskStore._id)

        if (resp.error)
            return error = resp.error.message
        
        SubtasksStore.remove($SubtaskStore._id)

        dispatch('deleted')
    }

</script>

{#if $SubtaskStore}
    <Form on:submit={ deleteSubtask } textButton="Sí">
        <div class="title">¿Seguro que desea eleminar esta subtarea?</div>
        <div class="subtitle">{ $SubtaskStore.name }</div>
    </Form>
{/if}