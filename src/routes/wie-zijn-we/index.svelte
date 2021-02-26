<script context="module">
    export async function preload()
    {
		try{	
			const response = await this.fetch('../api_routes/paramedicsAPI/all');
			const paramedics = await response.json();
				
			return { paramedics };
		}catch(error) {
			console.log(error);
		}
    }
</script>

<script>
	import ParamedicsSection from "../../components/ParamedicCards/ParamedicsSection.svelte";

	export let paramedics;
</script>

<svelte:head>
	<meta name="description" content="Onze Psychologen, kinderpsychologen en orthopedagogen helpen u aan huis rond Angst, woede, IQ testen, ...">
	<meta name="author" content="Praktijk Mobiel">
	<meta property="og:locale" content="nl_NL">
    <link rel="canonical" href="https://www.praktijkmobiel.be/Wie-zijn-we">

    <title>Onze Kinderpsychologen | Praktijk Mobiel</title>
</svelte:head>

<section class="my-24 py-0 bg-white min-h-full">
	<ParamedicsSection { paramedics } />
</section>