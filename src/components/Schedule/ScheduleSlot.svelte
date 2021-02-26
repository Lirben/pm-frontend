<script>
    import emoji from "node-emoji";   
    import { deleteScheduleSlot } from './../../mobielServices/scheduleServices';

    export let scheduleSlot;
    export let refresh;

    let slotHeight = calculateSlotHeight(scheduleSlot.startTime, scheduleSlot.endTime);

    async function deleteSlot() 
    {
        await deleteScheduleSlot(scheduleSlot.id);
        refresh();
    }

    function calculateSlotHeight(startTime, endTime)
    {
        const startTimeInSec = (startTime.split(':')[0] * 3600) + startTime.split(':')[1] * 60;
        const endTimeInSec = (endTime.split(':')[0] * 3600) + endTime.split(':')[1] * 60;
        const diffInSec = endTimeInSec-startTimeInSec
        const nrOfHalfHours = diffInSec / 3600;
        const roundNrOfHalfHours = Math.round(nrOfHalfHours*2)/2;
        return Math.min(roundNrOfHalfHours * 16, 96);
    }
</script>

<div id="parent" class="bg-grey-light rounded-md md:mt-{scheduleSlot.distanceTop * 16} h-{slotHeight} flex flex-row justify-between">
    
    <div id="child1" class="flex flex-col justify-center flex-none w-8"></div>

    <div id="child2" class="flex flex-col justify-between text-center flex-grow py-4">
        <div>{scheduleSlot.startTime.slice(0,-3)}</div>
        <div>{scheduleSlot.endTime.slice(0,-3)}</div>
    </div>

    <div id="child3" class="flex flex-col justify-start flex-none w-8">
        <div on:click="{deleteSlot}" class="mr-2 mt-4 cursor-pointer">
            { emoji.get('wastebasket') }
        </div>
    </div>
</div>