<script>
    import LoginBox from "./LoginBox.svelte";

    export let authorized = false;
</script>

<section class="bg-login-image bg-clip-content pb-0 bg-cover bg-fixed h-screen">

    <div class=".mx-auto px-0 w-full lg:px-8">

        <div class="flex h-screen">
            <LoginBox bind:authorized />
        </div>
    </div>

</section>