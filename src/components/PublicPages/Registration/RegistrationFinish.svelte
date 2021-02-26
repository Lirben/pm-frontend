<script>
    import Information from "../../BasicUI/Information/Information.svelte";

    export let treatmentType;
</script>

<div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg min-h-screen">
    <div class="text-base md:text-xl text-left px-2 md:px-8">
        <h2 class="text-yellow text-center text-4xl font-bold mb-16 mt-6">Bedankt voor je vertrouwen!</h2>
        
        {#if treatmentType && treatmentType.localeCompare('THERAPIE') == 0 }

            <div class="text-base text-center my-8 md:mx-64">
                <div>Wij sturen jou een e-mail met een link naar onze intakevragenlijst ter voorbereiding op het intakegesprek.</div>
                <div class="font-bold">Controleer zeker je spamfolder indien je binnen het kwartier geen bevestigingsmail hebt ontvangen.</div>
            </div>

        {/if}

        {#if treatmentType && treatmentType.localeCompare('IQ-TEST') == 0}

            <div class="text-base text-center my-8 md:mx-64">
                <div class="block">
                    Wij contacteren jou zo spoedig mogelijk om een afspraak vast te leggen.
                    Indien u een IQ test in kader van logopedie koos, contacteren wij eerst jouw logopedist zodat wij de juiste IQ test voor jouw kind kunnen bepalen!
                </div>
                <div class="block">Daarnaast ontvang je een mail ter bevestiging van deze reservatie.</div>
                <div class="block font-bold">Controleer zeker je spamfolder indien je binnen het kwartier geen bevestigingsmail hebt ontvangen.</div>
            </div>

        {/if}
        <div class="my-8 flex flex-row justify-center">
            <Information message="Heb je nog bijkomende vragen?" />
        </div>
    </div>
</div>