<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    
    import { getMutualitys } from '../../mobielServices/mutualityService.js';

    export let selectedMutuality;
    export let readOnly = false;

    let mutualities;

    const isClearable = false;
    const optionIdentifier = 'name';
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;

    onMount(async () => {
        mutualities = await getMutualitys();
    });

    function handleSelect(event) {
        selectedMutuality = event.detail;
    }

    function handleClear() {
        selectedMutuality = '';
    }

</script>

<style>
    .themed {
      --background: #ffc000;
      --border: 2px solid #ffbf0000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
      --placeholderColor: black
    }
</style>


<label for="mutuality" class="font-bold flex flex-col justify-center w-3/6 md:w-2/6">Selecteer jouw mutualiteit: </label>
<div class="pl-2 themed w-full flex flex-col justify-center">
    {#if !readOnly}
        <Select items={mutualities} selectedValue={ selectedMutuality } { isClearable } { optionIdentifier } { getOptionLabel } {getSelectionLabel} placeholder="Kies mutualiteit" on:select={handleSelect} on:clear={handleClear}></Select>
    {:else}
        {#if selectedMutuality}
            { selectedMutuality }
        {/if}
    {/if}
</div>