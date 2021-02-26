<script>
    import TreatmentPlaceSelector from '../../Treatments/TreatmentPlaceSelector.svelte';
    import emoji from "node-emoji";

    export let treatment;
    export let conversation;
    export let selectedPlace;

    export let practiceAvailable = true;
</script>

{#if (treatment && treatment.treatmentID != '') && (conversation && conversation.code != '') }
    <div class="bg-grey-lighter text-left px-2 my-1 flex flex-col justify-center">
        <div class="font-bold my-1 flex flex-row justify-start">
            <div class="flex flex-col justify-center font-bold w-32 md:w-40">
                { emoji.get('round_pushpin') } Locatie?
            </div>
            <div class="w-64">
                <TreatmentPlaceSelector bind:selectedPlace="{selectedPlace}" places="{treatment.places}" />
            </div>
        </div>

        {#if !practiceAvailable}
            <div class="font-bold flex flex-row justify-start my-1">
                <div class="flex flex-col justify-center font-bold w-32 md:w-40 text-center">
                    { emoji.get('warning') }
                </div>
                <div class="flex-grow text-center flex flex-col justify-center">
                    <div class="text-red">De Praktijkruimte is niet beschikbaar op het gekozen moment!</div>
                </div>
            </div>                     
        {/if}
    </div>
{/if}