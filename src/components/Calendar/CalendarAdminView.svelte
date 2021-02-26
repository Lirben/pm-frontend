<script>
    import { user } from '../../stores/authStore';
    import Calendar from "./Calendar.svelte";
    import ParamedicSelector from "../ParamedicCards/ParamedicSelector/ParamedicSelector.svelte";

    let paramedic = { "code": '', "firstName": '' };

    if($user)
        paramedic = { "code": $user.paramedicCode, "firstName": '' };

</script>

<div class="px-0 mx-0 bg-white rounded-lg">
    {#if $user && $user.level == 3}
        <div class="flex flex-row justify-center">
            <div class="text-right mx-2 font-bold flex flex-col justify-center">
                Bekijk agenda van:
            </div>
            <div class="mx-2 w-48">
                <ParamedicSelector bind:selectedParamedic="{paramedic}" />
            </div>
        </div>
    {/if}

    {#if $user}
        <Calendar {paramedic} />
    {/if}
</div>