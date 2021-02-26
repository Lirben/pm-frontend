<script>
    import Personalia from './Personalia.svelte';
    import ContactDetails from './ContactDetails.svelte';
    import PreferredLocations from './PreferredLocations.svelte';

    export let readOnly=false;
    export let treatment;
    export let valid;

</script>

<div class="flex flex-col justify-start my-2 h-full overflow-y-auto">
    <Personalia bind:valid bind:treatment="{treatment}" {readOnly} />

    <ContactDetails bind:valid bind:prospect="{treatment.prospect}" {readOnly} />

    <PreferredLocations bind:valid bind:places="{treatment.places}" {readOnly} />
</div>