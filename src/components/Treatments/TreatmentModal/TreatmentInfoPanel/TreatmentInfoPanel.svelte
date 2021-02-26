<script>
    import ArchiveTreatmentButton from "./ArchiveTreatmentButton.svelte";
    import TreatmentNotes from "./TreatmentNotes.svelte";
    import TreatmentParamedicSelect from "./TreatmentParamedicSelect.svelte";
    import TreatmentReferrer from "./TreatmentReferrer.svelte";
    import TreatmentType from "./TreatmentType.svelte";

    export let treatment;
    export let readOnly = false;
</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">
    <TreatmentType bind:treatmentType={treatment.treatmentType} {readOnly} />

    <TreatmentNotes bind:treatmentNotes={treatment.treatmentNotes} {readOnly} />

    {#if treatment.treatmentType.localeCompare('IQ-TEST') == 0}
        <TreatmentReferrer {readOnly} bind:referrer={treatment.referrer} />
    {/if}

    <TreatmentParamedicSelect {readOnly} icon="woman-raising-hand" title="Toegewezen aan" bind:selectedParamedic={treatment.responsibleParamedic} />

    {#if treatment.treatmentType.localeCompare('THERAPIE') == 0}
        <TreatmentParamedicSelect {readOnly} icon="woman-bowing" title="Gedeeld met" bind:selectedParamedic={treatment.sharedParamedic} />
    {/if}

    {#if !readOnly}
        <ArchiveTreatmentButton bind:isTreatmentActive={treatment.active} />
    {/if}
</div>