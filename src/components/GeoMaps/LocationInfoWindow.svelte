<script>
    export let text;
</script>

{#if text}
    <div class="bg-white bg-opacity-80 fixed w-full h-20 text-center bottom-0 p-8 m-0 z-20">
        <span class="font-bold">{ text }!</span> Klik voor meer informatie.
    </div>
{/if}