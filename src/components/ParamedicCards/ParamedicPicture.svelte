<script>
    export let src;
    export let alt;
    export let size = 72;
    export let borderSize = 4
</script>

<img class="mx-2 h-{size} w-{size} rounded-full border-{borderSize} border-yellow object-cover overflow-hidden" src='images/{ src }.jpg' {alt} loading="lazy" />