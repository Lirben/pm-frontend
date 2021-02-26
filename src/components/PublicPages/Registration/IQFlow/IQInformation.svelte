<script>
import ProceedToNextStep from "./ProceedToNextStep.svelte";

    export let proceedToNextStep;
    export let IQInformationNotes;
    export let showError;
</script>

<form on:submit|preventDefault={proceedToNextStep}>
    <div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg">
        <div class="text-base md:text-xl text-left flex flex-col justify-between min-h-screen">
            
            <div class="flex flex-col justify-start">
                <h2 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mt-6 mb-16">Laatste stap!</h2>

                <label for="IQInformation" class="px-8 text-center flex font-bold flex-row justify-center">Heeft u nog bijkomende vragen of informatie voor ons?</label>
                <div class="text-left flex flex-row justify-start space-x-2 mb-2">
                    <div class="absolute mt-4 ml-4 text-grey text-base">📝</div>
                    <textarea bind:value={IQInformationNotes} required id="IQInformation" placeholder="Vul hier jouw opmerkingen of vragen in" class="bg-white pl-8 border-2 border-yellow mt-1 mb-2 h-24 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
            
                <ProceedToNextStep buttonText="Bevestig reservatie!" {showError} />
            </div>

        </div>
    </div>
</form>