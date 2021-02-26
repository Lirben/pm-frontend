<script>
    import PrivacyDisclaimer from "../Disclaimers/PrivacyDisclaimer.svelte";
    import { getContext } from 'svelte';
    import Spinner from "../Spinner.svelte";

    export let messageModal = false;
    export let newProspectModal = false;

    let animate = false;

    const { close } = getContext('simple-modal');

    function playAnimation() {
        animate = true;
    }

</script>

<div class="mt-4 w-auto rounded-b-lg border-t border-grey-light p-2 h-22 text-2xl font-bold">
    <div class="flex flex-row justify-end space-x-2">
        <button type="submit" class="bg-yellow font-bold rounded-lg text-base p-2 flex flex-row justify-center" on:click="{playAnimation}">
            {#if animate}
                <Spinner />
            {/if}
            {#if newProspectModal}  
                Maak afspraak
            {:else}
                Verstuur bericht
            {/if}
        </button>
        <button type="reset" class="rounded-lg text-base border-grey-light border p-2" on:click="{close}">Sluiten</button>
    </div>

    <div class="text-right">
        <PrivacyDisclaimer newProspect="{newProspectModal}" message="{messageModal}" />
    </div>
</div>

