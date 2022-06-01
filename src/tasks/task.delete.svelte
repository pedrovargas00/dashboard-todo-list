<script>

    import { createEventDispatcher } from 'svelte'

    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Form from '../$componentes/form.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let completed = false

    async function deleteTask() {
        
        data.status = completed

        const resp = await TasksService.deleteTask($TaskStore._id)

        if (resp.error)
            return error = resp.error.message
        
        TasksStore.remove($TaskStore._id)

        dispatch('deleted')
    }

</script>

{#if $TaskStore}
    <Form on:submit={ deleteTask } textButton="Sí">
        <div class="title">¿Seguro que desea eleminar la tarea?</div>
        <div class="subtitle">{ $TaskStore.name }</div>
    </Form>
{/if}