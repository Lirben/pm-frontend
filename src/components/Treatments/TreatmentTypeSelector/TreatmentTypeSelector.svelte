<script>
    import Select from 'svelte-select';
    import Item from '../TreatmentModal/TreatmentInfoPanel/TreatmentTypeItem.svelte';

    export let selectedTreatmentType = '';
    export let isClearable = false;
    export let readOnly = false;
    export let label='';

    const treatmentTypes = [
        {value: 'IQ-TEST', label: 'IQ-test', icon: 'brain'},
        {value: 'THERAPIE', label: 'Therapie', icon: 'left_speech_bubble'},
	];


    const optionIdentifier = 'value';
    const getOptionLabel = (option) => option.label;
    const getSelectionLabel = (option) => option.label;

    function handleSelect(event) {
        selectedTreatmentType = event.detail.value;
    }

    function handleClear() {
        selectedTreatmentType = '';
    }
</script>

<style>
    .themed {
      --background: #f8f8f8;
      --border: 2px solid #ffbf0000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

{#if label}
    <label for="Behandelingstype" class="font-bold">{label}: </label>
{/if}

<div class="themed { $$props.class }">
    {#if !readOnly}
        <Select items={treatmentTypes} selectedValue={ selectedTreatmentType } {getOptionLabel} {getSelectionLabel} {Item} showChevron={true} {optionIdentifier} { isClearable }  placeholder="Kies behandelingstype" on:select={handleSelect} on:clear={handleClear}></Select>
    {:else}
        { selectedTreatmentType }
    {/if}
</div>