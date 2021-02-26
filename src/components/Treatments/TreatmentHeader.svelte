<script>
    import { user } from '../../stores/authStore';
    import TreatmentTypeFilter from './TreatmentFilters/TreatmentTypeFilter.svelte'
    import ParamedicFilter from './TreatmentFilters/ParamedicFilter.svelte';
    import TreatmentStatusFilter from './TreatmentFilters/TreatmentStatusFilter.svelte';

    export let filterOnType = '';
    export let filterOnStatus = '';
    export let filterOnParamedic = { "code": '', "firstName": '' };

    let userLevel = 0;

    if($user)
        userLevel = $user.level;
</script>


<div class="bg-grey-lighter grid grid-cols-10 md:grid-cols-12">
    <div class="col-span-2">
        <TreatmentTypeFilter bind:filterOnType />
    </div>

    <div class="col-span-3">
        <div class="my-4">
            <span class="block lg:block my-5 font-bold">Naam cliënt</span>
        </div>
    </div>

    <div class="hidden lg:col-span-2 lg:block my-5 font-bold">Plaats</div>

    <div class="col-span-2 lg:col-span-1">
        <TreatmentStatusFilter bind:filterOnStatus />
    </div>

    <div class="hidden lg:col-span-2 lg:block my-5 font-bold">Aangemeld op</div>

    <div class="col-span-3 lg:col-span-2">
        <ParamedicFilter bind:filterOnParamedic {userLevel} />
    </div>
</div>