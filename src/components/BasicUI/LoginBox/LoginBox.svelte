<script>
    import emoji from "node-emoji";
    import { login } from '../../../mobielServices/authService'
    import { goto } from '@sapper/app';

    let credentials = { 'uname': '', 'password': '' };
    let errorMessage;

    function areCredentialsFilledIn()
    {
        if(credentials.uname === '' || credentials.password === '')
            return false;

        return true;
    }

    function startHeapSession(username)
    {
        if (typeof heap !== "undefined")
            heap.identify(username);
    }

    async function handleLogin()
    {
        errorMessage = '';

        if(!areCredentialsFilledIn())
            errorMessage = 'Gelieve een gebruikersnaam of passwoord in te geven';

        if(process.browser)        
            if(await login(credentials))
                goto('/auth/treatments');
            else
                errorMessage = 'Incorrecte gebruikersnaam of wachtwoord';     
    }

</script>

<div class="m-auto px-3 py-3 bg-white shadow-xl rounded text-center justify-center w-72 h-56">
    <form on:submit|preventDefault={handleLogin}>                          
        <div class="text-left">
            <div class="absolute mt-2 ml-3 text-grey text-base">{ emoji.get('angel') }</div>
            <input type="text" class="block bg-yellow shadow w-full text-base my-3 pl-10 h-10 rounded" bind:value={ credentials.uname } placeholder = "Gebruikersnaam" />
        </div>
        
        <div class="text-left">
            <div class="absolute mt-2 ml-3 text-grey text-base">{ emoji.get('lock') }</div>
            <input type="password" class="block bg-yellow shadow w-full text-base my-3 pl-10 h-10 rounded" bind:value={ credentials.password } placeholder = "Wachtwoord" />
        </div>
        
        <button class="block h-10 w-full mx-auto my-3 bg-yellow shadow text-white rounded">Login</button>

        {#if errorMessage}
            <span class="text-error">{ errorMessage }</span>
        {/if}
    </form>
</div>