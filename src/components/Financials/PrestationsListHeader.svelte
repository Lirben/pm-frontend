<script>
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';

    dayjs.locale(locale_nl);

    export let month;

    let monthName;

    $: monthName = dayjs().month(month).format("MMMM");
</script>

<h1 class="font-bold text-2xl text-yellow mb-12 md:my-12">Details {monthName}</h1>

<div class="grid grid-cols-12 text-lg mx-1 md:mx-32">
    <div class="col-span-2 font-bold">
        Datum
    </div>

    <div class="col-span-3 md:col-span-2 font-bold break-words">
        Voornaam
    </div>

    <div class="col-span-4 md:col-span-3 font-bold break-words">
        Prestatietype
    </div>
    
    <div class="hidden md:block md:col-span-2 md:font-bold">
        Uitvoerder
    </div>

    <div class="col-span-2 font-bold">
        Prijs
    </div>

    <div class="col-span-1 font-bold break-words">
        OK
    </div>
</div>