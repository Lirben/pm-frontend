<script>
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';
    import AppointmentInfo from './AppointmentInfo.svelte';

    export let appointments;
</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">

    <SectionTitle icon='date' title="Afspraken" />

    {#if appointments && appointments.length > 0}
        {#each appointments as appointment}
            <AppointmentInfo { appointment } />
        {/each}
    {:else}
        <span>Geen afspraken gevonden</span>
    {/if}
    
</div>