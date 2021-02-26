<script>
    import Modal from 'svelte-simple-modal';
    import ScheduleDayHeader from './ScheduleDayHeader.svelte';
    import ScheduleSlot from './ScheduleSlot.svelte';

    export let dayNumber;
    export let slots;
    export let refresh;
</script>

<div class="mt-4 md:mb-16 md:mx-2">
    
    <Modal>
        <ScheduleDayHeader {dayNumber} refresh="{refresh}" />
    </Modal>
    
    {#each slots as slot}

        {#if slot.type == "TimeSlot"}
            <Modal>
                <ScheduleSlot scheduleSlot="{slot}" refresh="{refresh}" />
            </Modal>
        {/if}

    {/each}
</div>