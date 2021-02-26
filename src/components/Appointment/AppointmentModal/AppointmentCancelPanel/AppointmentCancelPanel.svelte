<script>
    import AppointmentWarning from "../AppointmentInfoPanel/AppointmentWarning.svelte";
    import {cancelAppointment} from '../../../../mobielServices/treatmentService';
    import SendMailToggle from "../../../BasicUI/SendMailToggle.svelte";
    import { getContext } from 'svelte';
    import ModalButton from "../../../BasicUI/Modal/ModalButton.svelte";

    export let treatmentActive;
    export let appointment;
    
    let sendMail = true;
    let showLoadingAnimation = false;

    const { close } = getContext('simple-modal');
    
    async function cancelThisAppointment() {
        showLoadingAnimation = true;
        await cancelAppointment(appointment, sendMail);
        showLoadingAnimation = false;
        close();
    }
</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">
    <AppointmentWarning { treatmentActive } committed="{appointment.committed}" />

    {#if treatmentActive && !appointment.committed }
        <SendMailToggle email="{appointment.prospect.email}" bind:checked="{sendMail}" />
        
        <div class="bg-grey-lighter text-left px-2">          
            <div class="my-1">
                <ModalButton onClick="{cancelThisAppointment}" icon="warning" text="Annuleer afspraak" { showLoadingAnimation } class="bg-red text-white rounded-lg" />
            </div>
        </div>
    {/if}
</div>