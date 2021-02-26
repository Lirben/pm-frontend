<script>
    import NewAppointmentModal from './../Appointment/NewAppointmentModal/NewAppointmentModal.svelte';
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    export let midnight;
    export let paramedic = null;
    export let refresh;

    dayjs.locale(locale_nl);

    const { open } = getContext('simple-modal');

    const showNewAppointmentModal = () => {
        open(
            NewAppointmentModal,
            {
                askTime: true,
                date: midnight,
                paramedic: paramedic
            },
            {
                styleWindow: {
                    height: '90vh',
                },
                styleContent: {
                    height: '90vh',
                    padding: '0'
                },
                transitionWindow: fly,
                transitionWindowProps: {
                    y: 100,
                    duration: 1000
                },
            },
            {
                onClose: () => {
                    refresh();
                }
            }
        );
};
</script>

<div class="font-bold mt-8 mb-4 md:mb-8 flex flex-row justify-between">
    <div class="w-8 md:w-0"></div>
    <div>{ (dayjs.unix(midnight)).format("dddd[,] D MMM") }</div>

    {#if paramedic}
        <div on:click="{showNewAppointmentModal}" class="-mt-2 w-8 h-8 bg-yellow text-white text-3xl rounded-full flex flex-col justify-center text-center cursor-pointer">
            +
        </div>
    {:else}
        <div class="w-8"></div>
    {/if}
</div>