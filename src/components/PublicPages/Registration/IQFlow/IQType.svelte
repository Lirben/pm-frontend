<script>
    import IQReason from "./IQReason.svelte";
    import IQReferrer from "./IQReferrer.svelte";
import ProceedToNextStep from "./ProceedToNextStep.svelte";

    export let proceedToNextStep;
    export let IQType = "Logopedie";
    export let IQNotes;
    export let referrer = null;
    export let IQReasonText = null;
    export let showError;

    $: {
        IQNotes = 'Type IQ-test: ' + IQType + '\r\n';

        if(IQReasonText)
            IQNotes += 'Reden IQ-Test: ' + IQReasonText + '\r\n';
    }


</script>

<form on:submit|preventDefault={proceedToNextStep}>
    <div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg">
        <div class="text-base md:text-xl text-left flex flex-col justify-between min-h-screen">
            <div class="flex flex-col justify-start">
                <h2 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mt-6 mb-16">Waarin kadert de IQ test?</h2>
                            
                <div class="flex flex-col justify-start">
                    <div class="flex flex-row justify-center space-x-4 md:space-x-8">
                
                        <div on:click="{() => IQType = 'Logopedie'}" class="relative {IQType.localeCompare('Logopedie') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-72 w-44 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
                            <div class="flex flex-row justify-center text-7xl md:text-9xl my-4">💬</div>
                            <div class="text-center text-2xl font-bold">Terugbetaling Logopedie</div>
                        </div>
                
                        <div on:click="{() => IQType = 'Uitgebreid'}" class="relative {IQType.localeCompare('Uitgebreid') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-72 w-44 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
                            <div class="text-center text-7xl md:text-9xl my-4">🧠</div>
                            <div class="text-center text-2xl font-bold px-1">In een ruimer kader</div>
                            <div class="text-center text-lg font-bold px-1">(hoogbegaafdheid, leerproblemen, ...)</div>
                        </div>
                
                    </div>
                </div>

            </div>
    
            {#if IQType.localeCompare('Logopedie') == 0}
                <IQReferrer bind:referrer/>
            {/if}

            {#if IQType.localeCompare('Uitgebreid') == 0}
                <IQReason bind:IQReason="{IQReasonText}" />
            {/if}

            <ProceedToNextStep {showError} />

        </div>
    </div>
</form>