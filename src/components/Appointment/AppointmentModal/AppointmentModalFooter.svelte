<script>
    import NavigationButton from '../../BasicUI/Modal/NavigationButton.svelte';
    import { TabList, Tab } from '../../BasicUI/Tabs/tabs.js';
    import ModalButton from '../../BasicUI/Modal/ModalButton.svelte';
    import isEqual from 'lodash/isEqual';

    export let appointment;
    export let originalAppointment;
    export let saveAppointment;
    export let showLoadingAnimation = false;

    let saveButton = false;

    function showSaveButton()
    {
        saveButton = true;
    }

    function hideSaveButton()
    {
        saveButton = false;
    }

    function callSaveAppointment()
    {
        saveAppointment();
    }

    $: {
        if(appointment && originalAppointment)
          if(isEqual(originalAppointment, appointment))
              hideSaveButton();
          else
              showSaveButton();
    } 

</script>

{#if saveButton}
    <ModalButton {showLoadingAnimation} onClick="{callSaveAppointment}" icon="floppy_disk" text="Bewaren" class="bg-green rounded-b-lg" />
{:else}
    <TabList class="grid grid-cols-4 h-22 gap-1">
        <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch rounded-bl-lg focus:outline-none">
            <NavigationButton icon="calendar" text="Afspraak" />
        </Tab>
        <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch focus:outline-none">
            <NavigationButton icon="blond-haired-man" text="Kindinfo" />
        </Tab>
        <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch focus:outline-none">
            <NavigationButton icon="card_file_box" text="Dossier" />
        </Tab>
        <Tab class="bg-grey-lighter text-2xl flex flex-col justify-center items-stretch rounded-br-lg focus:outline-none">
            <NavigationButton icon="no_entry_sign" text="Annuleren" />
        </Tab>
    </TabList>
{/if}

