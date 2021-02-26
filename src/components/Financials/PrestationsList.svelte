<script>
    import { user } from '../../stores/authStore';
    import { getPrestationsPerMonth, getPrestationsPerMonthPerParamedic } from '../../mobielServices/financialService';
    import PrestationItem from './PrestationItem.svelte';
    import Modal from 'svelte-simple-modal';
    import PrestationsListHeader from './PrestationsListHeader.svelte';
    import CommitMonthButton from "./CommitMonthButton.svelte";
    import InvoiceMonthButton from "./InvoiceMonthButton.svelte";

    export let year;
    export let month;
    export let selectedParamedic;

    let allCommitted;
    let prestations;

    async function loadAppointments(month, year, paramedic)
    {
        let result;

        if($user && $user.level == 3 && (!paramedic || paramedic.code == ""))
            result = await getPrestationsPerMonth(month, year);

        if(paramedic && paramedic.code != "")
            result = await getPrestationsPerMonthPerParamedic(paramedic.code, month, year);
        
        if(result) {
            prestations = result.appointments;
            allCommitted = allPrestationsCommitted();
        }
    }

    function allPrestationsCommitted()
    {
        const isNotCommitted = (element) => !element.committed;

        if(prestations.findIndex(isNotCommitted))
            return true;

        return false;
    }

    function refresh()
    {
        loadAppointments(month, year, selectedParamedic);
    }

    $:loadAppointments(month, year, selectedParamedic);
</script>


<PrestationsListHeader {month} />

{#if prestations}

    {#each prestations as prestation}
        <Modal>
            <PrestationItem {prestation} />
        </Modal>
    {/each}

    {#if selectedParamedic && selectedParamedic.code != '' }
        {#if !allCommitted}
            <CommitMonthButton {month} {year} paramedic={selectedParamedic} committed={refresh} />
        {:else}
            {#if $user && $user.level == 3}
                <InvoiceMonthButton {month} {year} paramedic={selectedParamedic} />
            {/if}                       
        {/if}
    {/if}
    

{:else}
    <div>De prestaties worden geladen...</div>
{/if}


