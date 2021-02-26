<script>
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';
    import TreatmentTypeSelector from '../../TreatmentTypeSelector/TreatmentTypeSelector.svelte';

    export let treatmentType;
    export let readOnly = false;
</script>

<SectionTitle icon='left_speech_bubble' title="Type begeleiding" />

<div class="bg-grey-lighter text-left px-2">          
  <div class="my-1">
      <TreatmentTypeSelector label="Type begeleiding" {readOnly} class="inline-block bg-grey-lighter w-36" bind:selectedTreatmentType={treatmentType} />
  </div>
</div>