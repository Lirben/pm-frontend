<script>
  import ParamedicCard from "./ParamedicCard.svelte";

  export let paramedics;
</script>

<div class="grid grid-cols-1 lg:grid-cols-4">

  {#if paramedics}

    {#each paramedics as paramedic }

        <ParamedicCard {paramedic} />

    {/each}

  {:else}

    <p>loading...</p>
    
  {/if}

</div>