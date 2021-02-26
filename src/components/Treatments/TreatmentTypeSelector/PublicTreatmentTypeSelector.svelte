<script>
    export let treatmentType;
</script>

<div class="flex flex-col justify-start">
    <div class="flex flex-row justify-center space-x-4 md:space-x-8">

        <div on:click="{() => treatmentType = 'THERAPIE'}" class="relative {treatmentType.localeCompare('THERAPIE') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-72 w-44 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
            <div class="absolute bg-green-dark flex flex-col justify-center font-bold text-white text-center text-sm break-normal rounded-xl w-20 h-12 px-2 -top-6 right-3 z-10">Geen wachtlijst!</div>
            <div class="flex flex-row justify-center text-9xl my-4">🗨️</div>
            <div class="flex flex-row justify-center text-2xl font-bold">Psychotherapie</div>
        </div>

        <div on:click="{() => treatmentType = 'IQ-TEST'}" class="relative {treatmentType.localeCompare('IQ-TEST') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-72 w-44 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
            <div class="absolute bg-green-dark flex flex-col justify-center font-bold text-white text-center text-sm break-normal rounded-xl w-20 h-12 px-2 -top-6 right-3 z-10">Geen wachtlijst!</div>
            <div class="text-center text-9xl my-4">🧠</div>
            <div class="text-center text-2xl font-bold">IQ-Test</div>
        </div>

    </div>
</div>