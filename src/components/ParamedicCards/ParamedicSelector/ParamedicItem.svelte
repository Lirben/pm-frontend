<script>
  export let item = undefined;

  export let getOptionLabel = undefined;  
  export let filterText = undefined;
  export let isActive = undefined;
  export let isHover = undefined;
  export let isFirst = undefined;
  
</script>

<div class="flex items-center px-1 py-2">
  <img class="mr-1 w-8 h-8 rounded-full border border-yellow" src="images/{item.code}.jpg" alt="" />
  <div class="text-base">{item.firstName}</div>
</div>
