<script>
    export let item = null;
    
    export let getOptionLabel = null;  
    export let filterText = null;
    export let isActive = null;
    export let isHover = null;
    export let isFirst = null;
</script>
  
<div class="flex items-center px-1 py-2">
    <div class="text-base">{item.prospect.firstName} {item.prospect.name}</div>
</div>