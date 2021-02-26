<script>
    import emoji from "node-emoji";
    import ConversationSelector from "../../Conversations/ConversationSelector.svelte";

    export let selectedConversation;
    export let treatment;
</script>

{#if treatment && treatment.treatmentID != '' }
    <div class="bg-grey-lighter text-left px-2 my-1 h-16 flex flex-col justify-center">
        <div class="font-bold my-1 flex flex-row justify-start">
            <div class="flex flex-col justify-center font-bold w-32 md:w-40">
                { emoji.get('left_speech_bubble') } Type gesprek?
            </div>
            <div class="w-64">
                <ConversationSelector bind:selectedConversation="{selectedConversation}" />
            </div>
        </div>
    </div>
{/if}