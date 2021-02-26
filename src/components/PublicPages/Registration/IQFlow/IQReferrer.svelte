<script>
    export let referrer;

    let selectedReferrer;

    $: {
        if(selectedReferrer && referrer)
            referrer.name = selectedReferrer;
    }
</script>

<div class="flex flex-col justify-start">
    <h3 class="text-yellow text-center text-2xl font-bold mt-12 mb-6">Gegevens logopedist</h3>

    <div class="flex flex-col justify-start py-2">
        <div class="text-center text-base px-2">
            Wij contacteren jouw logopedist zodat wij de IQ afname kunnen afstemmen op jouw kind. 
            <span class="font-bold">Geef daarom steeds de voornaam en achternaam van jouw logopedist op.</span> 
            Zo kunnen wij jouw aanvraag vlot afhandelen!
        </div>
    </div>
    
    <div class="flex flex-row justify-center py-2">   
        <div class="flex flex-col pt-4 justify-center w-full md:w-3/6 lg:w-2/6">

            <label for="referrerName" class="px-8 text-center flex font-bold flex-row justify-center">Naam + voornaam logopedist of Praktijknaam logopedist</label>
            <div class="text-left flex flex-row justify-start space-x-2 mb-6">
                <div class="absolute mt-4 ml-4 text-grey text-base">🧒</div>
                <input  required type="text" bind:value="{selectedReferrer}" id="referrerName" placeholder="Naam + voornaam logopedist" class="bg-white pl-8 border-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
            </div>
        </div>
    </div> 
</div>