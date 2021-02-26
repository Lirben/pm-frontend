<script>
    import { user } from '../../stores/authStore';
    import { getCommissions } from '../../mobielServices/paramedicService';
    import ParamedicPicture from '../../components/ParamedicCards/ParamedicPicture.svelte';

    let commissions;

    async function loadCommissions()
    {
        commissions = await getCommissions($user.paramedicCode);
    }

    $: {
        if($user)
            loadCommissions();
    }
</script>

<svelte:head>
    <meta name="description" content="Bekijk jouw profiel.">
    <meta name="author" content="Praktijk Mobiel">
    <meta property="og:locale" content="nl_NL">
    <link rel="canonical" href="https://www.praktijkmobiel.be/auth/profile">

    <title>Bekijk jouw profiel | Praktijk Mobiel</title>
</svelte:head>

<section class="bg-grey-light text-center mx-0 px-0 md:px-36 pt-36 md:pt-64 lg:pt-44 min-h-screen">

    <div class="px-0 mx-0 bg-white rounded-lg text-lg">
        {#if $user}
            <h1 class="text-yellow font-bold text-4xl text-center">Profiel van {$user.username}</h1>
            
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="md:col-span-1 flex flex-col justify-center text-center my-4">
                    <div class=" flex flex-row justify-center">
                        <ParamedicPicture src="{$user.paramedicCode}" alt="Foto van {$user.username}" />  
                    </div>
                </div>
                <div class="md:col-span-2 flex flex-col justify-start text-center my-4">            
                    <div class="flex flex-col justify-start">
                        <h2 class="text-center text-yellow font-bold text-2xl mb-12">Commissie afspraken</h2>
                        {#if commissions}
                            {#each commissions as commission}
                                <div class="grid grid-cols-2">
                                    <div class="font-bold text-right mx-1">{commission.conversationName}:</div>
                                    <div class="text-left mx-1">{commission.percentage * 100} %</div>
                                </div>
                            {/each}
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </div>

</section>

<!-- Deze divs zijn toegevoegd om deze kleuren aan de css file toe te voegen-->
<div class="hidden bg-blue"></div>
<div class="hidden bg-purple"></div>
<div class="hidden border-4"></div>