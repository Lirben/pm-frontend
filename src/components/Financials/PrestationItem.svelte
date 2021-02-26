<script>
    import emoji from "node-emoji";
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import AppointmentModal from '../Appointment/AppointmentModal/AppointmentModal.svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    export let prestation;

    dayjs.locale(locale_nl);

    const { open } = getContext('simple-modal');

    const showPrestation = () => {
        open(
            AppointmentModal,
            {
                appointment: prestation
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
                    prestation = prestation;
                }
            }
        );
    };
</script>

<div class="grid grid-cols-12 mx-1 h-20 md:mx-32 border-b border-grey hover:bg-grey-lighter cursor-pointer"  on:click={showPrestation}>
    <div class="col-span-2 flex flex-col justify-center">
        { dayjs.unix(prestation.moment.startTime).format("D MMM") }
    </div>

    <div class="col-span-3 md:col-span-2 break-words flex flex-col justify-center">
        { prestation.prospect.firstName }
    </div>

    <div class="hidden md:col-span-3 md:flex flex-col justify-center">
        { prestation.conversation.name }
    </div>

    <div class="col-span-4 md:hidden flex flex-col justify-center">
        { prestation.conversation.code }
    </div>

    <div class="hidden md:col-span-2 md:flex flex-col justify-center">
        {prestation.paramedic.code}
    </div>

    <div class="col-span-2 flex flex-col justify-center">
        {#if prestation.appointmentPrice}
            € {prestation.appointmentPrice}
        {:else}
            € 0
        {/if}
    </div>

    <div class="col-span-1 flex flex-col justify-center">
        {#if prestation.committed}
            { emoji.get('heavy_check_mark') }
        {/if}
    </div>
</div>