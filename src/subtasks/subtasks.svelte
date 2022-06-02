<script>

    import Form from '../$componentes/form.svelte'
    import Button from '../$componentes/button.svelte'
    
    import SubtasksService from '../$services/subtasks.service'

    import { SubtaskStore, SubtasksStore, TaskStore } from '../stores'

    import Subtask from '../subtasks/subtask.svelte'
    import SubtaskDelete from '../subtasks/subtask.delete.svelte'

    $: $TaskStore

    let query = { }
    let access = false
    let showSubtask = false
    let showDeleteSubtask = false

    async function getSubtasks() {

        query = {
            taskId: $TaskStore._id
        }
        access = true
        
        const resp = await SubtasksService.getSubtasks(query)

        if (resp.error)
            return error = resp.error.message
        
        SubtasksStore.set(resp.data.subtasks)
    }

</script>

<Form on:submit={ getSubtasks } textButton="Sí">
    <div class="title">¿Desea ver las subtareas?</div>
</Form>

{#if access === true}
    {#each $SubtasksStore as subtask}
        <div class="box has-text-black has-background-link">
            <div class="columns is-mobile">
                <div class="column is-half is-offset-one-quarter">
                    { subtask.name }
                </div>
                <div class="column is-4 is-offset-1">
                    <div class="buttons">
                        <Button size="small" icon="eye" on:click={ () => { SubtaskStore.modalRead(subtask)
                                                                            showSubtask = !showSubtask } }></Button>
                        <Button size="small" icon="delete-left" on:click={ () => { SubtaskStore.modalDelete(subtask)
                                                                                    showDeleteSubtask = !showDeleteSubtask } }></Button>
                    </div>
                </div>
            </div>
        </div>
    {/each}
{/if}

{#if showSubtask}
    <Subtask></Subtask>
{/if}
{#if showDeleteSubtask}
    <SubtaskDelete></SubtaskDelete>
{/if}
