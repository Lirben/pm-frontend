<script>
    import emoji from "node-emoji";

    export let text;
    export let icon = null;
    export let textSize = '2xl';
</script>

<div class="flex flex-row bg-grey-lighter rounded-t-lg h-16 m-0">
    {#if icon}
        <div class="flex flex-none flex-col justify-center text-center w-16 h-16 text-2xl">
            { emoji.get(icon) }
        </div>
    {/if}

    <div class="flex flex-col justify-center text-{textSize} font-bold text-left">  
        { text }  
    </div>
</div>