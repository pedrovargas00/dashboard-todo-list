<script>

  export let size = ''
  export let color = ''
  export let state = ''
   export let value = ''
  export let options = []

</script>

<div
    class="select is-{ size } is-{ color } is-{ state }"
>
    <select bind:value>
      {#each options as option}
          <option value={ option }>{ option }</option>
      {/each}
    </select>
</div>