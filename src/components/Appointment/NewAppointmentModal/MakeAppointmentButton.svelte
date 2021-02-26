<script>
    import {makeAppointment} from '../../../mobielServices/treatmentService';
    import { getContext } from 'svelte';
    import ModalButton from '../../BasicUI/Modal/ModalButton.svelte';
    const { close } = getContext('simple-modal');

    export let startTime;
    export let treatment;
    export let conversation;
    export let place;
    export let paramedic;
    export let sendMail;

    let showButton;
    let showLoadingAnimation = false;

    async function saveAppointment(){
        showLoadingAnimation = true;
        await makeAppointment(startTime, treatment, conversation, paramedic, place, sendMail);
        showLoadingAnimation = false;
        close();
    }

    $: {
        if((treatment && treatment.treatmentID != '') && ((conversation && conversation.code != '')) && (place && place.type !='') && (paramedic && paramedic.code != ''))
            showButton = true;
        else
            showButton = false;
    }
</script>

{#if showButton}
    <ModalButton onClick="{saveAppointment}" icon="floppy_disk" text="Maak afspraak" { showLoadingAnimation } class="bg-green rounded-b-lg" />
{/if}