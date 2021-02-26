<script>
    import HoursPicker from './HoursPicker.svelte';
    import MinutesPicker from './MinutesPicker.svelte';

    export let date = -3600;
    export let startTime = null;
    export let label = null;

    let hour = null;
    let min = null;
    
    $: {
        if(!(hour===null) && !(min===null))        
            startTime = date + (hour * 3600) + (min * 60);
    }
</script>

<div class="flex flex-row justify-start">
    {#if label}
        <div class="font-bold mr-1 flex flex-col justify-center">
            {label}
        </div>
    {/if}
    <div class="mr-1 w-20">
        <HoursPicker bind:hour="{hour}" />
    </div>
    <div class="w-20">
        <MinutesPicker bind:min="{min}" />
    </div>
</div>

