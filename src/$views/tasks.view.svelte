<script>
    import { TaskStore, SubtaskStore } from '../stores';

    import Task from '../tasks/task.svelte'
    import Tasks from '../tasks/tasks.svelte'
    import TaskUpdate from '../tasks/task.update.svelte'
    import TaskDelete from '../tasks/task.delete.svelte'
    import TaskCreate from '../tasks/task.create.svelte'

    import SubtaskCreate from '../subtasks/subtask.create.svelte'

    import Modal from '../$componentes/modal.svelte'

</script>

<Modal id="SubtaskCreate">
    <SubtaskCreate on:created={ SubtaskStore.modalClose }></SubtaskCreate>
</Modal>

<Modal id="TaskUpdate">
    <TaskUpdate on:updated={ TaskStore.modalClose }></TaskUpdate>
</Modal>

<Modal id="TaskDelete">
    <TaskDelete on:deleted={ TaskStore.modalClose }></TaskDelete>
</Modal>

<Modal id="TaskRead">
    <Task />
</Modal>

<div class="container">
    <TaskCreate></TaskCreate>
    <Tasks></Tasks>
</div>