<script>
    import emoji from "node-emoji";
    import ConversationCode from '../Conversations/ConversationCode.svelte';
    import AppointmentModal from "../Appointment/AppointmentModal/AppointmentModal.svelte";
    import Moment from './Moment.svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

    export let appointment;
    export let refresh;

    const { open } = getContext('simple-modal');

    const showAppointmentModal = () => {
        open(
            AppointmentModal,
            {
                appointment: appointment
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


    <div class="bg-yellow w-auto rounded-md my-2 h-24 flex flex-col justify-center cursor-pointer" on:click="{showAppointmentModal}">
        <div class="flex flex-row justify-between">
            <div class="flex flex-col justify-center w-10 mx-4 md:w-9 md:mr-0 md:ml-1">
                <ConversationCode code="{appointment.conversation.code}" />
            </div>
            <div class="flex flex-col justify-center text-center">
                <div class="font-bold my-1">
                    { emoji.get('person_with_blond_hair') } 
                    { appointment.prospect.firstName } 
                    { appointment.prospect.name }
                </div>

                <div class="my-1">
                    { emoji.get('round_pushpin') }

                    {#if appointment.place.type.startsWith('Praktijk')}
                        { appointment.place.type }
                    {:else}
                        { appointment.place.city }
                    {/if}
                </div>

                <div class="my-1">
                    { emoji.get('clock10') } 
                    <Moment startTime="{appointment.moment.startTime}" endTime="{appointment.moment.endTime}" />
                </div>
            </div>
            <div class="w-10 mx-4 md:w-0 md:mr-1">  
            </div>
        </div>
    </div>
