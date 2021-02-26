<script>
    import DocumentSection from './DocumentSection.svelte';
    import { getPaybackForm, createPaybackForms } from '../../../../mobielServices/documentService';
    import { saveAs } from 'file-saver';
    import ModalButton from '../../../BasicUI/Modal/ModalButton.svelte';

    export let treatmentID;
    export let paybackForms;

    let showLoadingAnimation = false;

    async function downloadPaybackForm(treatmentID, fileName)
    {
        const response = await getPaybackForm(treatmentID, fileName);
        saveAs(response, fileName + '.pdf')
    }

    async function generatePaybackForms()
    {   
        showLoadingAnimation = true;
        const response = await createPaybackForms(treatmentID);
        paybackForms = response;
        showLoadingAnimation = false;
    }
</script>

<DocumentSection title="Terugbetalingsformulieren" downloadFile="{downloadPaybackForm}" treatmentID="{treatmentID}" bind:documents="{ paybackForms }" />

<ModalButton onClick="{generatePaybackForms}" icon="factory" text="Formulieren genereren" { showLoadingAnimation } class="bg-grey-lighter m-2 border-2 border-grey rounded-lg" />