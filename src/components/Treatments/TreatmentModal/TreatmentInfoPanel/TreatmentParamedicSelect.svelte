<script>
    import ParamedicSelector from "../../../ParamedicCards/ParamedicSelector/ParamedicSelector.svelte";
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";

    export let icon;
    export let title;
    export let selectedParamedic;
    export let readOnly = false;

</script>

<SectionTitle { icon } { title } />

<div class="bg-grey-lighter text-left px-2">          
  <div class="my-1">
    <ParamedicSelector {readOnly} bind:selectedParamedic={selectedParamedic} />
  </div>
</div>