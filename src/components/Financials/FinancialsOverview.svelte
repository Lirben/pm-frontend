<script>
    import { user } from '../../stores/authStore';
    import PrestationsList from "../../components/Financials/PrestationsList.svelte";
    import FinancialChart from "../../components/Financials/FinancialChart.svelte";
    import { getYearFinancials, getYearFinancialsPerParamedic } from '../../mobielServices/financialService';
    import ParamedicSelector from "../../components/ParamedicCards/ParamedicSelector/ParamedicSelector.svelte";
    import YearSelector from "./YearSelector.svelte";

    let dataset = [];
    let selectedYear = new Date().getFullYear();
    let selectedMonth = new Date().getMonth();

    let selectedParamedic;

    $: {
        if($user && $user.level != 3)
            selectedParamedic = {code: $user.paramedicCode};
        
        loadYearFinancials(selectedYear, selectedParamedic);
    }

    async function loadYearFinancials(year, paramedic)
    {
        let yearFinancials;

        if($user && $user.level == 3 && (!paramedic || paramedic.code == ""))
            yearFinancials = await getYearFinancials(year);

        if(paramedic && paramedic.code != "")
            yearFinancials = await getYearFinancialsPerParamedic(paramedic.code, year);

        if(yearFinancials)
        {
            let turnoverInPast = [];
            let turnoverInFuture = [];

            yearFinancials.forEach(element => {
                turnoverInPast= [...turnoverInPast, element.turnoverInPast];
                turnoverInFuture= [...turnoverInFuture, element.turnoverInFuture];
            });

            dataset[0] = createDataset("Gepresteerde omzet", turnoverInPast, "rgba(255, 192, 0, 1)");
            dataset[1] = createDataset("Toekomstige omzet", turnoverInFuture, "rgba(248, 248, 248, 1)");
        }
    }

    function createDataset(name, data, bgColor)
    {
        return {
                label: name,
                data: data,
                backgroundColor: bgColor,
                borderWidth: 2
            };
    }
</script>

<div class="px-0 mx-0 bg-white rounded-lg text-lg">

    {#if $user && $user.level == 3}
        <div class="grid grid-cols-2 md:px-72">
            <div class="text-right mx-2 font-bold flex flex-col justify-center">
                Bekijk omzet van:
            </div>
            <div class="mx-2">
                <ParamedicSelector bind:selectedParamedic="{selectedParamedic}" />
            </div>
        </div>
    {/if}

    <YearSelector bind:year="{selectedYear}" />

    <FinancialChart { dataset } bind:selectedMonth="{selectedMonth}" />
    <PrestationsList month="{selectedMonth}" year="{selectedYear}" {selectedParamedic} />
</div>