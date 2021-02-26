<script>
    import { TabList, Tab } from '../../BasicUI/Tabs/tabs.js';
    import NavigationButton from '../../BasicUI/Modal/NavigationButton.svelte';
    import ModalButton from '../../BasicUI/Modal/ModalButton.svelte';
    import isEqual from 'lodash/isEqual';

    export let treatment;
    export let originalTreatment;
    export let saveTreatment;
    export let valid;
    export let showChildInfoOnly = false;
    export let showLoadingAnimation;

    let saveButton = false;

    const nrOfButtons = calcNrOfButtons();

    function calcNrOfButtons()
    {
      if(!showChildInfoOnly)
        return 4;

      return 1;
    }

    function showSaveButton()
    {
        saveButton = true;
    }

    function hideSaveButton()
    {
        saveButton = false;
    }

    function callSaveTreatment()
    {
        saveTreatment();
    }

    $: {
        if(treatment && originalTreatment)
        {
          if(isEqual(originalTreatment, treatment))
              hideSaveButton();
          else
              showSaveButton();
        }
    } 

</script>

{#if saveButton}
    {#if valid}

      <ModalButton onClick="{callSaveTreatment}" icon="floppy_disk" text="Bewaren" { showLoadingAnimation } class="bg-green rounded-b-lg" />
    
    {:else}

      <ModalButton icon="warning" text="Vul de aangeduide velden in" class="bg-red text-white rounded-b-lg" />

    {/if}
{:else}

  <TabList class="grid grid-cols-{nrOfButtons} h-22 gap-1">
    <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch rounded-bl-lg {showChildInfoOnly ? 'rounded-br-lg' : ''} focus:outline-none">
      <NavigationButton icon="blond-haired-man" text="Kindinfo" />
    </Tab>

    {#if !showChildInfoOnly}
      <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch focus:outline-none">
        <NavigationButton icon="card_file_box" text="Dossier" />
      </Tab>

      <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch focus:outline-none">
        <NavigationButton icon="page_with_curl" text="Bestanden" />
      </Tab>

      <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch rounded-br-lg focus:outline-none">
        <NavigationButton icon="date" text="Afspraken" />
      </Tab>
    {/if}
  </TabList>
  
{/if}