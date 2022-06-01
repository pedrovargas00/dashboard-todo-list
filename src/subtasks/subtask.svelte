<script>

    import { SubtaskStore } from '../stores'

</script>

{#if $SubtaskStore}

    <div class="columns">
        <div class="column">
            <div class="title is-4">Nombre</div>
            <div class="subtitle is-5">{ $SubtaskStore.name }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Description</div>
            <div class="subtitle is-5">{ $SubtaskStore.description }</div>
        </div>
    </div>
    <div class="columns">
        <div class="column">
            <div class="title is-4">Fecha de creación</div>
            <div class="subtitle is-5">{ $SubtaskStore.created }</div>
        </div>
    </div>

{/if}