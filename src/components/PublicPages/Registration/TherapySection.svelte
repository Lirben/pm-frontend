<script>
    import Information from "../../BasicUI/Information/Information.svelte";
    import PublicCalendar from "../../Calendar/PublicCalendar.svelte";

    export let appointmentBooked
</script>

<div class="m-0 my-2 py-12 md:mx-36 bg-white rounded-lg">
    <div class="text-base md:text-xl text-left flex flex-col justify-between min-h-screen">
        <div class="flex flex-col justify-start">
            <h2 id="mutualiteit" class="text-yellow text-center text-4xl font-bold mt-6 mb-16">Leg het intakegesprek vast</h2>
        
            <div class="text-base text-center my-8 md:mx-48 lg:mx-64">
                Tijdens het intakegesprek peilen we naar de vraag en de verwachtingen van de ouders.<br />
                Jouw kind hoeft hierop dus <span class="font-bold">niet</span> aanwezig te zijn.
            </div>

            <div class="flex flex-col justify-start mb-6 text-base h-full">
                <PublicCalendar showParamedics="{false}" {appointmentBooked} />
            </div>
        </div>

        <div class="my-6 flex flex-row justify-center bottom-0">
            <Information message="Vind je geen passend moment in onze agenda?" />
        </div>
    </div>
</div>