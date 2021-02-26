<script>
    import emoji from "node-emoji";

    export let item = undefined;
      
    export let getOptionLabel = undefined;  
    export let filterText = undefined;
    export let isActive = undefined;
    export let isHover = undefined;
    export let isFirst = undefined;
    
  </script>
  
  <div class="flex items-center px-1 py-2">
    { emoji.get(item.icon) }
    <div class="text-base">{item.label}</div>
  </div>
  