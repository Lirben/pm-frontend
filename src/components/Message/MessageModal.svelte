<script>
    import ModalHeader from "../BasicUI/Modal/ModalHeader.svelte";
    import PublicModalFooter from "../BasicUI/Modal/publicModalFooter.svelte";
    import {postMessage} from '../../mobielServices/messageService';
    import { getContext } from 'svelte';

    const { close } = getContext('simple-modal');
    let message = {name: '', email: '', telephone: '', place: '', message: ''};

    async function handleOnSubmit() {
        await postMessage(message);
        close();
    }
</script>


<div class="flex h-full flex-col justify-start">

    <!-- svelte-ignore component-name-lowercase -->
    <form on:submit|preventDefault={handleOnSubmit}>
        <ModalHeader icon="email" text="Stuur ons een bericht" textSize="base" />

        <div class="mt-2">
            <div class="text-left px-2">
                <div class="mt-4">
                    <label for="NameMessage" class="font-bold">Jouw naam: </label>
                    <input required type="text" id="NameMessage" bind:value={message.name} placeholder="Jouw naam" class="bg-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>     
                <div class="mt-4">
                    <label for="EmailMessage" class="font-bold">Jouw emailadres: </label>
                    <input required type="email" id="EmailMessage" bind:value={message.email} placeholder="Jouw emailadres" class="bg-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
                <div class="mt-4">
                    <label for="TelephoneMessage" class="font-bold">Jouw telefoonnummer: </label>
                    <input required minlength="9" type="text" id="TelephoneMessage" bind:value={message.telephone} placeholder="Jouw telefoonnummer" class="bg-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
                <div class="mt-4">
                    <label for="PlaceMessage" class="font-bold">Jouw woonplaats: </label>
                    <input required type="text" id="PlaceMessage" bind:value={message.place} placeholder="Jouw woonplaats" class="bg-yellow mt-1 mb-2 h-12 rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" />
                </div>
                <div class="mt-4">
                    <label for="Message" class="font-bold">Jouw bericht: </label>
                    <textarea id="Message" required class="bg-yellow mt-1 mb-2 h-20  rounded-lg p-2 w-full border-0 focus:ring-2 focus:ring-yellow focus:outline-none placeholder-grey" bind:value={message.message} placeholder="Schrijf hier jouw bericht"></textarea>
                </div>
      
            </div>
        </div>

        <PublicModalFooter messageModal="{true}" />
    </form>
</div>