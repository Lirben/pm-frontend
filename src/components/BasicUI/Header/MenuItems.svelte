<script>
    import SendMessage from "../../Message/SendMessage.svelte";

    export let open = false;
    export let segment;

    function changePage() {
        open = false;
    }

    $: console.log(segment);
</script>

<ul>
    <li class="block text-2xl font-bold mt-4  lg:inline-block lg:mt-0 mr-10">
        <a rel=prefetch href="/doelgroep/0-6" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            Doelgroepen
        </a>
    </li>
    <li class="block text-2xl font-bold mt-4 lg:inline-block lg:mt-0 mr-10">
        <a rel=prefetch href="/werkwijze" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            Werkwijze
        </a>
    </li>
    <li class="block text-2xl font-bold mt-4 lg:inline-block lg:mt-0 mr-10">
        <a rel=prefetch href="/wie-zijn-we" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            Wie zijn we
        </a>
    </li>
    <li class="block text-2xl font-bold mt-4 lg:inline-block lg:mt-0 mr-10">
        <a rel=prefetch href="/Blog" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            Blog
        </a>
    </li>
    <li class="block text-2xl font-bold mt-4 lg:inline-block lg:mt-0 mr-10">
        <a rel=prefetch href="/prijs" on:click={changePage} class="text-grey visited:text-grey hover:no-underline hover:text-grey-dark">
            Prijs
        </a>
    </li>
    <li class="block text-2xl lg:inline-block bg-yellow mt-4 mr-10 lg:mt-0 pl-0 p-5 lg:pl-5">
        <a rel=prefetch href="/reserveer"  on:click={changePage} class="text-grey font-bold visited:text-grey hover:no-underline hover:text-grey-dark">
            Aanmelden
        </a>
    </li>
</ul>


{#if segment && segment.localeCompare('reserveer') != 0}
    <a class="md:hidden fixed bottom-4 right-0 bg-yellow py-4 px-1 rounded-l-lg font-bold text-lg" href="/reserveer">Afspraak maken</a>
{/if}

<SendMessage button="{true}" />
 


