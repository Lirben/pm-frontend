<script>
    import PracticeSelector from "../../../Practice/PracticeSelector.svelte";

    export let place;

    $: console.log(place);
</script>

<div class="flex flex-col justify-start">
    <h3 class="text-yellow text-center text-4xl font-bold mb-12 mt-6">Kies praktijkruimte</h3>

    <div class="flex flex-col justify-start py-2">
        <div class="flex flex-row justify-center py-2">
            <div class="flex flex-col justify-center ">
                <PracticeSelector bind:selectedPractice={place} class="w-44" />
            </div>
        </div>

        {#if place && place.street.localeCompare('') != 0}
            <div class="flex flex-row justify-center py-2">   
                <div class="flex flex-col justify-center font-bold mr-1">
                    📍 Adres:
                </div>
                <div class="flex flex-col justify-center">
                    {place.street} {place.houseNumber}, {place.city}
                </div>
            </div>
        {/if}
    </div>
</div>