<script>
    import emoji from "node-emoji";
    import Spinner from "../../BasicUI/Spinner.svelte";

    export let callback;
    let animate;

    function save()
    {
        animate = true;
        callback();
    }
</script>

<div class="w-auto rounded-b-lg p-2 h-22 bg-green text-2xl font-bold" on:click="{ callback }">
    {#if animate}
        <Spinner />
    {/if}
    { emoji.get('floppy_disk') }Afspraak maken
</div>