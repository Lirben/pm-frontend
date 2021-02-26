<script>
    import emoji from "node-emoji";
    import { commitMonth } from '../../mobielServices/financialService';

    export let month;
    export let year;
    export let paramedic;
    export let committed;

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    async function commitThisMonth()
    {
        await commitMonth(paramedic.code, month, year);
        committed();
    }
</script>

{#if (month < currentMonth && year <= currentYear) || year < currentYear}
    <div class="px-2 my-1 md:px-32">
        <div class="w-auto rounded-lg m-2 p-2 h-12 bg-green text-2xl font-bold text-center cursor-pointer" on:click={commitThisMonth}>
            { emoji.get('heavy_check_mark') }Maandstaat accepteren
        </div> 
    </div>
{/if}