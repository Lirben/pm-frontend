<script context="module">
    export async function preload()
    {      
		try{
			const response = await this.fetch('/api_routes/locationsAPI/all/noGeoJson');
			const locations = await response.json();

			return { locations };
		}catch(error) {}
	}
</script>

<script>
	import Header from "./../components/BasicUI/Header/Header.svelte"
	import Footer from "./../components/BasicUI/Footer/Footer.svelte"
	export let locations;

	export let segment;
</script>

<main>
	<Header { segment } />

	<slot></slot>

	<Footer { locations } />
</main>