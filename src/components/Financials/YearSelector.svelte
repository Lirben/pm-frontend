<script>
    export let year;

    function increase()
    {
        year++;
    }

    function decrease()
    {
        year--;
    }
</script>

<div class="flex flex-row justify-center mt-16">
    {#if year > 2017}
        <div on:click="{decrease}" class="bg-yellow rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8249; </div>
    {:else}
        <div class="bg-grey-light rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8249; </div>
    {/if}
    
    <div class="w-48 font-bold flex flex-col justify-center text-center"> { year } </div>
    
    <div on:click="{increase}" class="bg-yellow rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8250; </div>
</div>