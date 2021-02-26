<script>
    import { getActiveTreatments, getArchivedTreatments } from '../../mobielServices/treatmentService';
import TreatmentCount from './TreatmentCount.svelte';
    import TreatmentHeader from "./TreatmentHeader.svelte";
    import TreatmentList from "./TreatmentList.svelte";

    export let treatments;

    let filteredTreatments;
    let filterOnParamedic = { "code": '', "firstName": '' };
    let filterOnType = '';
    let filterOnStatus = '';
    let filterOnArchive = false;

    async function loadArchivedTreatments()
    {
        treatments = await getArchivedTreatments();
    }

    async function loadTreatments()
    {
        treatments = await getActiveTreatments();
    }

    function refresh()
    {
        loadTreatments();
    }

    $: {
        if(!filterOnArchive && filterOnStatus !== '' &&  filterOnStatus.label === 'Archief')
        {
            loadArchivedTreatments();
            filterOnArchive = true;
        }

        if(filterOnArchive && (filterOnStatus === '' || filterOnStatus.label !== 'Archief'))
        {
            loadTreatments()
            filterOnArchive = false;
        }

        if(treatments)
        {
            filteredTreatments = treatments.filter(item => (filterOnType != '' ? item.treatmentType === filterOnType : true));
            filteredTreatments = filteredTreatments.filter(item => ((filterOnParamedic.code != '' && typeof filterOnParamedic.code !== 'undefined') ? (item.responsibleParamedic && item.responsibleParamedic.code === filterOnParamedic.code) : true));
            filteredTreatments = filteredTreatments.filter(item => (filterOnStatus != '' ? item.status.label === filterOnStatus.label : true));
        }
    }
</script>


<div class="px-0 mx-0 bg-white rounded-t-lg h-16">
    <TreatmentHeader bind:filterOnParamedic bind:filterOnType bind:filterOnStatus />
</div>

{#await filteredTreatments}
    <p>Behandelingen worden geladen...</p>

{:then filteredTreatments }
    <div class="bg-white">
        <TreatmentList treatments = { filteredTreatments } { refresh } />  
    </div>
{/await}