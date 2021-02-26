<script>
    import MutualitySelector from "../../../Mutuality/MutualitySelector.svelte";
    import BirthdayPicker from "../../../BasicUI/DatetimePicker/BirthdayPicker.svelte";
    import ProceedToNextStep from "./ProceedToNextStep.svelte";

    export let mutuality;
    export let prospect;
    export let proceedToNextStep;
    export let showError;
</script>


<form on:submit|preventDefault={proceedToNextStep}>
    <div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg">
        <div class="text-base md:text-xl text-left flex flex-col justify-between min-h-screen">
            <div class="flex flex-col justify-start">
                <h2 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mt-6 mb-16">Kan je de volgende info met ons delen?</h2>
                            
                <div class="flex flex-col justify-start px-4 md:px-24 lg:px-48 xl:px-80 mb-6 text-base h-full">

                    <label for="mutulity" class="flex font-bold flex-row justify-center">Wat is de mutualiteit van {prospect.firstName}? </label>                    
                    <div class="text-left flex flex-row justify-center mb-6">
                        <MutualitySelector bind:selectedMutuality="{mutuality}" showBorder="{true}" class="w-64"/>
                    </div>
                    
                    <label for="Birthday" class="flex font-bold flex-row justify-center">Wat is de geboortedatum van {prospect.firstName}</label>
                    <div class="text-left flex flex-row justify-center mb-6">
                        <BirthdayPicker bind:birthday="{prospect.dateofbirth}" class="bg-white rounded-lg border-2 border-yellow p-2 w-64 focus:ring-2 focus:ring-yellow focus:outline-none" />   
                    </div>
                    
                    <ProceedToNextStep {showError} />
                </div>
            </div>
    
        </div>
    </div>
</form>