<script>
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";

    export let location;
</script>

<SectionTitle icon='round_pushpin' title="Plaats" />
<div class="bg-grey-lighter text-left px-4">
    <div class="my-3 min-h-8 flex flex-col justify-center">
        {#if location }
            <span class="block font-bold">{ location.type }</span>
            <span class="block">{ location.street } { location.houseNumber }</span>
            <span class="block">{ location.city }</span>
        {:else}
            Geen locatie gevonden
        {/if}
    </div>
</div>