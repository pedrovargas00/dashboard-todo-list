<script>
    
    import SubtasksService from '../$services/subtasks.service'
    import { TaskStore, SubtasksStore } from '../stores'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'

    let data = {}
    $: $TaskStore

    async function createSubtask() {
        
        data.taskId = $TaskStore._id

        const resp = await SubtasksService.createSubtask(data)

        if (resp.error)
            return error = resp.error.message
        
        SubtasksStore.append(resp.data)
    }

</script>


<Form on:submit={ createSubtask } class="box" textButton="Enviar">
    <div class="column">
        <div class="block">
            <h2>Agregar nueva subtarea</h2>
        </div>
        <div class="control block">
            <Input bind:value={ data.name } placeholder="Nombre"></Input>
        </div>
    </div>
    <div class="column">
        <div class="control block">
            <Input bind:value={ data.description }></Input>
        </div>
    </div>
</Form>
