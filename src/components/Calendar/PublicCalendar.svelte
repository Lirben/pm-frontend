<script>
    import * as animateScroll from "svelte-scrollto";
    import Toggle from '../BasicUI/Inputfields/Toggle.svelte';
    import LocationSelector from '../GeoMaps/LocationSelector/LocationSelector.svelte';
    import ParamedicByLocationList from '../ParamedicCards/ParamedicByLocationList.svelte';
    import PracticeSelector from '../Practice/PracticeSelector.svelte';
    import Calendar from './Calendar.svelte';

    export let showParamedics = true;
    export let appointmentBooked;

    let homeToggle = true;
    let locationText = "Aan huis";
    let selectedLocation = null;
    let scrolled = false;

    function resetLocation() {
        selectedLocation = null;
        scrolled = false;
    }

    $: {
        if(homeToggle)
            locationText = "Aan huis";
        else
            locationText = "In de praktijk";

        if(!scrolled && selectedLocation)
        {
            animateScroll.scrollTo({element: '#calendar', offset: -100});
            scrolled = true;
        }
    }
</script>


<div class="grid grid-cols-2 py-2">
    <div class="text-right pr-1 font-bold text-base md:text-xl flex flex-col justify-center">Aan huis of in onze praktijk?</div>
    <div class="text-left pl-1">
        <div class="flex flex-col justify-center">
            <div class="block"><Toggle bind:checked="{homeToggle}" onChange="{resetLocation}"/></div>
            <div class="block">{locationText}</div>
        </div>
    </div>
</div>

{#if homeToggle}
    <div class="grid grid-cols-2 py-2">
        <div class="text-right pr-1 font-bold text-base md:text-xl flex flex-col justify-center">Wat is jouw woonplaats?</div>
        <div class="text-left pl-1">
            <div class="flex flex-col justify-center md:w-40">
                <LocationSelector bind:selectedLocation="{selectedLocation}" />
            </div>
        </div>
    </div>
{:else}
    <div class="grid grid-cols-2 p-2">
        <div class="text-right pr-1 font-bold text-base md:text-xl flex flex-col justify-center">Kies praktijkruimte:</div>
        <div class="text-left pl-1">
            <div class="flex flex-col justify-center md:w-40">
                <PracticeSelector bind:selectedPractice="{selectedLocation}" />
            </div>
        </div>
    </div>
{/if}

<div id="calendar">
    {#if selectedLocation}
        {#if showParamedics}
            <div class="flex flex-col justify-center mt-8">
                <div class="hidden font-bold md:flex flex-col justify-center m-2">Collega's in deze regio:</div>
                <ParamedicByLocationList location="{selectedLocation}" />
            </div>
        {/if}

        <Calendar location="{selectedLocation}" {showParamedics} {appointmentBooked}/>
    {/if}
</div>