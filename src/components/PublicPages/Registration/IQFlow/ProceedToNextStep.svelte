<script>
    export let buttonText = "Volgende stap";
    export let showError
</script>

{#if showError}
    <div class="mb-4 flex flex-row justify-center text-center text-lg font-bold text-red">
        ⚠️ Er heeft zich een fout voorgedaan, je neemt best contact met ons op!
    </div>
{:else}
    <div class="mb-4 flex flex-row justify-center text-base">
        <button type="submit" class="bg-yellow text-xl font-bold p-2 rounded-lg flex flex-row justify-center focus:outline-none">
            { buttonText }
        </button>
    </div>
{/if}