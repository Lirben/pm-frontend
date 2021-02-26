<script>
    import MenuHandler from "./MenuHandler.svelte"

	export let segment;
	export let open = false
</script>

<aside class="fixed z-30 w-screen h-screen bg-white shadow-lg" class:open>
	<div class="p-12 mt-14 text-xl">
		<MenuHandler { segment } bind:open />
    </div>
</aside>

<style>
	aside {
		top: -100%;
		transition: top 0.3s ease-in-out
	}
	
	.open {
		top: 0
	}
</style>