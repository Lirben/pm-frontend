<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    
    import { getPlaceTypes } from '../../../../mobielServices/locationService';

    export let selectedPlaceType = '';
    export let readOnly = false;
    export let valid = true;

    let placeTypes;
    let componentIsInvalid = (selectedPlaceType.localeCompare('') == 0);

    const isClearable = false;
    const optionIdentifier = 'placeType';
    const getOptionLabel = (option) => option.placeType;
    const getSelectionLabel = (option) => option.placeType;

    onMount(async () => {
        placeTypes = await getPlaceTypes();
    });

    function handleSelect(event) {
        selectedPlaceType = event.detail.placeType;
    }

    function handleClear() {
        selectedPlaceType = '';
    }

    $: {
        if(selectedPlaceType.localeCompare('') == 0)
        {
            valid = false;
            componentIsInvalid = true;
        }

        if(componentIsInvalid && (selectedPlaceType.localeCompare('') != 0))
        {
            valid = true;
            componentIsInvalid = false;
        }
    }

</script>

<style>
    .themed {
      --background: #f8f8f8;
      --border: 2px solid #ffbf0000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }

    .themed-error {
      --background: #f8f8f8;
      --border: 2px solid #E03616;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

<label for="adressType" class="font-bold">Adrestype: </label>
<div class="{ componentIsInvalid ? 'themed-error' : 'themed'} { $$props.class }">
    {#if !readOnly}
        <Select items={placeTypes} selectedValue={ selectedPlaceType } { isClearable } {optionIdentifier} {getOptionLabel} {getSelectionLabel} placeholder="Kies locatie type" on:select={handleSelect} on:clear={handleClear}></Select>
    {:else}
        { selectedPlaceType }
    {/if}
</div>