<script>
    import LocationSelector from "../../../GeoMaps/LocationSelector/LocationSelector.svelte";

    export let title;
    export let label;
    export let place;
    export let placeholder;

    let selectedPlace;

    $: {
        if(selectedPlace)
            place.city = selectedPlace.name;
    }
</script>

<div class="flex flex-col justify-start">
    <h3 class="text-yellow text-center text-4xl font-bold mb-12 mt-6">{title}</h3>

    <div class="flex flex-col justify-start py-2">
        <div class="text-right pr-1 font-bold text-base md:text-xl flex flex-row justify-center">
            { label }
        </div>

        <div class="flex flex-row justify-center py-2">
            <div class="flex flex-col justify-center w-full md:w-3/6 lg:w-2/6">
                <LocationSelector {placeholder} bind:selectedLocation={selectedPlace} class="w-full" />
            </div>
        </div>
    </div>
    
    <div class="flex flex-row justify-center py-2">   
        <div class="flex flex-col justify-center w-full md:w-3/6 lg:w-2/6">
            <input bind:value={place.street} required type="text" id="homeStreet" placeholder="Straatnaam" class="bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
        </div>
    </div>

    <div class="flex flex-row justify-center py-2">      
        <div class="flex flex-col justify-center w-full md:w-3/6 lg:w-2/6">
            <input bind:value={place.houseNumber} required type="text" id="homeHousenumber" placeholder="Huisnummer" class="bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
        </div>                
    </div>   
</div>