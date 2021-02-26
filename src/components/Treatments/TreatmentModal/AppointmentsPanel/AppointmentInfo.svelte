<script>
    import emoji from "node-emoji";
    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import ConversationCode from "../../../Conversations/ConversationCode.svelte";
    import ParamedicPicture from "../../../ParamedicCards/ParamedicPicture.svelte";

    export let appointment;

    dayjs.locale(locale_nl);
</script>

<div class="flex flex-row h-28 mx-4 border-b border-grey py-4">
    <div class="flex-none w-14 flex flex-col justify-center">
        <ConversationCode code="{appointment.conversation.code}" />
    </div>
    <div class="flex-grow flex flex-col justify-around text-left">
        <div class="font-bold">{ emoji.get('calendar') } { (dayjs.unix(appointment.moment.startTime)).format("dd[,] D MMM YYYY") }</div>
        <div>{ emoji.get('house') } { appointment.place.type }</div>
        <div>{ emoji.get('moneybag') } € { appointment.appointmentPrice }</div>
    </div>
    <div class="flex-none w-14 flex flex-col justify-center">
        <ParamedicPicture src="{ appointment.paramedic.code }" alt="{appointment.paramedic.firstName}" size="10" borderSize="2" />
        <span class="hidden md:inline">{ appointment.paramedic.firstName }</span>
    </div>
</div>