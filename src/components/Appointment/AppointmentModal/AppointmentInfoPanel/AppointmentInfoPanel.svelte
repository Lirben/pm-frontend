<script>
    import AppointmentTiming from "./AppointmentTiming.svelte";
    import AppointmentConversation from "./AppointmentConversation.svelte";
    import AppointmentLocation from "./AppointmentLocation.svelte";
    import AppointmentPrice from "./AppointmentPrice.svelte";
    import AppointmentWarning from "./AppointmentWarning.svelte";

    export let appointment;
    export let treatmentActive;
</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">

    <AppointmentWarning { treatmentActive } committed="{appointment.committed}" />

    <AppointmentTiming moment="{appointment.moment}" />

    <AppointmentConversation conversation="{appointment.conversation}" />

    <AppointmentLocation location="{appointment.place}" />

    <AppointmentPrice bind:price="{appointment.appointmentPrice}" treatmentActive="{treatmentActive}" committed="{appointment.committed}" />
</div>