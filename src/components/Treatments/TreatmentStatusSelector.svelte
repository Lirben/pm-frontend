<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    
    import { getTreatmentStatus } from '../../mobielServices/treatmentService';

    export let selectedStatus = '';

    let statusOptions;

    const optionIdentifier = 'label';
    const getOptionLabel = (option) => option.label;
    const getSelectionLabel = (option) => option.label;

    onMount(async () => {
        statusOptions = await getTreatmentStatus();
    });

    function handleSelect(event) {
        selectedStatus = event.detail;
    }

    function handleClear() {
        selectedStatus = '';
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
    <Select items={statusOptions} {optionIdentifier} {getOptionLabel} {getSelectionLabel} placeholder="Kies status" on:select={handleSelect} on:clear={handleClear}></Select>
</div>