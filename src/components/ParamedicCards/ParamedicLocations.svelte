<script>
    import GeoMap from "../GeoMaps/GeoMap.svelte";
    import { getLocations, toggleLocation } from '../../mobielServices/paramedicService';

    export let paramedic;

    let locations;

    async function fetchLocations()
    {
        locations = await getLocations(paramedic.code, 1);
    }

    async function updateRegion(region){
        await toggleLocation(paramedic.code, region.locationID);
        fetchLocations();
    }

    $: {
        if(paramedic)
            fetchLocations();
    }
</script>

<div class="text-sm lg:text-xl h-screen bg-white bg-opacity-80 mx-0 px-0 lg:py-8 overflow-auto overflow-y-hidden z-20">
    <GeoMap { locations }  topLevel="{false}" { updateRegion } editable="{true}" regionBorder="{false}" />
</div>