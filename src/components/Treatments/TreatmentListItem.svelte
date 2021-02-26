<script>
    import Label from '../BasicUI/Label.svelte';
    import Tooltip from '../BasicUI/Tooltip.svelte';
    import Treatment from './TreatmentModal/Treatment.svelte';
    import ParamedicLabel from '../ParamedicCards/ParamedicLabel.svelte';

    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';
    import emoji from "node-emoji";

    import dayjs from 'dayjs';
    import locale_nl from 'dayjs/locale/nl-be';
    import relativeTime from 'dayjs/plugin/relativeTime';

    export let treatment;
    export let refresh;

    const { open } = getContext('simple-modal');

	const showTreatment = () => {
		open(
			Treatment,
			{
				treatmentID: treatment.treatmentID
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

    dayjs.locale(locale_nl);
    dayjs.extend(relativeTime);
</script>
   
<div class="px-3 border-b h-20 border-grey cursor-pointer hover:bg-grey-lighter flex flex-col justify-center" on:click={showTreatment}>
    <div class="grid grid-cols-10 md:grid-cols-12">

        <div class="col-span-2">
            <div class="h-full text-xl flex flex-col justify-center">
                {#if treatment.treatmentType == "THERAPIE"}
                    { emoji.get('left_speech_bubble') }
                {:else}
                    { emoji.get('brain') }
                {/if}
            </div>
        </div>

        <div class="col-span-3">
            <div class="h-full flex flex-col justify-center font-bold">
                <span class="block lg:inline-block">{ treatment.prospect.firstName }</span>
                <span class="block lg:inline-block">{ treatment.prospect.name }</span>
            </div>
        </div>

        <div class="hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-center">
            {#if treatment.places[0]}
                { treatment.places[0].city }
            {/if}
        </div>

        <div class="col-span-2 lg:col-span-1">
            <div class="h-full flex flex-col justify-center">
                <Label text="{ treatment.status.label }" bgcolor= "{ treatment.status.bgcolor }" txtcolor = "{ treatment.status.txtcolor }" />
            </div>
        </div>

        <div class="hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-center lg:text-center">
            <Tooltip text="{ dayjs().to(dayjs.unix(treatment.dateCreated)) }" tooltipText="{ dayjs.unix(treatment.dateCreated).format("dddd[,] D MMM [om] HH:mm") }" />
        </div>

        <div class="col-span-3 lg:col-span-2">
            <div class="flex flex-col justify-center">
                <div class="flex flex-row justify-center md:justify-start md:mx-8">
                    <ParamedicLabel paramedic="{treatment.responsibleParamedic}" />
                </div>
            </div>
        </div>

    </div>
</div>