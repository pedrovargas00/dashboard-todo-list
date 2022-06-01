<script>

    import Button from '../$componentes/button.svelte'
    import TasksService from '../$services/tasks.service'

    import { SubtaskStore, TasksStore, TaskStore } from '../stores'

    let query = {}

    getTasks()

    async function getTasks() {
        
        const resp = await TasksService.getTasks(query)

        if (resp.error)
            return error = resp.error.message
        
        TasksStore.set(resp.data.tasks)
    }

</script>

{#each $TasksStore as task}
    <div class="box has-text-black has-background-link">
        <div class="columns is-mobile">
            <input type="checkbox" bind:checked={ task.status }/>
            <div class="column is-half is-offset-one-quarter">
                { task.name }
            </div>
            <div class="column is-4 is-offset-1">
                <div class="buttons">
                    <Button size="small" icon="eye" on:click={ () => TaskStore.modalRead(task) }></Button>
                    <Button size="small" icon="code-branch" on:click={ () => SubtaskStore.modalCreate() }></Button>
                    <Button size="small" icon="pen" on:click={ () => TaskStore.modalUpdate(task) }></Button>
                    <Button size="small" icon="delete-left" on:click={ () => TaskStore.modalDelete(task) }></Button>
                </div>
            </div>
        </div>
    </div>
{/each}