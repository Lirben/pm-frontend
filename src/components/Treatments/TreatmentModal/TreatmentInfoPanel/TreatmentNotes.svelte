<script>
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';

    export let treatmentNotes;
    export let readOnly = false;
</script>

<SectionTitle icon='memo' title="Informatie" />

<div class="bg-grey-lighter text-left px-2">          
    <div class="my-1">
        {#if !readOnly}
            <textarea class="w-full h-36 p-2 bg-grey-lighter leading-loose rounded-lg focus:ring-2 focus:ring-yellow focus:outline-none" bind:value={treatmentNotes} placeholder="Vul hier jouw notities in"></textarea>
        {:else}
            <div class="w-full h-36 p-2 bg-grey-lighter leading-loose rounded-lg">
                {#if treatmentNotes}
                    {treatmentNotes}
                {:else}
                    Geen notities
                {/if}
            </div>
        {/if}
    </div>
</div>