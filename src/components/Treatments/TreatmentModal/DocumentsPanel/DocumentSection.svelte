<script>
    import SectionTitle from '../../../BasicUI/Modal/SectionTitle.svelte';
    import DocumentItem from './DocumentItem.svelte';

    export let title;
    export let documents;
    export let treatmentID;
    export let downloadFile;

    function callDownloadFile(treatmentID, fileName)
    {
        downloadFile(treatmentID, fileName);
    }
</script>

<SectionTitle icon='paperclip' title="{ title }" />

<div class="my-1 mb-4">
    {#if documents && (documents.length > 0) }
        {#each documents as document }
            <div on:click={callDownloadFile(treatmentID, document.fileName)}>
                <DocumentItem documentTitle="{ document.fileName }" />
            </div>
        {/each}
    {:else}
        <div class="flex flex-grow flex-col justify-center text-center">
            <span>Geen documenten gevonden</span>
        </div>
    {/if}
</div>

