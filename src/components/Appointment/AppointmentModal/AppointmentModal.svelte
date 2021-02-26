<script>
    import ModalHeader from '../../BasicUI/Modal/ModalHeader.svelte';
    import AppointmentInfoPanel from './AppointmentInfoPanel/AppointmentInfoPanel.svelte';
    import ChildInfoPanel from '../../Treatments/TreatmentModal/ChildInfoPanel/ChildInfoPanel.svelte';
    import TreatmentInfoPanel from '../../Treatments/TreatmentModal/TreatmentInfoPanel/TreatmentInfoPanel.svelte';
    import AppointmentModalFooter from './AppointmentModalFooter.svelte';
    import AppointmentCancelPanel from './AppointmentCancelPanel/AppointmentCancelPanel.svelte';

    import { Tabs, TabPanel } from '../../BasicUI/Tabs/tabs.js';
    import { getTreatment, updateAppointment } from '../../../mobielServices/treatmentService';
    import cloneDeep from 'lodash/cloneDeep';

    export let appointment;
    
    let treatment;
    let originalAppointment;
    let showLoadingAnimation = false;


    async function loadTreatment() {
      if(appointment)      
        treatment = await getTreatment(appointment.treatmentID);
    }

    function saveAppointmentToDetectChanges() {
      originalAppointment = cloneDeep(appointment);
    }

    async function saveAppointment()
    {
      showLoadingAnimation = true;
      updateAppointment(appointment);
      saveAppointmentToDetectChanges();
      showLoadingAnimation = false;
    }

    saveAppointmentToDetectChanges();
    loadTreatment();
</script>


{#if appointment && treatment}
  <Tabs class="flex h-full flex-col justify-between">

    <ModalHeader icon="date" text="Afspraak { appointment.prospect.firstName }" />

    <TabPanel>
      <AppointmentInfoPanel bind:appointment={appointment} treatmentActive={treatment.active} />
    </TabPanel>

    <TabPanel>
      <ChildInfoPanel { treatment } readOnly="{true}" />
    </TabPanel>

    <TabPanel>
      <TreatmentInfoPanel { treatment } readOnly="{true}" />
    </TabPanel>

    <TabPanel>
      <AppointmentCancelPanel {appointment} treatmentActive={treatment.active} />
    </TabPanel>

    <AppointmentModalFooter {showLoadingAnimation} { appointment} { originalAppointment } { saveAppointment } />
  </Tabs>

{:else}
            
  <p>Prestatie wordt geladen...</p>

{/if}