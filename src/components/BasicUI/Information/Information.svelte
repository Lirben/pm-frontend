<script>
    import SendMessage from '../../Message/SendMessage.svelte';
    import MobielTelephone from '../Footer/MobielTelephone.svelte';

    export let message;
</script>


<div class="text-base bg-grey-lighter rounded-lg p-2">
    <div class="text-center">{ message }</div>
    <div class="text-center flex flex-col md:flex-row justify-center">
        <SendMessage />
        <span class="mx-1">of bel ons op</span>
        <MobielTelephone />
    </div>
</div>