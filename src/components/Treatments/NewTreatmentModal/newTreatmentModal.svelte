<script>
    import { Tabs, TabPanel } from '../../BasicUI/Tabs/tabs.js';
    import ChildInfoPanel from '../TreatmentModal/ChildInfoPanel/ChildInfoPanel.svelte';
    import TreatmentInfoPanel from '../TreatmentModal/TreatmentInfoPanel/TreatmentInfoPanel.svelte';
    import ModalHeader from '../../BasicUI/Modal/ModalHeader.svelte';
    import TreatmentModalFooter from '../TreatmentModal/TreatmentModalFooter.svelte';
    import { createTreatment, updateTreatment } from '../../../mobielServices/treatmentService';
    import cloneDeep from 'lodash/cloneDeep';
    
    let treatment = {
            "treatmentType" : "THERAPIE", 
            "prospect" : { "firstName" : '' , "name" : '', "email" : '', "telephone" : '', "birthday": '' }, 
            "places" : [{ "type" : "Thuisadres", "street" : '', "houseNumber" : '', "city" : '' }],
            "referrer": null, 
            "responsibleParamedic": { "code" : '' }, 
            "sharedParamedic": null,
            "active" : 1
        };

    let originalTreatment = cloneDeep(treatment);
    let valid = false;
    let treatmentCreated = false;
    let showLoadingAnimation = false;

    async function saveTreatment()
    {
        if(valid) {
            showLoadingAnimation = true;

            if(!treatmentCreated) {
                const result = await createTreatment(treatment);
                treatmentCreated = true;
            } else {
                await updateTreatment(treatment);
            }

            storeOriginalTreatmentToDetectChanges();

            showLoadingAnimation = false;
            return;
        }
    }

    function storeOriginalTreatmentToDetectChanges()
    {
        originalTreatment = cloneDeep(treatment);
    }

</script>


{#if treatment}
  <Tabs class="flex h-full flex-col justify-between">

    <ModalHeader icon="blond-haired-man" text="Nieuwe begeleiding maken" />

    <TabPanel>
      <ChildInfoPanel bind:valid bind:treatment={treatment} />      
    </TabPanel>

    <TabPanel>
      <TreatmentInfoPanel bind:treatment={treatment} />
    </TabPanel>

    <TreatmentModalFooter { valid } { treatment} { originalTreatment } { saveTreatment } {showLoadingAnimation} showChildInfoOnly="{true}" />
  </Tabs>

{:else}
            
  <p>Behandeling wordt geladen...</p>

{/if}