<script>
    import Icon from 'fa-svelte'
    import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
    import TreatmentTypeSelector from '../TreatmentTypeSelector/TreatmentTypeSelector.svelte';

    export let filterOnType = '';

    let showFilter = false;

    function toggleFilter()
    {
        showFilter = !showFilter;
    }
</script>


{#if showFilter}

    <div class="my-2">
        <TreatmentTypeSelector bind:selectedTreatmentType="{filterOnType}" isClearable="{true}" />
    </div>

{:else}

    <div class="my-5 font-bold" on:click={ toggleFilter }>
        Type <Icon class="text-base" icon={ faFilter } ></Icon>
    </div>

{/if}