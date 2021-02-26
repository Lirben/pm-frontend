<script>
    import Textfield from '../../../BasicUI/Inputfields/Textfield.svelte';
    import BirthdayPicker from '../../../BasicUI/DatetimePicker/BirthdayPicker.svelte';
    import MutualitySelector from '../../../Mutuality/MutualitySelector.svelte';

    export let treatment;
    export let readOnly = false;
    export let valid;
</script>

<div class="bg-grey-lighter border-l-4 border-yellow text-left my-2 px-2">
    <div class="my-1">
        <Textfield bind:valid label="Voornaam" bind:value={treatment.prospect.firstName} placeholder="Voornaam" class="bg-grey-lighter rounded-lg p-2 w-48 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" {readOnly} />
    </div>
    <div class="my-1">
        <Textfield bind:valid label="Naam" bind:value={treatment.prospect.name} placeholder="Naam" class="bg-grey-lighter rounded-lg p-2 w-56 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" {readOnly} />
    </div>
    <div class="my-1">
        <BirthdayPicker bind:birthday={ treatment.prospect.dateofbirth } label="Geboortedatum" class="bg-grey-lighter rounded-lg p-2 w-40 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" {readOnly} />
    </div>
    <div class="my-1">
        <MutualitySelector label="Mutualiteit" class="inline-block bg-grey-lighter w-48" bind:selectedMutuality={ treatment.mutuality } {readOnly} />
    </div>
</div>