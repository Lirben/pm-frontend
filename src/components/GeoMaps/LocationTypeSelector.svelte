<script>
    export let locationType;
</script>

<div class="flex flex-col justify-start">
    <div class="flex flex-row justify-center space-x-2 md:space-x-4">

        <div on:click="{() => locationType = 'Thuisadres'}" class="relative {locationType.localeCompare('Thuisadres') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-56 w-2/6 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
            <div class="flex flex-row justify-center text-6xl md:text-7xl lg:text-9xl my-4">🏡</div>
            <div class="flex flex-row justify-center text-lg md:text-2xl font-bold">Aan huis</div>
        </div>

        <div on:click="{() => locationType = 'Praktijkadres'}" class="relative {locationType.startsWith('Praktijk') ? 'bg-yellow' : 'bg-grey-light'} h-56 w-2/6 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
            <div class="text-center text-6xl md:text-7xl lg:text-9xl my-4">🏢</div>
            <div class="text-center text-lg md:text-2xl font-bold px-1">In onze praktijkruimte</div>
        </div>

        <div on:click="{() => locationType = 'Schooladres'}" class="relative {locationType.localeCompare('Schooladres') == 0 ? 'bg-yellow' : 'bg-grey-light'} h-56 w-2/6 md:h-72 md:w-72 rounded-lg flex flex-col justify-center cursor-pointer hover:bg-yellow-dark">
            <div class="text-center text-6xl md:text-7xl lg:text-9xl my-4">🏫</div>
            <div class="text-center text-lg md:text-2xl font-bold">Op school</div>
        </div>

    </div>
</div>