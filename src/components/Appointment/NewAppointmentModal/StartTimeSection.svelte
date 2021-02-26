<script>
    import emoji from "node-emoji";
    import Moment from '../../Calendar/Moment.svelte';
    import TimePicker from '../../BasicUI/DatetimePicker/TimePicker.svelte';
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';

    export let startTime = null;
    export let endTime = null;
    export let askTime = false;
    export let date = null;

    dayjs.locale(locale_nl);
</script>


{#if !askTime}
    <div class="bg-grey-lighter text-left px-2 my-1 h-16 flex flex-col justify-center">
        <div class="font-bold my-1">
            { emoji.get('clock10') } <Moment {startTime} {endTime} showDate="{true}" />
        </div>
    </div>
{:else}
    <div class="bg-grey-lighter text-left px-2 my-1 h-20 flex flex-col justify-center">
        <div class="font-bold my-1">
            { emoji.get('calendar') } {(dayjs.unix(date)).format("dd[,] D MMM YYYY") }
        </div>
        <div class="font-bold my-1">
            <TimePicker label="Om" bind:startTime="{startTime}" {date} class="border border-yellow rounded-lg h-10" />
        </div>
    </div>
{/if}