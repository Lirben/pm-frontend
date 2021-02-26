<script>
    import ModalHeader from '../../BasicUI/Modal/ModalHeader.svelte';
    import { Tabs, TabPanel } from '../../BasicUI/Tabs/tabs.js';
    import {isPracticeAvailable} from '../../../mobielServices/practiceService';

    import TreatmentSelectSection from './TreatmentSelectSection.svelte';
    import MakeAppointmentButton from './MakeAppointmentButton.svelte';
    import ConversationSelectSection from './ConversationSelectSection.svelte';
    import PlaceSelectSection from './PlaceSelectSection.svelte';
    import SendMailSection from './SendMailSection.svelte';
    import StartTimeSection from './StartTimeSection.svelte';

    export let askTime = false;
    export let startTime = null;
    export let endTime = null;    
    export let date = null;
    export let paramedic;

    let selectedTreatment;
    let selectedConversation;
    let selectedPlace;
    let sendMail = true;
    let practiceAvailable = true;

    async function checkIfPracticeIsAvailable(startTime, endTime, practiceID)
    {
        practiceAvailable = await isPracticeAvailable(startTime, endTime, practiceID);
    }

    $: {
        practiceAvailable = true;

        if(selectedPlace && selectedPlace.practiceID)
            checkIfPracticeIsAvailable(startTime, endTime, selectedPlace.practiceID);
    }
</script>


  <Tabs class="flex h-full flex-col justify-between">

    <ModalHeader icon="date" text="Nieuwe afspraak" />

    <TabPanel>
        <div class="h-full flex flex-col justify-start">
            <StartTimeSection bind:startTime="{startTime}" {endTime} {askTime} {date}/>

            <TreatmentSelectSection {startTime} bind:selectedTreatment="{selectedTreatment}" />

            <ConversationSelectSection treatment="{selectedTreatment}" bind:selectedConversation="{selectedConversation}" />

            <PlaceSelectSection {practiceAvailable} treatment="{selectedTreatment}" conversation="{selectedConversation}" bind:selectedPlace="{selectedPlace}" />
 
            <SendMailSection treatment="{selectedTreatment}" conversation="{selectedConversation}" place="{selectedPlace}" bind:sendMail="{sendMail}" />
        </div>
    </TabPanel>

    {#if practiceAvailable}
        <MakeAppointmentButton {startTime} treatment="{selectedTreatment}" conversation="{selectedConversation}" place="{selectedPlace}" {paramedic} {sendMail} />
    {/if}
</Tabs>