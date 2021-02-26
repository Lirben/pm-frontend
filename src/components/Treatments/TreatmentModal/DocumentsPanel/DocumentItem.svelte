<script>
    import emoji from "node-emoji";

    export let documentTitle;
</script>

<div class="bg-grey-lighter text-left px-2">          
    <div class="flex flex-row h-8 border-b border-grey">
        <div class="flex flex-none flex-col justify-center w-16">
            { emoji.get('page_with_curl') }
        </div>
        <div class="flex flex-grow flex-col justify-center">
            { documentTitle }.pdf
        </div>
    </div>
</div>