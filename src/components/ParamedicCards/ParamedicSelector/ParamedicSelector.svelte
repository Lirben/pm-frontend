<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import Item from './ParamedicItem.svelte';    
    import {getParamedics} from '../../../mobielServices/paramedicService';
    import ParamedicPicture from '../ParamedicPicture.svelte';

    export let selectedParamedic = { "code": '', "firstName": '' };
    export let readOnly = false;

    let paramedics;

    const optionIdentifier = 'code';
    const getOptionLabel = (option) => option.firstName;
    const getSelectionLabel = (option) => option.firstName;

    onMount(async () => {
        paramedics = await getParamedics();
    });

    function handleSelect(event) {
       selectedParamedic = { "code": event.detail.code, "firstName": event.detail.firstName };
    }

    function handleClear() {
        selectedParamedic = { "code": '', "firstName": '' };
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
    {#if !readOnly}
        <Select items={paramedics} selectedValue={selectedParamedic} {optionIdentifier} {getOptionLabel} {getSelectionLabel} {Item} placeholder="Kies collega" on:select={handleSelect} on:clear={handleClear}></Select>
    {:else}
        {#if selectedParamedic}
            <div class="flex flex-row justify-start">
                <div class="flex-none w-16 flex flex-col justify-center">
                    <ParamedicPicture src="{selectedParamedic.code}" alt="{selectedParamedic.firstName}" size="10" borderSize="2" />
                </div>
                <div class="flex-grow flex flex-col justify-center">
                    { selectedParamedic.firstName }
                </div>
            </div>
        {:else}
            Er is geen collega aangeduid
        {/if}
    {/if}
</div>