<script>
    import MobielTelephone from "../BasicUI/Footer/MobielTelephone.svelte";

    export let conversation;
    export let selectedMutuality;
</script>


<div class="my-4">
    <div class="mb-2 flex flex-row justify-start border-b border-yellow">
        <div class="flex flex-col justify-end">
            <h2 class="font-bold text-3xl text-yellow mr-2">{ conversation.name }</h2>
        </div>
        <div class="text-base flex flex-col justify-center">
            (⏱️ { conversation.duration/60 } min.)
        </div>
    </div>

    <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-start w-4/6 md:w-3/6">
            <div class="p-2 mb-4 bg-grey-lighter rounded-lg">
                { conversation.description }
            </div>

            <div class="my-1 flex flex-col justify-start text-base bg-grey-lighter rounded-lg">
                <div class="my-1 flex flex-row justify-start">
                    <div class="md:w-8 md:text-center">📍</div><span class="font-bold mr-2">Waar?</span> { conversation.location }
                </div>

                <div class="my-1 flex flex-row justify-start">
                    <div class="md:w-8 md:text-center">🎁</div><span class="font-bold mr-2">Wat?</span> { conversation.included }
                </div>
                <div class="flex flex-row justify-start">
                    <div class="md:w-8 md:text-center"></div>
                    <div>
                        <span class="font-bold mr-2">Te betalen:</span> € { conversation.price }
                    </div>
                </div>
                <div class="flex flex-row justify-start">
                    <div class="md:w-8 md:text-center"></div>
                    <div>
                        <span class="font-bold mr-2">Terugbetaling mutualiteit:</span> 
                        {#if selectedMutuality}
                            {#if conversation.IQproduct == 1 && selectedMutuality.IQpayback == 0}
                                Meer informatie op <MobielTelephone />
                            {:else}
                                - € { conversation.nrOfSessionsDiscounted * selectedMutuality.sessiondiscount }
                            {/if} 
                        {:else}
                            <a href="/Prijs#mutualiteit"><span class="text-red font-bold">kies bovenaan jouw mutualiteit</span></a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-yellow text-white w-2/6 md:w-1/6 flex flex-col justify-between text-center rounded-lg">
            <div class="text-base h-1/6 font-bold">Prijs na terugbetaling mutualiteit</div>
            <div class="font-bold text-4xl md:text-6xl h-2/6">
                {#if selectedMutuality}
                    € {conversation.price - (conversation.nrOfSessionsDiscounted * selectedMutuality.sessiondiscount)}
                {:else}
                    € {conversation.price}
                {/if}
            </div>
            <div class="h-1/6"></div>
        </div>

    </div>
</div>

