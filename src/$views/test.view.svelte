<script>

    import { TaskStore } from '../stores';

    import TaskUpdate from '../tasks/task.update.svelte'

    import Modal from '../$componentes/modal.svelte'

</script>


<Modal id="TaskUpdate">
    <TaskUpdate on:updated={ TaskStore.modalClose }></TaskUpdate>
</Modal>