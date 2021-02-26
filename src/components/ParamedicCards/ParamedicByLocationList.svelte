<script>
    import {getByLocation} from '../../mobielServices/paramedicService';
    import ParamedicPicture from './ParamedicPicture.svelte';

    export let location = null;
    let paramedics;

    async function getParamedics()
    {
        paramedics = await getByLocation(location.locationID);
    }

    $: {
        if(location)
            getParamedics();
    }

</script>

{#if paramedics}
    <div class="flex flex-row justify-center space-x-2">
        {#if paramedics.length > 0}
            {#each paramedics as paramedic}
                <div class="flex flex-row justify-start">
                    <div class="flex flex-col justify-center"><ParamedicPicture src="{paramedic.code}" alt="foto van {paramedic.firstName}" size="10" borderSize="2" /></div>
                    <div class="flex flex-col justify-center">{paramedic.firstName}</div>
                </div>
            {/each}
        {:else}
            <span class="h-12 flex flex-col justify-center font-bold text-red">Geen collega's gevonden</span>
        {/if}
    </div>
{/if}