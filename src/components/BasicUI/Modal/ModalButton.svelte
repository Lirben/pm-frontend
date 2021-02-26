<script>
    import Spinner from "../Spinner.svelte";
    import emoji from "node-emoji";

    export let text;
    export let icon;
    export let showLoadingAnimation = false;
    export let onClick;
</script>

<div class="flex flex-row justify-center w-auto p-2 h-12 text-2xl font-bold text-center cursor-pointer { $$props.class }  " on:click={onClick}>
           
    {#if showLoadingAnimation}

        <div class="flex flex-col justify-center"><Spinner /></div>

    {:else}

        <div class="flex flex-col justify-center">{ emoji.get(icon) }</div>

    {/if}
                   
    <div class="flex flex-col justify-center">{ text }</div>

</div>