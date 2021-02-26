<script>
    import MapsSection from "../../components/GeoMaps/MapsSection.svelte";
</script>

<style>
    .speech-bubble:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 27px solid transparent;
        border-right-color: #ffc000;
        border-left: 0;
        border-top: 0;
        margin-top: -13.5px;
        margin-left: -27px;
    }
</style>

<svelte:head>
    <meta name="description" content="Praktijk Mobiel neemt intelligentietesten en IQ-testen af aan huis of op school. Zo winnen jij en je gezin tijd!">
    <meta name="author" content="Praktijk Mobiel">
    <meta property="og:locale" content="nl_NL">
    <meta property="og:image" content="../img/IQ-test.jpg" />
    <link rel="canonical" href="https://www.praktijkmobiel.be/IQ-test">

    <title>IQ-test voor uw kind? Wij doen afname aan huis! | Praktijk Mobiel</title>
</svelte:head>

<section class="h-screen bg-white text-lg">
    <div class="h-5/6 bg-iqtest-image-sm md:bg-iqtest-image-md lg:bg-iqtest-image-lg bg-clip-content pb-0 bg-cover bg-fixed">

        <div class="h-full flex flex-col justify-center px-8 space-y-6">
            <h1 class="text-white text-4xl md:text-6xl text-left font-bold">IQ-test of intelligentie onderzoek voor uw kind?</h1>
            <h2 class="text-white text-xl md:text-4xl text-left">Praktijk Mobiel komt aan huis voor de afname!</h2>
        </div>

    </div>
</section>

<section class="min-h-screen text-2xl leading-loose -mt-24">
    <div class="mx-4 md:mx-56">
        <h2 class="text-yellow text-left text-4xl font-bold mb-4 mt-12">Waarom een IQ-test?</h2>

        <div class="my-4">
            Praktijk Mobiel neemt intelligentietesten af bij kinderen en jongeren naar aanleiding van volgende redenen:
            <ul class="mutisme-text">
                <li><span class="text-yellow">&#x2022;</span> Terugbetaling behandeling logopedie</li>
                <li><span class="text-yellow">&#x2022;</span> Meten van de intelligentie van het kind binnen een ruimer kader</li>
            </ul>                        
        </div>

        <h2 class="text-yellow text-left text-4xl mb-4 mt-12">IQ-test voor een behandeling logopedie</h2>

        <div class="my-4">
            Om terugbetaling te krijgen voor een logopedie behandeling, vereist het RIZIV dat kinderen een voldoende hoog IQ cijfer hebben (hoger dan 85). 
            Om dit te meten is er een IQ onderzoek nodig met behulp van een gecertifieerde IQ-test.
        </div>
                        
        <div class="my-4">
            <span class="font-bold mt-6">Waarom kiezen voor Praktijk Mobiel?:</span>
            <ul class="ml-8">
                <li><span class="text-yellow">&#x2022;</span> Eenvoudig en helder verslag met IQ cijfer</li>
                <li><span class="text-yellow">&#x2022;</span> Steeds gebruik van de correcte, wetenschappelijk onderbouwde IQ test</li>
                <li><span class="text-yellow">&#x2022;</span> Ook voor kindjes die het Nederlands niet goed machtig zijn, door gebruik van niet-talige testen.</li>
                <li><span class="text-yellow">&#x2022;</span> Wij nemen een IQ-test af vanaf 2,5 jaar tot 21 jaar</li>
                <li><span class="text-yellow">&#x2022;</span> Win tijd, want wij komen aan huis</li>
                <li><span class="text-yellow">&#x2022;</span> Vaste prijs van € 135 (all in)</li>
                <li><span class="text-yellow">&#x2022;</span> Terugbetaling IQ-test van €20-€60 afhankelijk van uw mutualiteit</li>
            </ul>
        </div>

        <h2 class="text-yellow text-left text-4xl mb-4 mt-12"> Intelligentie onderzoek in een ruimer kader</h2>
        
        <div class="my-4">
            Indien er een intelligentie onderzoek wordt gevraagd in het kader van:
            <ul class="ml-8">
                <li><span class="text-yellow">&#x2022;</span> Onderzoek naar (hoog)begaafdheid</li>
                <li><span class="text-yellow">&#x2022;</span> Aandachtsonderzoek</li>
                <li><span class="text-yellow">&#x2022;</span> Belevingsonderzoek</li>
                <li><span class="text-yellow">&#x2022;</span> Detecteren van oorzaken schoolproblemen</li>
                <li><span class="text-yellow">&#x2022;</span> Inzicht in de capaciteiten van het kind</li>
            </ul>
        </div>

        <div class="my-4">
            Voor deze intelligentietesten voorzien wij een uitgebreid verslag. Hierin vindt je, naast het IQ-cijfer, ook een verslag van de observaties van de psychologe die de test afnam terug.
        </div>

        <div class="my-4">
            <span class="font-bold mt-6">Waarom kiezen voor Praktijk Mobiel?:</span>
            <ul class="ml-8">
                <li><span class="text-yellow">&#x2022;</span> Een helder, uitgebreid verslag met IQ cijfer, subtestresultaten en observaties</li>
                <li><span class="text-yellow">&#x2022;</span> Steeds gebruik van de correcte, wetenschappelijk onderbouwde IQ test</li>
                <li><span class="text-yellow">&#x2022;</span> Ook voor kindjes die het nederlands niet goed machtg zijn, door gebruik van niet-talige testen.</li>
                <li><span class="text-yellow">&#x2022;</span> Wij nemen een IQ-test af vanaf 2,5 jaar tot 21 jaar</li>
                <li><span class="text-yellow">&#x2022;</span> Win tijd, want wij komen aan huis</li>
                <li><span class="text-yellow">&#x2022;</span> Vaste prijs van € 295 (all in)</li>
                <li><span class="text-yellow">&#x2022;</span> Terugbetaling van €30-€90 afhankelijk van uw mutualiteit</li>
            </ul>
        </div>
                        
        <h2 class="text-yellow text-left text-4xl mb-4 mt-12">Een getuigenis</h2>

        <div class="inline-block mb-24">
            <img class="w-36 h-36 float-left" src="images/arno.png" alt="intelligentie test klant review" />
            <span class="speech-bubble relative bg-yellow rounded-lg text-white text-left text-xl p-6 float-right w-5/6">
                Wij namen een IQ-test af in het kader van schoolmoeilijkheden. 
                De kinderpsychologe van <span class="font-bold">Praktijk Mobiel</span> kwam bij ons langs. 
                <span class="block">3 dagen later kregen we een mooi en helder verslag dat ons inzicht gaf in de oorzaak van de problematiek.</span>

                <span class="block italic">-Ouders van Arno*-</span>
            </span>
        </div>
    </div>

</section>

<section class="relative m-0 py-0 bg-white h-screen">
	<MapsSection topLevel="{true}" />
</section>