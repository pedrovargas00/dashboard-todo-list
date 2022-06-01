<script>
    
    import TasksService from '../$services/tasks.service'
    import { TasksStore } from '../stores'

    import Form from '../$componentes/form.svelte'
    import Input from '../$componentes/input.svelte'
    import Select from '../$componentes/select.svelte'
    import Button from '../$componentes/button.svelte'
    import InputDate from '../$componentes/input.date.svelte'

    let data = {}
    let error = null
    let showBell = false
    let showLabel = false
    let showCategory = false

    async function createTask() {
        
        const resp = await TasksService.createTask(data)

        if (resp.error)
            return error = resp.error.message
        
        TasksStore.append(resp.data)
    }

</script>

<Form on:submit={ createTask } class="box" textButton="Ok">
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
            <Input bind:value={ data.description }></Input>
        </div>
    </div>
    <div class="column">
        <div class="control block">
            <InputDate bind:value={ data.date }></InputDate>
        </div>
    </div>
    <div class="column ">
        <div class="container content has-text-centered">
            <div class="control block">
                <Button size="small" icon="bell" on:click={ () => showBell = !showBell }></Button>
                <Button size="small" icon="tag" on:click={ () => showLabel = !showLabel }></Button>
                <Button size="small" icon="user-tag" on:click={ () => showCategory = !showCategory }></Button>
            </div>
            <div class="columns">
                {#if showBell}
                    <div class="m-4 column">
                        <Select
                            options={
                                ['15 minutos antes',
                                '10 minutos antes',
                                '5 minutos antes']}>
                        </Select>
                    </div>
                {/if}
                {#if showLabel}
                    <div class="m-5 column">
                        <Input bind:value={ data.label } placeholder="Etiqueta"></Input>
                    </div>
                {/if}
                {#if showCategory}
                    <div class="m-4 column">
                        <Select bind:value={ data.category }
                            options={
                                ['Home',
                                'School',
                                'Work']}>
                        </Select>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</Form>
<Button text="Cancel"></Button>