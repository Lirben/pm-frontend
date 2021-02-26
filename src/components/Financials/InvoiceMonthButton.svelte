<script>
    import emoji from "node-emoji";
    import {invoiceMonth } from '../../mobielServices/financialService';

    export let month;
    export let year;
    export let paramedic;

    const invoicableMonth = isInvoicableMonth();

    function isInvoicableMonth()
    {
        const date = new Date();

        if((month < date.getMonth() && year <= date.getFullYear()) || year < date.getFullYear())
            return true;

        return false;
    }
    
    async function invoiceThisMonth()
    {
        await invoiceMonth(paramedic.code, month, year);
    }
</script>

{#if invoicableMonth}    
    <div class="px-2 my-1 md:px-32">
        <div class="w-auto rounded-lg m-2 p-2 h-12 bg-green text-2xl font-bold text-center cursor-pointer" on:click={invoiceThisMonth}>
            { emoji.get('e-mail') }Factuur versturen
        </div> 
    </div>
{/if}