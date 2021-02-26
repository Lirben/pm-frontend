<script>
    import Icon from 'fa-svelte'
    import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
    import TreatmentStatusSelector from '../TreatmentStatusSelector.svelte';

    export let filterOnStatus = '';

    let showFilter = false;

    function toggleFilter()
    {
        showFilter = !showFilter;
    }
</script>

<div>
    {#if showFilter}

        <div class="my-2">
            <TreatmentStatusSelector bind:selectedStatus={filterOnStatus}></TreatmentStatusSelector>
        </div>

    {:else}

        <div class="my-5 font-bold" on:click={ toggleFilter }>
            Status <Icon class="text-base" icon={ faFilter } ></Icon>
        </div>

    {/if}
</div>