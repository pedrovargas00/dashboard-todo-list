<script>

    import { createEventDispatcher } from 'svelte'

    import { TasksStore, TaskStore } from '../stores'

    import TasksService from '../$services/tasks.service'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'
    import InputDate from '../$componentes/input.date.svelte'

    const dispatch = createEventDispatcher()

    let data = {}
    let error = null
    let completed = false

    $: $TaskStore && updateData()

    function updateData() {
        
        data = {
            name: $TaskStore.name,
            description: $TaskStore.description,
            status: $TaskStore.status,
        }
    }

    async function updateTask() {
        
        data.status = completed

        const resp = await TasksService.updateTask($TaskStore._id, data)

        if (resp.error)
            return error = resp.error.message
        
        TasksStore.replace(resp.data)

        dispatch('updated', resp.data)
    }

</script>

<Form on:submit={ updateTask } class="box" textButton="Ok">
    <div class="column">
        <div class="block">
            <h2>Agregar nueva tarea</h2>
        </div>
        <div class="control block">
            <Input bind:value={ data.name } placeholder="Nombre"></Input>
        </div>
    </div>
    <div class="column">
        <div class="control block">
            <Input bind:value={ data.description } placeholder="Description"></Input>
        </div>
    </div>
    <div class="column">
        <div class="control block">
            <InputDate bind:value={ data.date }></InputDate>
        </div>
    </div>
    <div class="column">
        <div class="control block">
            <input type="checkbox" bind:checked={ completed }/>
        </div>
    </div>
</Form>
