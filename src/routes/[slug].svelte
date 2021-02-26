<script context="module">
	export async function preload(page, session)
    {      
		const locationName = page.params.slug;

		try{
			const locResponse = await this.fetch('/api_routes/locationsAPI/byName/noGeoJson/' + locationName + '.json');
			const subLocations = await locResponse.json();

			const paramResponse = await this.fetch('/api_routes/paramedicsAPI/byLocation/' + subLocations[0].locationID + '.json');
			const paramedics = await paramResponse.json();
			
			return { locationName, subLocations, paramedics };
			
		}catch(error) {}
    }   
</script>

<script>
	import IntroSection from "../components/PublicPages/IntroSection.svelte";
	import MapsSection from "../components/GeoMaps/MapsSection.svelte";
	import ParamedicSection from "../components/ParamedicCards/ParamedicsSection.svelte";
	import AanbodSection from "../components/PublicPages/AanbodSection.svelte";

	export let locationName;
	export let subLocations;
	export let paramedics;

	const topLevel = false;
</script>

<svelte:head>
    <meta name="description" content="Zoek je een goede kinderpsycholoog in { locationName }? ✓ Therapie en IQ-test aan huis voor kinderen en jongeren! ✓ Terugbetaling door alle mutualiteiten!">
	<meta name="author" content="Praktijk Mobiel">
	<meta property="og:locale" content="nl_NL">
	<link rel="canonical" href="https://www.praktijkmobiel.be/">

    <title>Kinderpsycholoog { locationName }. Wij komen aan huis! | Praktijk Mobiel</title>
</svelte:head>

<section class="bg-kids-image-sm md:bg-kids-image-md lg:bg-kids-image-lg bg-clip-content bg-cover bg-fixed min-h-full">
	<IntroSection { locationName } />	
</section>

<section class="bg-kids-image-sm md:bg-kids-image-md lg:bg-kids-image-lg bg-clip-content m-0 py-0 bg-cover bg-fixed min-h-full">
	<AanbodSection />
</section>

<section class="relative m-0 py-0 bg-white h-screen">
	<MapsSection { locationName } { subLocations } { topLevel } />
</section>

<section class="m-0 py-0 bg-white min-h-full">
	<ParamedicSection { locationName } { paramedics } />
</section>