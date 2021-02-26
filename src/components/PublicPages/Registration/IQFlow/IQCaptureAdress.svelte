<script>
    import IQAdress from "./IQAdress.svelte";
    import IQPracticeAdress from "./IQPracticeAdress.svelte";

    export let place;
</script>

{#if place.type.localeCompare('Thuisadres') == 0}
    <IQAdress bind:place title="Jouw adres" placeholder="Vul woonplaats in" label="Jouw woonplaats" />
{/if}

{#if place.type.localeCompare('Praktijkadres') == 0 || place.type.startsWith('Praktijk')}
    <IQPracticeAdress bind:place />
{/if}

{#if place.type.localeCompare('Schooladres') == 0}
    <IQAdress bind:place title="Schooladres" placeholder="Vul plaats school in" label="Schooladres" />
{/if}