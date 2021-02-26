<script>
    import LocationTypeSelector from "../../../GeoMaps/LocationTypeSelector.svelte";
    import IQCaptureAdress from "./IQCaptureAdress.svelte";
import ProceedToNextStep from "./ProceedToNextStep.svelte";

    export let place = {type: "Thuisadres", street: '', houseNumber: '', city: ''};
    export let proceedToNextStep;
    export let showError;
</script>


<form on:submit|preventDefault={proceedToNextStep}>
    <div class="m-0 my-2 py-2 md:mx-36 bg-white rounded-lg min-h-screen">

        <div class="text-base md:text-xl text-left px-2 md:px-8">
            <h2 class="text-yellow text-center text-4xl font-bold mb-12 mt-6">Waar mag de IQ-test doorgaan?</h2>

            <LocationTypeSelector bind:locationType={place.type} />

            <IQCaptureAdress bind:place />

            <ProceedToNextStep {showError} />        
        </div>
    </div>
</form>