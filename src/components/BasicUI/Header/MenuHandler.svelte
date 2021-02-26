<script>
    import MenuItems from "./MenuItems.svelte"
	import MenuItemsPrivate from "./MenuItemsPrivate.svelte"
    
    export let open = false;
    export let segment;
</script>


{#if segment !== 'auth'}

    <MenuItems bind:open { segment }  />

{:else}

    <MenuItemsPrivate bind:open />

{/if} 
