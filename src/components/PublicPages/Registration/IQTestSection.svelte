<script>
    import * as animateScroll from "svelte-scrollto";
    import { createTreatmentWithPromise, updateTreatmentPlaces, updateTreatmentDetails } from '../../../mobielServices/treatmentService';
    import IQProspect from "./IQFlow/IQProspect.svelte";
    import IQProspectInfo from "./IQFlow/IQProspectInfo.svelte";
    import IQLocation from './IQFlow/IQLocation.svelte';
    import IQInformation from './IQFlow/IQInformation.svelte';
    import IQType from './IQFlow/IQType.svelte';

    export let finishIQRegistration;

    let treatment = {
            "treatmentType" : "IQ-TEST", 
            "prospect" : { "firstName" : '' , "name" : '', "email" : '', "telephone" : '', "birthday": '' }, 
            "places" : [],
            "referrer": {"name": '', "telephone": ''},
            "paybackForms": [],
            "mutuality": null,
            "treatmentNotes": null,
            "responsibleParamedic": { "code" : '' }, 
            "sharedParamedic": null,
            "active" : 1
        };

    let IQInformationNotes;

    let IQProspectInfoSection = false;
    let IQLocationSection = false;
    let IQTypeSection = false;
    let IQInformationSection = false;
    let showError = false;

    function showProspectInfoSection() {
        callCreateTreatment();

        if(!showError) {
            IQProspectInfoSection = true;
            animateScroll.scrollTo({element: '#IQProspectInfoSection', offset: -100});
        }
    }

    function showIQLocationSectionSection() {
        callUpdateTreatmentDetails();

        if(!showError) {
            IQLocationSection = true;
            animateScroll.scrollTo({element: '#IQLocationSection', offset: -100});
        }
    }

    function showIQTypeSection() {
        callUpdatePlaces();

        if(!showError) {
            IQTypeSection = true;
            animateScroll.scrollTo({element: '#IQTypeSection', offset: -100});
        }
    }

    function showIQInformationSection() {
        callUpdateTreatmentDetails();

        if(!showError) {
            IQInformationSection = true;
            animateScroll.scrollTo({element: '#IQInformation', offset: -100});
        }
    }

    function saveAndFinishIQFlow()
    {
        treatment.treatmentNotes += 'Extra opmerkingen: ' + IQInformationNotes;

        if(!showError) {
            callUpdateTreatmentDetails();
            finishIQRegistration();
        }
    }

    function callCreateTreatment()
    {
        console.log(treatment);
        createTreatmentWithPromise(treatment).then(response => {}, error => {
            showError = true;
        });
    }

    function callUpdatePlaces()
    {
        updateTreatmentPlaces(treatment).then(response => {}, error => {
            showError = true;
        });
    }

    function callUpdateTreatmentDetails()
    {
        updateTreatmentDetails(treatment).then(response => {}, error => {
            showError = true;
        });
    }
</script>

<IQProspect bind:prospect="{treatment.prospect}" proceedToNextStep="{showProspectInfoSection}" {showError} />

<div id="IQProspectInfoSection">
    {#if IQProspectInfoSection}
        <IQProspectInfo bind:prospect="{treatment.prospect}" bind:mutuality="{treatment.mutuality}" proceedToNextStep="{showIQLocationSectionSection}" {showError} />
    {/if}
</div>

<div id="IQLocationSection">
    {#if IQLocationSection}
        <IQLocation bind:place="{treatment.places[0]}" proceedToNextStep="{showIQTypeSection}" {showError} />
    {/if}
</div>

<div id="IQTypeSection">
    {#if IQTypeSection}
        <IQType bind:IQNotes="{treatment.treatmentNotes}" bind:referrer="{treatment.referrer}" proceedToNextStep="{showIQInformationSection}" {showError} />
    {/if}
</div>

<div id="IQInformation">
    {#if IQInformationSection}
        <IQInformation bind:IQInformationNotes proceedToNextStep="{saveAndFinishIQFlow}" {showError} />
    {/if}
</div>