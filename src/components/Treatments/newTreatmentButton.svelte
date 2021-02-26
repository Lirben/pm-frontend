<script>
	import NewTreatmentModal from './NewTreatmentModal/newTreatmentModal.svelte';
    import { getContext } from 'svelte';
    import { fly } from 'svelte/transition';

	export let refresh;

    const { open } = getContext('simple-modal');

	const openNewTreatmentModal = () => {
		open(
			NewTreatmentModal,
			{
				
			},
		    {
				styleWindow: {
                    height: '90vh',
				},
				styleContent: {
                    height: '90vh',
                    padding: '0'
				},
				transitionWindow: fly,
				transitionWindowProps: {
					y: 100,
					duration: 1000
				},
			},
			{
                onClose: () => {
                    refresh();
                }
            }
		);
	};

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class="flex flex-col justify-center text-center text-4xl fixed bottom-4 right-4 bg-yellow p-4 px-1 w-20 h-20 rounded-full cursor-pointer border-2 border-white" on:click="{openNewTreatmentModal}">➕</a>