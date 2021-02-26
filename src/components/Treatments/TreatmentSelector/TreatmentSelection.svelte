<script>
    export let item;
</script>

{#if item.prospect}
    <div class="flex items-center px-1 py-2">
        <div class="text-base">{ item.prospect.firstName } { item.prospect.name.charAt(0) }</div>
    </div>
{/if}