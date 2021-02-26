<script>
    export let weekOffset;
    export let changeWeekOffset;
    export let showPast = false;

    let weekIndication = renderWeekIndication(weekOffset);

    function increaseOffset()
    {
        weekOffset++;
        weekIndication = renderWeekIndication(weekOffset);
        changeWeekOffset(weekOffset);
    }

    function decreaseOffset()
    {
        weekOffset--;
        weekIndication = renderWeekIndication(weekOffset);
        changeWeekOffset(weekOffset);
    }

    function renderWeekIndication(weekOffset)
    {
        if(weekOffset < -1)
            return weekOffset + " weken geleden";

        if(weekOffset == -1)
            return "Vorige week";

        if (weekOffset == 0)
            return "Deze week";

        if(weekOffset == 1)
            return "Volgende week";

        if(weekOffset > 1)
            return "Binnen " + weekOffset + " weken";
    }
</script>

<div class="flex flex-row justify-center">
    {#if weekOffset > 0 || showPast}
        <div on:click="{decreaseOffset}" class="bg-yellow rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8249; </div>
    {:else}
        <div class="bg-grey-light rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8249; </div>
    {/if}
    <div class="w-48 font-bold flex flex-col justify-center text-center"> { weekIndication } </div>
    <div on:click="{increaseOffset}" class="bg-yellow rounded-lg font-bold text-3xl text-center flex flex-col justify-center h-12 w-24 cursor-pointer"> &#8250; </div>
</div>