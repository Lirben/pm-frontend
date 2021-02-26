<script>
    import emoji from "node-emoji";
    import {updatePassword} from '../../mobielServices/authService';

    let oldPassword;
    let newPassword;
    let errorMessage = '';
    let success = false;

    async function changePassword()
    {
        errorMessage = '';

        if(arePasswordSet())
            if(arePasswordsDifferent())        
                await updatePassword(oldPassword, newPassword)
                    .then(response => {
                        oldPassword = '';
                        newPassword = '';
                        success = true
                    }, error => {
                        errorMessage = 'Er is iets fout gelopen!';
                    });
    }

    function arePasswordSet()
    {
        if(oldPassword && newPassword)
            return true;
        
        errorMessage = 'Er is geen passwoord ingevuld!';
        return false;
    }

    function arePasswordsDifferent()
    {
        if(oldPassword.localeCompare(newPassword) != 0)
            return true;

        errorMessage = 'Het nieuwe wachtwoord is gelijk aan het oude wachtwoord';
        return false;
    }
</script>

<svelte:head>
    <meta name="description" content="Verander je wachtwoord.">
    <meta name="author" content="Praktijk Mobiel">
    <meta property="og:locale" content="nl_NL">
    <link rel="canonical" href="https://www.praktijkmobiel.be/auth/changePassword">

    <title>Verander je wachtwoord | Praktijk Mobiel</title>
</svelte:head>

<section class="bg-login-image bg-clip-content pb-0 bg-cover bg-fixed h-screen">

    <div class=".mx-auto px-0 w-full lg:px-8">

        <div class="flex h-screen">
            <div class="m-auto px-3 py-3 bg-white shadow-xl rounded text-center justify-center w-72 h-56">
                <form on:submit|preventDefault={changePassword}>                          
                    <div class="text-left">
                        <div class="absolute mt-2 ml-3 text-grey text-base">{emoji.get('lock')}</div>
                        <input type="password" class="block bg-yellow shadow w-full text-base my-3 pl-10 h-10 rounded" bind:value={ oldPassword } placeholder = "Huidig wachtwoord" />
                    </div>
                    
                    <div class="text-left">
                        <div class="absolute mt-2 ml-3 text-grey text-base">{emoji.get('lock')}</div>
                        <input type="password" class="block bg-yellow shadow w-full text-base my-3 pl-10 h-10 rounded" bind:value={ newPassword } placeholder = "Nieuw wachtwoord" />
                    </div>
                    
                    <button class="block h-10 w-full mx-auto my-3 bg-yellow shadow text-white rounded">Wachtwoord wijzigen</button>
            
                    {#if errorMessage}
                        <span class="text-error font-bold">{ errorMessage }</span>
                    {/if}

                    {#if success}
                        <span class="font-bold">Wachtwoord gewijzigd</span>
                    {/if}
                </form>
            </div>
        </div>
    </div>

</section>