<script>
    import Modal from 'svelte-simple-modal';
    import NewTreatmentButton from './newTreatmentButton.svelte';
import TreatmentCount from './TreatmentCount.svelte';
    import TreatmentListItem from './TreatmentListItem.svelte';
    
    export let treatments;
    export let refresh;
</script>

{#if treatments}

    {#if treatments.length > 0}
        {#each treatments as treatment }
            <Modal>
                <TreatmentListItem { treatment } { refresh } />
            </Modal>
        {/each}
    {:else}
        <span class="font-bold">Geen behandelingen gevonden</span>
    {/if} 
    
    <TreatmentCount count={treatments.length} />
{/if}

<Modal>
    <NewTreatmentButton {refresh} />
</Modal>