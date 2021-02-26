<script>
    import emoji from "node-emoji";
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";

    export let isTreatmentActive = true;

    function archive() {
        isTreatmentActive = false;
    }

    function activate() {
        isTreatmentActive = true;
    }
</script>

<SectionTitle title="Status" />

<div class="bg-grey-lighter text-left px-2">          
    <div class="my-1">
        {#if isTreatmentActive }
            <div class="w-auto rounded-lg m-2 p-2 h-12 bg-red text-2xl font-bold text-center cursor-pointer" on:click={archive}>
                { emoji.get('file_cabinet') }Archiveren
            </div>
        {:else}
            <div class="w-auto rounded-lg m-2 p-2 h-12 bg-yellow text-2xl font-bold text-center cursor-pointer" on:click={activate}>
                { emoji.get('sparkles') }Activeren
            </div>
        {/if}
    </div>
</div>