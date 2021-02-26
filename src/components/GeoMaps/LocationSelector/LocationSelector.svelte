<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import Item from './LocationItem.svelte';
    
    import {getLocationList} from '../../../mobielServices/locationService';

    export let selectedLocation;
    export let placeholder = "Vul woonplaats in";
    
    let locations;

    const isSearchable = true;
    const optionIdentifier = 'locationID';
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;

    onMount(async () => {
        locations = await getLocationList();
    });

    function handleSelect(event) {
        selectedLocation = event.detail;
    }

    function handleClear() {
        selectedLocation = null;
    }

</script>

<style>
    .themed {
      --border: 2px solid #ffc000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

<div class="themed { $$props.class }">
    <Select items={locations} {optionIdentifier} {getOptionLabel} {getSelectionLabel} {Item} {isSearchable} {placeholder} on:select={handleSelect} on:clear={handleClear} inputStyles="cursor: text" />
</div>