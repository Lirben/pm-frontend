<script>
    import emoji from "node-emoji";
    import {addScheduleSlot} from '../../mobielServices/scheduleServices';
    import { getContext } from 'svelte';

    export let dayNumber;
    export let startTime;
    export let endTime;

    const { close } = getContext('simple-modal');

    async function createScheduleSlot()
    {
        await addScheduleSlot(dayNumber, startTime, endTime);
        close();
    }
</script>

<div class="w-auto rounded-b-lg p-2 h-22 bg-green text-2xl font-bold" on:click="{ createScheduleSlot }">
    { emoji.get('floppy_disk') }Bewaren
</div>

