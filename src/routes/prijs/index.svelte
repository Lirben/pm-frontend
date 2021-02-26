<script context="module">

	export async function preload(page, session)
    {      
        try{	
			const response = await this.fetch('../api_routes/conversationsAPI/all');
			const conversations = await response.json();
				
            return { conversations };
		}catch(error) {	}
    }
    
</script>

<script>
    import Conversation from "../../components/Conversations/Conversation.svelte";
    import MutualitySelectorPublic from "../../components/Mutuality/MutualitySelectorPublic.svelte";

    export let conversations;

    let selectedMutuality;
</script>

<svelte:head>
    <meta name="description" content="Meer info rond kostprijs IQ test, terugbetaling IQ-test of terugbetaling psycholoog cm">
    <meta name="author" content="Praktijk Mobiel">
    <meta property="og:locale" content="nl_NL">
    <link rel="canonical" href="https://www.praktijkmobiel.be/Prijs">

    <title>Kostprijs Kinderpsycholoog of kostprijs IQ test | Praktijk Mobiel</title>
</svelte:head>


<section class="bg-grey-light pb-0 bg-cover bg-fixed min-h-screen">

    <div class="py-40">
        <div class="m-0 py-12 md:mx-36 lg:mx-56 bg-white rounded-lg">

            
            <div class="text-base md:text-xl text-left px-2 md:px-8">
                <h1 id="mutualiteit" class="text-yellow text-center md:text-left text-4xl font-bold mb-16 md:mb-24 mt-6">Onze tarieven</h1>

                <div class="flex flex-row justify-start w-full mb-12 md:mb-20">
                    <MutualitySelectorPublic bind:selectedMutuality />
                </div>

                <div class="flex flex-col justify-start">

                    {#each conversations as conversation}
                        <Conversation {conversation} {selectedMutuality} />
                    {/each}

                </div>
            </div>
        </div>    
    </div>

</section>