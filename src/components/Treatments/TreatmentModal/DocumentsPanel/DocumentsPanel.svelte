<script>
    import DocumentSection from './DocumentSection.svelte';
    import PaybackForms from './PaybackForms.svelte';
   
    export let treatment;    
</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">
    <DocumentSection title="Intakevragenlijsten" />
    <PaybackForms treatmentID="{treatment.treatmentID}" bind:paybackForms={treatment.paybackForms} />    
</div>