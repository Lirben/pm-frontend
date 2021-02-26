<script>
    import emoji from "node-emoji";
</script>

<div class="bg-red text-left min-h-10 py-2 px-2 flex flex-row">
    <div class="flex-none w-16 text-center flex flex-col justify-center">{ emoji.get('warning') }</div>
    <div class="my-1 h-12 text-white text-base leading-tight font-bold flex flex-col justify-center">
        <slot></slot>
    </div>
</div>
