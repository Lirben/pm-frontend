<script>
    import Textfield from "../../../BasicUI/Inputfields/Textfield.svelte";
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";

    export let treatmentActive;
    export let committed;
    export let price;
</script>

<SectionTitle icon='moneybag' title="Prijs" />
<div class="bg-grey-lighter text-left h-12 px-4 flex flex-row justify-start">
    {#if treatmentActive && !committed}       
        <div class="flex flex-col justify-center">€</div> <Textfield bind:value="{price}" class="bg-grey-lighter rounded-lg p-2 w-24 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
    {:else}
        <div class="flex flex-col justify-center">
            € {price}
        </div>
    {/if}
</div>