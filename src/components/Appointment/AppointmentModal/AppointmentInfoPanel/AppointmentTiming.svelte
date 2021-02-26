<script>
    import SectionTitle from "../../../BasicUI/Modal/SectionTitle.svelte";
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    
    dayjs.locale(locale_nl);

    export let moment;
</script>

<SectionTitle icon='clock10' title="Tijdstip" />

<div class="bg-grey-lighter text-left px-4">
    <div class="my-1 h-8 flex flex-col justify-center">
        { (dayjs.unix(moment.startTime)).format("dd[,] D MMM YYYY HH:mm") } - { (dayjs.unix(moment.endTime)).format("HH:mm") }
    </div>
</div>