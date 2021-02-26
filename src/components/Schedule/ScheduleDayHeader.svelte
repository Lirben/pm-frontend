<script>
    import ScheduleSlotModal from './ScheduleSlotModal.svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import weekday from 'dayjs/plugin/weekday';

    dayjs.locale(locale_nl);
    dayjs.extend(weekday);

    export let dayNumber;
    export let refresh;

    const { open } = getContext('simple-modal');
    const showNewScheduleSlotModal = () => {
        open(
            ScheduleSlotModal,
            {
                dayNumber: dayNumber,
                dayName: (dayjs().weekday((dayNumber-1)).format('dddd'))
            },
            {
                styleWindow: {
                    height: '90vh',
                },
                styleContent: {
                    height: '90vh',
                    padding: '0'
                },
                transitionWindow: fly,
                transitionWindowProps: {
                    y: 100,
                    duration: 1000
                },
            },
            {
                onClose: () => {
                    refresh();
                }
            }
        );
    };
</script>

<div class="font-bold mt-8 mb-4 md:mb-8 flex flex-row justify-between">
    <div class="w-8 md:w-0"></div>
    <div>{ (dayjs().weekday((dayNumber-1)).format('dddd')) }</div>
    <div on:click="{showNewScheduleSlotModal}" class="-mt-2 w-8 h-8 bg-yellow text-white text-3xl rounded-full flex flex-col justify-center text-center cursor-pointer">
        +
    </div>
</div>