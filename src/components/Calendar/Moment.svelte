<script>
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';

    export let startTime;
    export let endTime;
    export let showDate = false;

    dayjs.locale(locale_nl);
</script>

{#if showDate }
    {(dayjs.unix(startTime)).format("dd[,] D MMM YYYY HH:mm") } - {(dayjs.unix(endTime)).format("HH:mm") }
{:else}
    {(dayjs.unix(startTime)).format("HH:mm") } - {(dayjs.unix(endTime)).format("HH:mm") }
{/if}