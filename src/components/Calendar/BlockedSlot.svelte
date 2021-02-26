<script>
    import emoji from "node-emoji";
    import Moment from "./Moment.svelte";
    import { unblockSlot } from './../../mobielServices/calendarServices';

    export let calendarSlot;
    export let refresh;

    async function handleUnblockSlot()
    {
        await unblockSlot(calendarSlot.code);
        refresh();
    }
</script>

<div on:click="{handleUnblockSlot}" class="bg-grey-light rounded-md my-2 h-8 flex flex-col justify-center cursor-pointer">
    <span class="inline">
        <span class="line-through">
            <Moment startTime="{calendarSlot.moment.startTime}" endTime="{calendarSlot.moment.endTime}" />
        </span>

        { emoji.get('sparkles') }
    </span>
</div>