<script>
    import emoji from "node-emoji";
    import {getConversationByCode} from "../../../mobielServices/conversationService";
    import {createTreatmentAndMakeAppointment} from "../../../mobielServices/treatmentService";
    import ModalHeader from "../../BasicUI/Modal/ModalHeader.svelte";
    import PublicModalFooter from "../../BasicUI/Modal/publicModalFooter.svelte";
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import { getContext } from 'svelte';

    dayjs.locale(locale_nl);

    export let moment;
    export let paramedic;
    export let location;
    export let onAppointmentBooked = () => {};

    let treatment = {
            "treatmentType" : "THERAPIE", 
            "prospect" : { "firstName" : '' , "name" : '', "email" : '', "telephone" : '' }, 
            "places" : [{ "type" : "Thuisadres", "street" : '', "houseNumber" : '', "city" : location.name }], 
            "responsibleParamedic": { "code" : paramedic }, 
            "sharedParamedic": null,
            "active" : 1
        };
    
    let appointment = {
        "moment": moment, 
        "prospect": null, 
        "paramedic": {"code": paramedic}, 
        "conversation": null, 
        "place": treatment.places[0]
    };

    const { close } = getContext('simple-modal');

    function setPracticePlace()
    {
        if(location.type && location.type.startsWith('Praktijk')){
            treatment.places[0] = location;
            appointment.place = treatment.places[0];
        }
    }

    async function fetchConversationByCode(code)
    {
        appointment.conversation = await getConversationByCode(code);
    }

    async function handleOnSubmit() {
        console.log(await createTreatmentAndMakeAppointment(treatment, appointment));
        onAppointmentBooked();
        close();
    }

    setPracticePlace();
    fetchConversationByCode('INTK');
</script>


<div class="flex h-full flex-col justify-start mx-2">

    <!-- svelte-ignore component-name-lowercase -->
    <form on:submit|preventDefault={handleOnSubmit}>
        <ModalHeader icon="clock10" text="Plan jouw intakegesprek" textSize="base" />

        <div class="mt-2">
            <div class="text-left px-2">
                <div class="mt-2 flex flex-row justify-start">
                    <label for="FirstName" class="hidden md:flex font-bold w-2/6 flex-col justify-center">Voornaam kind </label>
                    <input required type="text" id="FirstName" bind:value={treatment.prospect.firstName} placeholder="Voornaam kind" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
                <div class="mt-2 flex flex-row justify-start">
                    <label for="Name" class="hidden md:flex font-bold w-2/6 flex-col justify-center">Naam kind </label>
                    <input required type="text" id="Name" bind:value={treatment.prospect.name} placeholder="Achternaam kind" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>       
                <div class="mt-2 flex flex-row justify-start">
                    <label for="Email" class="hidden md:flex font-bold w-2/6 flex-col justify-center">Jouw emailadres </label>
                    <input required type="email" id="email" bind:value={treatment.prospect.email} placeholder="Jouw emailadres" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
                <div class="mt-2 flex flex-row justify-start">
                    <label for="Telephone" class="hidden md:flex font-bold w-2/6 flex-col justify-center">Jouw telefoonnummer </label>
                    <input required minlength="9" type="text" id="Telephone" bind:value={treatment.prospect.telephone} placeholder="Jouw telefoonnummer" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
            
                <div class="mt-2 flex flex-row justify-start">
                    {#if location.type && location.type.startsWith('Praktijk')}
                        <span class="font-bold w-2/6 flex flex-col justify-center">Plaats afspraak:</span>
                        <div class="mt-1 mb-2">{ emoji.get('round_pushpin') } {location.type}</div>
                    {:else}
                        <label for="Street" class="hidden md:flex font-bold w-2/6 flex-col justify-start">Jouw adres </label>
                        <div class="flex flex-col flex-start w-full">
                            <input required type="text" id="Street" bind:value={treatment.places[0].street} placeholder="Straat" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                            <input required type="text" bind:value={treatment.places[0].houseNumber} placeholder="Huisnummer" class="bg-white border-b-2 border-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-3/6 border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                        </div>
                    {/if}
                </div>       
            </div>
        </div>

        <PublicModalFooter newProspectModal="{true}" />
    </form>
</div>