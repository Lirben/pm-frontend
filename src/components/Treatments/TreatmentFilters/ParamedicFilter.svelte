<script>
    import Icon from 'fa-svelte'
    import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
    import ParamedicSelector from '../../ParamedicCards/ParamedicSelector/ParamedicSelector.svelte';

    export let filterOnParamedic;
    export let userLevel = 0;

    let showFilter = false;

    function toggleFilter()
    {
        showFilter = !showFilter;
    }
</script>

<div>
    {#if showFilter && userLevel == 3}

        <div class="my-2">
            <ParamedicSelector bind:selectedParamedic={filterOnParamedic}></ParamedicSelector>
        </div>

    {:else}

        <div class="my-5 font-bold" on:click={ toggleFilter }>
            Toegewezen {#if userLevel == 3}<Icon class="text-base" icon={ faFilter }></Icon>{/if}
        </div>

    {/if}
</div>