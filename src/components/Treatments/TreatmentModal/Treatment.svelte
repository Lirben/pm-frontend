<script>

  import { Tabs, TabPanel } from '../../BasicUI/Tabs/tabs.js';
  import ChildInfoPanel from './ChildInfoPanel/ChildInfoPanel.svelte';
  import TreatmentInfoPanel from './TreatmentInfoPanel/TreatmentInfoPanel.svelte';
  import DocumentsPanel from './DocumentsPanel/DocumentsPanel.svelte';
  import AppointmentPanel from './AppointmentsPanel/AppointmentsPanel.svelte';
  import ModalHeader from '../../BasicUI/Modal/ModalHeader.svelte';
  import TreatmentModalFooter from './TreatmentModalFooter.svelte';
  import { getTreatment, updateTreatment } from '../../../mobielServices/treatmentService';
  import cloneDeep from 'lodash/cloneDeep';

  export let treatmentID;
  
  let treatment;
  let originalTreatment;
  let valid = true;
  let showLoadingAnimation = false;

  async function loadTreatment() {
    try{
        if(treatmentID)
        {
          treatment = await getTreatment(treatmentID);
          storeOriginalTreatmentToDetectChanges();       
        }
    } catch{}
  }

  async function saveTreatment()
  {
    if(valid) {
      showLoadingAnimation = true;
      await updateTreatment(treatment);
      storeOriginalTreatmentToDetectChanges();
      showLoadingAnimation = false;
      return;
    }
  }

  function storeOriginalTreatmentToDetectChanges()
  {
    originalTreatment = cloneDeep(treatment);
  }

  loadTreatment();
</script> 

{#if treatment}
  <Tabs class="flex h-full flex-col justify-between">

    <ModalHeader icon="blond-haired-man" text="{ treatment.prospect.firstName } { treatment.prospect.name }" />

    <TabPanel>
      <ChildInfoPanel bind:valid bind:treatment={treatment} />      
    </TabPanel>

    <TabPanel>
      <TreatmentInfoPanel bind:treatment={treatment} />
    </TabPanel>

    <TabPanel>
      <DocumentsPanel bind:treatment={treatment} />
    </TabPanel>

    <TabPanel>
      <AppointmentPanel appointments="{ treatment.appointments }" />
    </TabPanel>

    <TreatmentModalFooter { valid } { treatment} { originalTreatment } { saveTreatment } {showLoadingAnimation} />
  </Tabs>

{:else}
            
  <p>Behandeling wordt geladen...</p>

{/if}