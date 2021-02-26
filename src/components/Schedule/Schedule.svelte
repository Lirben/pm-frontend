<script>
    import {getMySchedule} from '../../mobielServices/scheduleServices';
    import ScheduleDay from './ScheduleDay.svelte';

    let schedule;

    async function fetchMySchedule()
    {
        schedule = await getMySchedule();
    }

    function refresh() {
        fetchMySchedule();
    }

    fetchMySchedule();

</script>

{#if schedule}
    <div class="px-0 mx-0 bg-white rounded-lg text-lg">

        <div class="mt-16 mx-4">
            
            <div class="grid grid-cols-1 md:grid-cols-6">
                {#each schedule as scheduleDay }
                    <ScheduleDay dayNumber={scheduleDay.dayNumber} slots={scheduleDay.slots} refresh="{refresh}" />
                {/each}
            </div>
        </div>
    </div>
{:else}
    Schema laden...
{/if}



