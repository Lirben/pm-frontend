<script>
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";
    import Textfield from '../../../BasicUI/Inputfields/Textfield.svelte';
    import Emailfield from "../../../BasicUI/Inputfields/Emailfield.svelte";

    export let prospect;
    export let readOnly = false;
    export let valid;
</script>

<SectionTitle icon="telephone_receiver" title="Contactgegevens" />

<div class="bg-grey-lighter text-left px-2">          
  <div class="my-1">
    <Emailfield bind:valid label="Emailadres" bind:value={ prospect.email } { readOnly } placeholder="Emailadres" class="bg-grey-lighter rounded-lg p-2 w-44 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
  </div>
  <div class="my-1">
    <Textfield bind:valid label="Telefoonnummer" bind:value={ prospect.telephone } { readOnly } placeholder="Telefoonnummer" class="bg-grey-lighter rounded-lg p-2 w-36 border-0 focus:ring-2 focus:ring-yellow focus:outline-none" />
  </div>
</div>