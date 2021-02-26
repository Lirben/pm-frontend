<script>
    import emoji from "node-emoji";
    import Textfield from '../../../BasicUI/Inputfields/Textfield.svelte';
    import PlaceTypeSelector from "./PlaceTypeSelector.svelte";

    export let place;
    export let deletePlace;
    export let id;
    export let readOnly = false;
    export let valid;

    const callDeletePlace = () => {
        deletePlace(id);
    }
</script>

<div class="flex flex-row bg-grey-lighter text-left mb-4 px-2">

    <div class="flex flex-col flex-grow">
        <div>
            <PlaceTypeSelector bind:valid class="inline-block bg-grey-lighter w-36" bind:selectedPlaceType="{ place.type }" {readOnly} />
        </div>
        <div>
            <Textfield bind:valid label="Straat" {id} bind:value={place.street} placeholder="Straat" {readOnly} class="bg-grey-lighter rounded-lg p-2 w-28 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
            <Textfield bind:valid label="Nr" {id} bind:value={place.houseNumber} placeholder="Nr" {readOnly} class="inline-block bg-grey-lighter rounded-lg p-2 w-12 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
        </div>
        <div class="my-1">
            <Textfield bind:valid label="Plaats" {id} bind:value={place.city} placeholder="Plaats" {readOnly} class="bg-grey-lighter rounded-lg p-2 w-32 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
        </div>
    </div>

    {#if !readOnly}
        <div class="flex-none w-8 my-3 justify-center">
            <span class="p-2 cursor-pointer" on:click="{callDeletePlace}">{ emoji.get('wastebasket') }</span>        
        </div>
    {/if}

  </div>