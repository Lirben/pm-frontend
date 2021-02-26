<script>
    export let text = '';
    export let tooltipText = '';
</script>

<style>
    .tooltip .tooltip-text {
      visibility: hidden;
      text-align: center;
      padding: 2px 6px;
      position: absolute;
      z-index: 100;
    }

    .tooltip:hover .tooltip-text {
      visibility: visible;
    }
</style>

<p class="tooltip">
    { text }
    <span class='tooltip-text bg-yellow p-3 -mt-6 -ml-6 rounded'>
        { tooltipText }
    </span>
</p>