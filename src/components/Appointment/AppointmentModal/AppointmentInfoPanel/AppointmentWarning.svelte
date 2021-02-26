<script>
    import ModalWarning from "../../../BasicUI/Modal/ModalWarning.svelte";

    export let treatmentActive;
    export let committed;
</script>

{#if !treatmentActive || committed }
<ModalWarning>
    {#if !treatmentActive}
        <span class="block">De behandeling is gearchiveerd en kan niet gewijzigd worden</span>
    {:else}
        <span class="block">De afspraak is reeds bevestigd voor factuur en kan niet gewijzigd worden</span>
    {/if}
</ModalWarning>
{/if}