<script>
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";

    export let conversation;
</script>

<SectionTitle icon='left_speech_bubble' title="Type gesprek" />
<div class="bg-grey-lighter text-left px-4">
    <div class="my-1 h-8 flex flex-col justify-center">
        { conversation.name }
    </div>
</div>