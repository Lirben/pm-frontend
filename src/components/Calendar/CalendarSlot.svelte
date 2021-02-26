<script>
    import emoji from "node-emoji";
    import NewAppointmentModal from './../Appointment/NewAppointmentModal/NewAppointmentModal.svelte';
    import newTreatmentWithAppointmentModal from "../Treatments/NewTreatmentModal/newTreatmentWithAppointmentModal.svelte";
    import ParamedicPicture from "../ParamedicCards/ParamedicPicture.svelte";
    import { blockSlot } from './../../mobielServices/calendarServices';
    import Moment from './Moment.svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    export let calendarSlot;
    export let paramedic = null;
    export let refresh;
    export let location;
    export let showParamedics;
    export let appointmentBooked;

    const { open } = getContext('simple-modal');
    const onAppointmentBooked = () => {
        appointmentBooked();
        refresh();
	}

    const showNewAppointmentModal = () => {
        open(
            NewAppointmentModal,
            {
                askTime: false,
                startTime: calendarSlot.startTime,
                endTime: calendarSlot.endTime,
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
	
    const showNewTreatmentWithAppointmentModal = () => {
        open(
            newTreatmentWithAppointmentModal,
            {
                moment: {
                    startTime: calendarSlot.startTime, 
                    endTime: calendarSlot.endTime
                },
                paramedic: calendarSlot.paramedic,
                location: location,
                onAppointmentBooked
            },
            {
                styleWindow: {
                    height: '95vh',
                    padding: '0',
                    margin: '0'
                },
                styleContent: {
                    height: '95vh',
                    'max-height': '100%',
                    padding: '0'
                },
                transitionWindow: fly,
                transitionWindowProps: {
                    y: 100,
                    duration: 1000
                },
            }
        );
    };

    async function callBlockAppointment() 
    {
        await blockSlot(calendarSlot.startTime, calendarSlot.endTime, paramedic.code);
        refresh();
    }
</script>

<style>
    #parent:hover > #child3 {
        background-color:#cdcdcd;
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }
    
    #parent:hover > #child3:hover{
        border-width: 2px;
    }
</style>


{#if paramedic}
    <div id="parent" class="bg-grey-light rounded-md my-2 h-8 flex flex-row justify-between cursor-pointer hover:bg-grey-lighter">
        <div id="child1" on:click="{showNewAppointmentModal}" class="flex flex-col justify-center flex-none w-6"></div>

        <div id="child2" on:click="{showNewAppointmentModal}" class="flex flex-col justify-center flex-grow">
            <Moment startTime="{calendarSlot.startTime}" endTime="{calendarSlot.endTime}" />
        </div>

        <div id="child3" on:click="{callBlockAppointment}" class="flex flex-col justify-center flex-none w-6 opacity-4 hover:opacity-1 hover:bg-grey-lighter hover:border-yellow">
            { emoji.get('heavy_multiplication_x') }
        </div>
    </div>
{:else}
    <div id="parent" class="bg-grey-light rounded-md my-2 h-16 flex flex-row justify-between cursor-pointer hover:bg-yellow">
        <div id="child4" on:click="{showNewTreatmentWithAppointmentModal}" class="flex flex-row justify-start flex-grow">
            {#if showParamedics}
                <div class="flex flex-col justify-center">
                    <ParamedicPicture src="{calendarSlot.paramedic}" alt="foto" size="10" borderSize="2" />
                </div>
            {/if}
            <div class="flex flex-col justify-center text-center flex-grow">
                <Moment startTime="{calendarSlot.startTime}" endTime="{calendarSlot.endTime}" />
            </div>
        </div>
    </div>
{/if}