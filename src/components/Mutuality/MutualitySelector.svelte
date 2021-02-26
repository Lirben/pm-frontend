<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    
    import { getMutualitys } from '../../mobielServices/mutualityService.js';

    export let label = null;
    export let selectedMutuality = '';
    export let readOnly = false;
    export let showBorder = false;

    let mutualities;

    const isClearable = false;
    const optionIdentifier = 'name';
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;

    onMount(async () => {
        mutualities = await getMutualitys();
    });

    function handleSelect(event) {
        selectedMutuality = event.detail.name;
    }

    function handleClear() {
        selectedMutuality = '';
    }

</script>

<style>
    .themed {
      --background: #f8f8f8;
      --border: 2px solid #ffbf0000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }

    .borderColor {
        --background: #ffffff;
        --border: 2px solid #ffc000;
        --borderHoverColor: #ffc000;
    }
</style>

<div class="flex flex-row justify-start">
    {#if label}
        <label for="mutuality" class="font-bold flex flex-col justify-center">{ label }: </label>
    {/if}
    <div class="themed {showBorder ? 'borderColor' : ''} { $$props.class }  flex flex-col justify-center">
        {#if !readOnly}
            <Select items={mutualities} selectedValue={ selectedMutuality } { isClearable } { optionIdentifier } { getOptionLabel } {getSelectionLabel} placeholder="Kies mutualiteit" on:select={handleSelect} on:clear={handleClear}></Select>
        {:else}
            {#if selectedMutuality}
                { selectedMutuality }
            {/if}
        {/if}
    </div>
</div>