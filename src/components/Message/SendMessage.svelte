<script>
    import Modal from 'svelte-simple-modal';
    import SendMessageButton from "./SendMessageButton.svelte";

    export let button = false;
</script>

<Modal>
    <SendMessageButton {button}/>
</Modal>