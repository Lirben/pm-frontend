<script context="module">
    export async function preload()
    {   
		try{
			const locationName = 'Oost-Vlaanderen';

			const locResponse = await this.fetch('/api_routes/locationsAPI/all/noGeoJson');
			const locations = await locResponse.json();
			
			const paramResponse = await this.fetch('/api_routes/paramedicsAPI/all');
			const paramedics = await paramResponse.json();
		
			return { locationName, locations, paramedics };
			
		} catch(error) {}
    }
</script>

<script>
	import MapsSection from "../components/GeoMaps/MapsSection.svelte";
	import IntroSection from "../components/PublicPages/IntroSection.svelte";
	import AanbodSection from "../components/PublicPages/AanbodSection.svelte";
	import ParamedicsSection from "../components/ParamedicCards/ParamedicsSection.svelte";

	export let locationName;
	export let locations;
	export let paramedics;

	const topLevel = true;
</script>

<svelte:head>
	<meta name="description" content="Zoek je een goede kinderpsycholoog of psycholoog? ✓ Therapie en IQ-test aan huis voor kinderen en jongeren! ✓ Terugbetaling door alle mutualiteiten!">
	<meta name="author" content="Praktijk Mobiel">
	<meta property="og:locale" content="nl_NL">
	<link rel="canonical" href="https://www.praktijkmobiel.be/">

	<title>Kinderpsycholoog aan huis</title>
</svelte:head>

<section class="bg-kids-image-sm md:bg-kids-image-md lg:bg-kids-image-lg bg-clip-content pb-0 bg-cover bg-fixed min-h-full">
	<IntroSection {locationName} />	
</section>

<section class="bg-kids-image-sm md:bg-kids-image-md lg:bg-kids-image-lg bg-clip-content m-0 py-0 bg-cover bg-fixed min-h-full">
	<AanbodSection />
</section>

<section class="relative m-0 py-0 bg-white h-screen">
	<MapsSection {locationName} subLocations="{locations}" { topLevel } />
</section>

<section class="m-0 py-0 bg-white min-h-full">
	<ParamedicsSection { paramedics } />
</section>