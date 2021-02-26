<script context="module">

	export async function preload(page, session)
    { 
        try{
            const paramedicName = page.params.slug;

            const paramResponse = await this.fetch('/api_routes/paramedicsAPI/byName/' +  paramedicName + '.json');
            const paramedic = await paramResponse.json();
            
            return { paramedic };
        }catch(error) {}
    }   
</script>

<script>
    import ParamedicPicture from "../../components/ParamedicCards/ParamedicPicture.svelte";

	export let paramedic;
</script>

<svelte:head>
    <meta name="description" content="{ paramedic.firstName } { paramedic.name } is { paramedic.title } bij Praktijk Mobiel.">
	<meta name="author" content="Praktijk Mobiel">
	<meta property="og:locale" content="nl_NL">
	<link rel="canonical" href="https://www.praktijkmobiel.be/Team/{paramedic.firstName}-{paramedic.name}">

    <title>{paramedic.firstName} {paramedic.name} | Praktijk Mobiel</title>
</svelte:head>


<section class="my-36 py-0 bg-white min-h-full">

    <h1 class="text-yellow font-bold text-2xl text-center md:hidden">{paramedic.firstName} {paramedic.name}</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="md:col-span-1 flex flex-col justify-center text-center my-4">
            <div class=" flex flex-row justify-center">
                <ParamedicPicture src="{paramedic.code}" alt="{paramedic.firstName}" />
            </div>
            <div class="font-bold my-2">{ paramedic.title }</div>
        </div>
        <div class="md:col-span-2 flex flex-col justify-start text-center my-4">
            <h1 class="hidden md:block text-yellow font-bold text-2xl text-center mb-12">{paramedic.firstName} {paramedic.name}</h1>
    
            <div class="group text-lg mx-4 md:mr-20 mb-12 leading-loose md:text-left">
                {@html paramedic.introduction}
            </div>
        </div>
    </div>
</section>