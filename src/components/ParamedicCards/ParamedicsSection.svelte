<script>
    import ParamedicCard from "./ParamedicCard.svelte";
    import TeamInfo from "./TeamInfo.svelte";

    export let locationName = '';
    export let paramedics;
</script>

<div class="grid grid-cols-1 lg:grid-cols-4">

    <div class="block lg:hidden">
        <TeamInfo { locationName }/>
    </div>

    {#if paramedics && paramedics.length == 0 }
        <div class="hidden lg:block"></div>
        <div class="hidden lg:block"></div>
        <div class="hidden lg:block"></div>
    {/if}

    {#if paramedics && paramedics.length == 1 }
        <div class="hidden lg:block"></div>
        <div class="hidden lg:block"></div>
    {/if}

    {#if paramedics && paramedics.length == 2 }
        <div class="hidden lg:block"></div>
    {/if}

    {#if paramedics}
        {#each paramedics as paramedic, i }
            <ParamedicCard {paramedic} />

            {#if i == 2 }
                <div class="hidden lg:block">
                    <TeamInfo { locationName }/>
                </div>
            {/if}

        {/each}
    {/if}

    {#if paramedics && paramedics.length < 3}
        <div class="hidden lg:block">
            <TeamInfo { locationName }/>
        </div>
    {/if}
</div>