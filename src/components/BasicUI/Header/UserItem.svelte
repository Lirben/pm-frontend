<script>
    import { logout} from '../../../mobielServices/authService';
    import ParamedicPicture from '../../ParamedicCards/ParamedicPicture.svelte';

    export let user;
</script>

<style>
    .dropdown:hover .dropdown-menu {
        display: block;
        background-color: #fff;
    }
</style>


<div class="dropdown lg:cursor-pointer my-0 p-0">
    <div class="text-xl text-grey font-bold rounded inline-flex items-center">
        <ParamedicPicture src="{user.paramedicCode}" alt="Foto van {user.username}" size="10" borderSize="2" />
        { user.username }
        &#9660
    </div>
    
    <ul class="dropdown-menu absolute hidden border-black shadow-lg rounded-b-lg text-base pt-1">
        <li class=""><a class="hover:bg-yellow py-2 px-4 block whitespace-no-wrap" href="/auth/profile">Mijn profiel</a></li>
        <li class=""><a class="hover:bg-yellow py-2 px-4 hidden lg:block whitespace-no-wrap" href="/auth/schedule">Mijn schema</a></li>
        <li class=""><a class="hover:bg-yellow py-2 px-4 hidden lg:block whitespace-no-wrap" href="/auth/changePassword">Verander wachtwoord</a></li>
        <!-- svelte-ignore a11y-missing-attribute -->
        <li class=""><a class="rounded-b  hover:bg-yellow py-2 px-4 block whitespace-no-wrap" on:click="{logout}">Afmelden</a></li>
    </ul>
</div>

