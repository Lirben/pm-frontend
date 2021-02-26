<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import Item from './TreatmentItem.svelte';
    
    import {getMyActiveTreatments} from '../../../mobielServices/treatmentService';

    export let selectedTreatment = { "treatmentID": '', "prospect": {"firstName": '', "name": ''} };

    let treatments;

    const optionIdentifier = 'treatmentID';
    const getOptionLabel = (option) => option.prospect.firstName;
    const getSelectionLabel = (option) => option.prospect.firstName;

    onMount(async () => {
        treatments = await getMyActiveTreatments();
    });

    function handleSelect(event) {
        selectedTreatment = event.detail;
    }

    function handleClear() {
        selectedTreatment = { "treatmentID": '', "prospect": {"firstName": '', "name": ''} };
    }

</script>

<style>
    .themed {
      --border: 1px solid #ffc000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

<div class="themed">
    <Select items={treatments} selectedValue={selectedTreatment} {optionIdentifier} {getOptionLabel} {getSelectionLabel} {Item} placeholder="Kies cliënt" on:select={handleSelect} on:clear={handleClear} />
</div>