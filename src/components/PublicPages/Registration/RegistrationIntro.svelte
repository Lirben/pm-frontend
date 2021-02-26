<script>
    import Information from "../../BasicUI/Information/Information.svelte";
    import PublicTreatmentTypeSelector from "../../Treatments/TreatmentTypeSelector/PublicTreatmentTypeSelector.svelte";

    export let treatmentType;
    export let finishIntro;
</script>

<div class="m-0 my-2 py-2 md:mx-36 bg-white rounded-lg min-h-screen">

    <div class="text-base md:text-xl text-left px-2 md:px-8">
        <h1 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mb-12 mt-6">Hoe kunnen wij helpen?</h1>

        <PublicTreatmentTypeSelector bind:treatmentType />

        <div class="my-8 flex flex-row justify-center text-base">
            <button class="bg-yellow text-xl font-bold p-2 rounded-lg flex flex-row justify-center focus:outline-none" on:click="{finishIntro}">
                Volgende stap
            </button>
        </div>
    
        <div class="my-8 flex flex-row justify-center">
            <Information message="Heb je nog bijkomende vragen, is er iets niet duidelijk?" />
        </div>
    </div>
</div>