<script>
	import Hamburger from "./Hamburger.svelte"
	import Logo from "./Logo.svelte"
	import MenuHandler from "./MenuHandler.svelte"
	import Sidebar from "./Sidebar.svelte"

	let open = false

	export let segment
</script>

<header class="z-50 fixed w-full p-0 m-0 bg-grey-lighter">

	<nav class="h-11 md:h-24 lg:h-24 p-0 m-0 flex justify-between">
		<Logo />
        
        <Hamburger bind:open={open} />

		<div class="container text-lg hidden lg:flex items-center">
			<MenuHandler { segment }/>
		</div>

	</nav>

</header>

<Sidebar { segment } bind:open />