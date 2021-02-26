<script>
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';
    import MessageModal from './MessageModal.svelte';

    export let button = false;

    const { open } = getContext('simple-modal');

	const openMessageModal = () => {
		open(
            MessageModal,
            { },
		    {
                styleWindow: {
                    'height': '120vh',
                    'padding': '0'
                },
                styleContent: {
                    'height': '120vh',
                    'max-height': '95%',
                    'padding': '0'
                },
                transitionWindow: fly,
                transitionWindowProps: {
                    y: 100,
                    duration: 1000
                }
            }
		);
	};

</script>


<!-- svelte-ignore a11y-missing-attribute -->
{#if button}
    <a class="hidden md:flex md:flex-col md:justify-center text-center text-4xl fixed bottom-4 right-4 bg-yellow p-4 px-1 w-20 h-20 rounded-full cursor-pointer border-2 border-white" on:click="{openMessageModal}">🗨️</a>
{:else}
    <a class="block text-blue font-bold no-underline cursor-pointer" on:click="{openMessageModal}">🗨️Stuur ons een bericht</a>
{/if}