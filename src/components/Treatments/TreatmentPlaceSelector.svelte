<script>
    import {getPractices} from '../../mobielServices/practiceService';
    import Select from 'svelte-select';

    export let places;
    export let selectedPlace = {"type": '', "city": ''};

    const optionIdentifier = 'type';
    const getOptionLabel = (option) => option.type;
    const getSelectionLabel = (option) => option.type;
    let practices;

    function handleSelect(event) {
        selectedPlace = event.detail;
    }

    function handleClear() {
        selectedPlace = {"type": '', "city": ''};
    }

    async function fetchPractices() {
        practices = await getPractices();
    }

    function addPracticesToPlacesList() {
        let retVal = true;

        places.forEach(element => {
            if(element.type.startsWith("Praktijk"))
                retVal = false;
        });

        return retVal;
    }

    fetchPractices();

    $: {
        selectedPlace = {"type": '', "city": ''}
        
        if(practices && addPracticesToPlacesList())
            places = places.concat(practices);
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
    <Select items={places} selectedValue={selectedPlace} {optionIdentifier} {getOptionLabel} {getSelectionLabel} placeholder="Kies plaats" on:select={handleSelect} on:clear={handleClear} />
</div>