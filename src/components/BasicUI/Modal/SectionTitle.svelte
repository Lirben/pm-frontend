<script>
    import emoji from "node-emoji";

    export let icon = null;
    export let title;
</script>

<h1 class="w-full font-bold text-lg border-yellow border-b-4 text-left px-2 mt-4">
    {#if icon}
        { emoji.get(icon) }
    {/if}
    { title }
</h1>