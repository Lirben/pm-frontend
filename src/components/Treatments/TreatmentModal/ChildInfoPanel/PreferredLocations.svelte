<script>
    import Place from '../Place/Place.svelte';
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';
    import ModalButton from '../../../BasicUI/Modal/ModalButton.svelte';

    export let places;
    export let readOnly = false;
    export let valid;

    const deletePlace = (message) => {
      places.splice(message, 1);
      places = places;

      if(places.length == 0)
        valid = true;      
    }

    function addPlace()
    {
      places = [...places, { "type": '', "street": '', "houseNumber": '', "city": '' }]
    }
</script>

<SectionTitle icon="world_map" title="Voorkeurlocaties" />

{#each places as place, id}
  <Place bind:valid bind:place="{ place }" { id } { deletePlace } { readOnly } />
{/each}

{#if places.length == 0}
  <div class="flex flex-row bg-grey-lighter text-center py-4 mb-4 px-2">
    Geen locaties gevonden
  </div>
{/if}

{#if places.length < 3 && !readOnly}
  <ModalButton onClick="{addPlace}" icon="heavy_plus_sign" text="Voeg een locatie toe" class="bg-grey-lighter border-2 m-2 border-grey rounded-lg" />
{/if}