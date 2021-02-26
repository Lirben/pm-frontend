<script>
    export let newProspect = false;
    export let message = false;
</script>


<div class="font-normal mt-4 text-xs">
    {#if newProspect}
        Hierbij geeft u Praktijk Mobiel toestemming om contact met u op te nemen in kader van de behandeling en opvolging van de geestelijke gezondheid voor het kind dat u aanmeldt en gaat u akkoord met onze <a class='text-blue' href="../disclaimer">Privacy policy</a>
    {/if}

    {#if message}
        Door dit bericht te versturen geeft u Praktijk Mobiel toestemming om contact met u op te nemen in kader van uw bericht en gaat u akkoord met onze <a class='text-blue' href="../disclaimer">Privacy policy</a>
    {/if}
</div>