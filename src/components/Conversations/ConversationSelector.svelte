<script>
    import { onMount } from 'svelte';
    import Select from 'svelte-select';
    import Item from './ConversationItem.svelte';   
    import {getConversations} from '../../mobielServices/conversationService';

    export let selectedConversation = {"code": '', "name": ''};

    let conversations;

    const optionIdentifier = 'code';
    const getOptionLabel = (option) => option.name;
    const getSelectionLabel = (option) => option.name;

    onMount(async () => {
        conversations = await getConversations();
    });

    function handleSelect(event) {
        selectedConversation = event.detail;
    }

    function handleClear() {
        selectedConversation = {"code": '', "name": ''};
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
    <Select items={conversations} selectedValue={selectedConversation} {optionIdentifier} {getOptionLabel} {getSelectionLabel} {Item} placeholder="Kies gesprekstype" on:select={handleSelect} on:clear={handleClear} />
</div>