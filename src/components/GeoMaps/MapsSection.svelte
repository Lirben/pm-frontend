<script>
    import {getLocationsGEOJSON, getSubLocationsGEOJSON} from '../../mobielServices/locationService';
    import GeoMap from "./GeoMap.svelte";
    import { onMount } from 'svelte';
    
    export let locationName;
    export let topLevel = true;
    export let regionBorder = true;
    export let subLocations;

    let subLocationsGeoJson;

    $: { reMountMap( locationName ) }

    function reMountMap(){
        loadGeoAPI();
    }

    onMount(async () => {
        loadGeoAPI();
    });
    
    async function loadGeoAPI(){
        if (process.browser)
            if(locationName === 'Oost-Vlaanderen')
                subLocationsGeoJson = await getLocationsGEOJSON();
            else
                subLocationsGeoJson = await getSubLocationsGEOJSON(locationName);
    }
</script>

<div class="absolute bottom-0 left-0 text-sm lg:text-xl w-full lg:w-3/12 lg:h-screen bg-white bg-opacity-80 mx-0 p-2 lg:p-8 overflow-auto overflow-y-hidden z-20">
    <h2 class="text-yellow text-2xl lg:text-3xl font-bold mb-8">Win tijd!</h2>
    <p>
        Onze kinderpsycholoog komt aan huis in  
        
        {#if subLocations && locationName.localeCompare('Oost-Vlaanderen') != 0}
            {#each subLocations as subLocation, i}
                {#if i == (subLocations.length - 1)}
                    { ' en ' + subLocation.name }!
                {:else}
                    {#if i > 0}
                        {', ' + subLocation.name } 
                    {:else}
                        { subLocation.name } 
                    {/if}
                {/if}
            {/each}
        {:else}
            { locationName }!
        {/if}
    </p>
    <p>
        Een consultatie bij ons heeft dus <strong>Minimale impact</strong> in uw dagelijkse gezinsplanning.
    </p>
    <p>
        Wij leren jouw kind in zijn omgeving kennen. Zo kunnen wij <strong>een beter advies</strong> geven.
    </p>
    <p>
        Voor gesprekken die moeilijker in te passen zijn in de thuissituatie kan je steeds terecht in onze praktijkruimte te Gent of Lebbeke.
    </p>
    
    {#if topLevel}
        <p>
            Je kan op ons rekenen in:
        </p>

        <p class="list-none text-xs lg:text-base font-bold p-0 m-0">
            {#if subLocations}
                {#each subLocations as subLocation }
                    <span class="text-yellow">&#x2022;</span>
                    <a rel=prefetch class="text-blue" href="../{subLocation.name}" title="Kinderpsycholoog { subLocation.name }">{ subLocation.name }</a>
                {/each}
            {:else}
                ...Loading...
            {/if}
        </p>
    {/if}

</div>

<GeoMap locations = { subLocationsGeoJson } { topLevel } { regionBorder } />