<script>
    import {getCalendarByParamedic, getCalendarByLocation, getFirstFreeWeek} from '../../mobielServices/calendarServices';    
    import CalendarDay from './CalendarDay.svelte';
    import WeekSelector from './WeekSelector.svelte';

    export let showParamedics = false;
    export let paramedic = null;
    export let location = null;
    export let appointmentBooked = null;

    let calendar;
    let weekOffset = 0;
    let showPast = false;

    async function fetchCalendarByParamedic(paramedicCode, weekOffset)
    {
        calendar = await getCalendarByParamedic(paramedicCode, weekOffset);
    }

    async function fetchCalendarByLocation(locationID, weekOffset)
    {
        calendar = await getCalendarByLocation(locationID, weekOffset);
    }

    async function fetchFirstFreeWeek(locationID)
    {
        calendar = await getFirstFreeWeek(locationID);
        weekOffset = calendar.weekNumber - calendar.currentWeekNumber;
    }

    function refresh() {
        if(paramedic && paramedic.code != '')
        {
            fetchCalendarByParamedic(paramedic.code, weekOffset);
            showPast = true;
        }

        if(location && location.locationID != '')
        {
            fetchCalendarByLocation(location.locationID, weekOffset);
            showPast = false;
        }
    }

    function changeWeekOffset(weekOffsetParam)
    {
        weekOffset = weekOffsetParam;   
        refresh();         
    }

    $: {
        if(paramedic && paramedic.code != '')
            fetchCalendarByParamedic(paramedic.code, weekOffset);
            
        if(location && location.locationID != '')
            fetchFirstFreeWeek(location.locationID);
    }
</script>


{#if calendar}
    <div class="mt-16 mx-4">
        <WeekSelector weekOffset="{weekOffset}" {changeWeekOffset} {showPast} />
        
        {#if calendar.slotCount > 0}
            <div class="grid grid-cols-1 md:grid-cols-6">
                {#each calendar.weekDays as weekDay }
                    <CalendarDay midnight="{weekDay.day}" slots="{weekDay.slots}" {refresh} {appointmentBooked} {paramedic} {location} {showParamedics} />
                {/each}
            </div>
        {:else}
            <div class="text-red font-bold h-16 flex flex-col justify-center text-center">Geen beschikbare momenten gevonden tijdens deze week</div>
        {/if}
    </div>
{:else}
    Kalender laden...
{/if}
