<script>
    import TreatmentSelector from "../../Treatments/TreatmentSelector/TreatmentSelector.svelte";
    import emoji from "node-emoji";
    
    export let selectedTreatment;
    export let startTime = null;
</script>

{#if startTime}
    <div class="bg-grey-lighter text-left px-2 my-1 h-16 flex flex-col justify-center">
        <div class="font-bold my-1 flex flex-row justify-start">
            <div class="flex flex-col justify-center font-bold w-32 md:w-40">
                { emoji.get('blond-haired-man') } Cliënt?
            </div>
            <div class="w-64">
                <TreatmentSelector bind:selectedTreatment="{selectedTreatment}" />
            </div>
        </div>
    </div>
{/if}