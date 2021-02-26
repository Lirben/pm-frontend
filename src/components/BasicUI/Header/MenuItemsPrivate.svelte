<script>
    import { user } from '../../../stores/authStore';
    import emoji from "node-emoji";
    import UserItem from './UserItem.svelte';

    export let open = false;

    function changePage() {
        open = false;
    }
</script>

<ul class="flex flex-col justify-between md:flex-row md:justify-start mt-12 md:mt-0 space-y-10 md:space-y-0 md:space-x-8">
    <li class="text-xl font-bold flex flex-col justify-center">
        <a rel=prefetch href="/auth/treatments" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            { emoji.get('man-woman-boy-boy') }Mijn begeleidingen
        </a>
    </li>
    <li class="text-xl font-bold flex flex-col justify-center">
        <a rel=prefetch href="/auth/financials" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            { emoji.get('moneybag') }Mijn omzet
        </a>
    </li>

    {#if $user && $user.level == 3}
        <li class="text-xl font-bold flex flex-col justify-center">
            <a rel=prefetch href="/auth/team" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
                { emoji.get('muscle') }Team
            </a>
        </li>
    {/if}

    <li class="text-xl font-bold flex flex-col justify-center">
        <a rel=prefetch href="/auth/calendar" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            { emoji.get('date') }Mijn agenda
        </a>
    </li>

    {#if $user && $user.level == 3}
        <li class="text-xl font-bold flex flex-col justify-center">
            <a rel=prefetch href="/auth/registerProspect" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
                { emoji.get('heavy_plus_sign') }Meldt cliënt aan
            </a>
        </li>
    {/if}

    <li class="text-xl flex flex-col justify-center">
        {#if $user && $user.paramedicCode != ''}
            <UserItem user = "{$user}" />
        {/if}
    </li>
</ul>