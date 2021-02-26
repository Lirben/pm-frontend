<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';    
    import {getPractices} from '../../mobielServices/practiceService';

    export let selectedPractice;
    let practices;

    const optionIdentifier = 'practiceID';
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name.split(' ')[1];

    onMount(async () => {
        practices = await getPractices();
    });

    function handleSelect(event) {
        selectedPractice = event.detail;
    }

    function handleClear() {
        selectedPractice = null;
    }

</script>

<style>
    .themed {
      --border: 1px solid #ffc000;
      --borderFocusColor: #ffc000;
      --borderRadius: 10px;
    }
</style>

<div class="themed text-left {$$props.class}">
    <Select items={practices} {optionIdentifier} {getOptionLabel} {getSelectionLabel} placeholder="Kies praktijk" on:select={handleSelect} on:clear={handleClear} />
</div>