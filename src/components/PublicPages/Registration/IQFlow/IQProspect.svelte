<script>
    import PrivacyDisclaimer from "../../../BasicUI/Disclaimers/PrivacyDisclaimer.svelte";
    import ProceedToNextStep from "./ProceedToNextStep.svelte";

    export let prospect;
    export let proceedToNextStep;
    export let showError;
</script>


<form on:submit|preventDefault={proceedToNextStep}>
    <div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg">
        <div class="text-base md:text-xl text-left flex flex-col justify-between min-h-screen">
            <div class="flex flex-col justify-start">
                <h2 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mt-6 mb-16">Hoe kunnen wij jou bereiken?</h2>
                            
                <div class="flex flex-col justify-start px-4 md:px-24 lg:px-48 xl:px-80 mb-6 text-base h-full">
                    
                    <label for="FirstName" class="flex font-bold flex-row justify-center">Naam van jouw kind </label>                    
                    <div class="text-left flex flex-row justify-start space-x-2 mb-6">
                        <div class="absolute mt-4 ml-4 text-grey text-base">🧒</div>
                        <input required type="text" id="FirstName" bind:value={prospect.firstName} placeholder="Voornaam" class="pl-8 bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-2/5 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                        <input required type="text" id="Name" bind:value={prospect.name} placeholder="Achternaam" class="bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-3/5 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                    </div>
                    
                    <label for="Email" class="flex font-bold flex-row justify-center">Jouw email adres</label>
                    <div class="text-left flex flex-row justify-start space-x-2 mb-6">
                        <div class="absolute mt-4 ml-4 text-grey text-base">📧</div>
                        <input required type="email" id="Email" bind:value={prospect.email} placeholder="Email" class="pl-8 bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                    </div>

                    <label for="Telephone" class="flex font-bold flex-row justify-center">Jouw telefoonnummer</label>
                    <div class="text-left flex flex-row justify-start space-x-2 mb-6">
                        <div class="absolute mt-4 ml-4 text-grey text-base">☎️</div>
                        <input required minlength="9" type="text" id="Telephone" bind:value={prospect.telephone} placeholder="Telefoonnummer" class="pl-8 bg-white border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                    </div>  
                    
                    <ProceedToNextStep {showError} />

                    <div class="flex flex-row justify-center bottom-0 text-center">
                        <PrivacyDisclaimer newProspect="{true}" />
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</form>