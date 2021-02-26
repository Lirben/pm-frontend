<script>
    import TimePicker from "../BasicUI/DatetimePicker/TimePicker.svelte";
    import ModalHeader from '../BasicUI/Modal/ModalHeader.svelte';
    import SaveScheduleButton from "./SaveScheduleButton.svelte";

    export let dayName;
    export let dayNumber;

    let startTime;
    let endTime;
    let error = false;
    
    $: {
        error = false;

        if(endTime && startTime && endTime < startTime)
            error = true;
    }
</script>


<div class="flex h-full flex-col justify-between">
    <ModalHeader text="Beschikbaarheid op {dayName}" />

    <div class="h-full flex flex-col justify-start p-2">
        <div class="flex flex-row justify-start my-1 bg-grey-lighter">
            <TimePicker label="Van" bind:startTime="{startTime}" />
        </div>
        <div class="flex flex-row justify-start my-1 bg-grey-lighter">
            <TimePicker label="Tot" bind:startTime="{endTime}" />
        </div>

        {#if error}
            <div class="bg-grey-lighter">
                <span class="font-bold text-red">Het einduur kan niet vroeger zijn dan het beginuur</span>
            </div>
        {/if}
    </div>

    {#if startTime && endTime && !error}
        <SaveScheduleButton {dayNumber} {startTime} {endTime} />
    {/if}
</div>