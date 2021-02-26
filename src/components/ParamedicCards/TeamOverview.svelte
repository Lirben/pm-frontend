<script>
    import ParamedicOverview from "./ParamedicOverview.svelte";
    import ParamedicLocations from "./ParamedicLocations.svelte";
    import ParamedicSelector from "./ParamedicSelector/ParamedicSelector.svelte";
    import { getParamedic } from '../../mobielServices/paramedicService';


    let paramedic;
    let selectedParamedic;

    async function fetchParamedic(paramedicCode)
    {
        paramedic = await getParamedic(paramedicCode);
    }

    $: {
        if (selectedParamedic && selectedParamedic.code != '')
            fetchParamedic(selectedParamedic.code);
    }
</script>

<div class="px-0 mx-0 bg-white rounded-lg">

    <div class="grid grid-cols-2 md:px-72">
        <div class="text-right mx-2 font-bold flex flex-col justify-center">
            Bekijk gegevens van:
        </div>
        <div class="mx-2">
            <ParamedicSelector bind:selectedParamedic="{selectedParamedic}" />
        </div>
    </div>

    {#if paramedic && paramedic.code != ''}
        <ParamedicOverview { paramedic } />

        <ParamedicLocations { paramedic } />
    {:else}
        <div class="h-24 text-center flex flex-col justify-center">
            <span>Selecteer collega</span>
        </div>
    {/if}
</div>