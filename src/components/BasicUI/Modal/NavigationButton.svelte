<script>
    import emoji from "node-emoji";

    export let text;
    export let icon;
</script>

{ emoji.get(icon) }
<span class="text-sm">{ text }</span>