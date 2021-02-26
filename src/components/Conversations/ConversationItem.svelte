<script>
import ConversationCode from "./ConversationCode.svelte";

    export let item = undefined;
    
    export let getOptionLabel = undefined;  
    export let filterText = undefined;
    export let isActive = undefined;
    export let isHover = undefined;
    export let isFirst = undefined;
</script>
  
<div class="flex items-center px-1 py-2">
    <div class="text-base flex flex-row justify-start">
        <ConversationCode code="{item.code}" />
        <div class="flex flex-col justify-center">{item.name}</div>
    </div>
</div>