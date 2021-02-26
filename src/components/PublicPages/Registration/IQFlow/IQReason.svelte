<script>
    export let IQReason;
</script>

<div class="flex flex-col justify-start">
    <h3 class="text-yellow text-center text-2xl font-bold mt-12 mb-6">Waarom wenst u een IQ test?</h3>
    
    <div class="flex flex-row justify-center py-2">   
        <div class="flex flex-col justify-center w-full md:w-3/6 lg:w-2/6">

            <div class="text-left flex flex-row justify-start space-x-2 mb-2">
                <div class="absolute mt-4 ml-4 text-grey text-base">📝</div>
                <textarea required id="IQReason" bind:value="{IQReason}" placeholder="Reden IQ test" class="bg-white pl-8 border-2 border-yellow mt-1 mb-2 h-24 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
            </div>
        </div>
    </div> 
</div>