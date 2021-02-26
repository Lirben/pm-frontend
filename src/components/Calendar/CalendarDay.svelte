<script>
    import CalendarDayHeader from './CalendarDayHeader.svelte';
    import AppointmentSlot from './AppointmentSlot.svelte';
    import BlockedSlot from './BlockedSlot.svelte';
    import CalendarSlot from './CalendarSlot.svelte';
    import Modal from 'svelte-simple-modal';

    export let location;
    export let midnight;
    export let slots;
    export let paramedic;
    export let refresh;
    export let showParamedics;
    export let appointmentBooked;
</script>

<div class="mt-4 md:mb-16 md:mx-2 text-center">
    <Modal>
        <CalendarDayHeader {paramedic} {midnight} {refresh} />
    </Modal>

    {#each slots as slot}

        {#if slot.type == "TimeSlot"}
            <Modal>
                <CalendarSlot calendarSlot="{slot}" {paramedic} {refresh} {location} {showParamedics} {appointmentBooked} />
            </Modal>
        {/if}

        {#if slot.type == "Appointment"}
            <Modal>
                <AppointmentSlot appointment="{slot}" {refresh} />
            </Modal>
        {/if}

        {#if slot.type == "CalendarItem"}
            <BlockedSlot calendarSlot="{slot}" {refresh} />
        {/if}

    {/each}
</div>