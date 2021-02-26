<script>
    import SendMailToggle from "../../BasicUI/SendMailToggle.svelte";

    export let treatment;
    export let conversation;
    export let place;
    export let sendMail;
</script>

{#if (treatment && treatment.treatmentID != '') && (conversation && conversation.code != '') && (place && place.type != '') }
    <SendMailToggle email="{treatment.prospect.email}" bind:checked="{sendMail}" />
{/if}