<script>
    import MdExpandMore from "svelte-icons/md/MdExpandMore.svelte";
    import Button from "../Button.svelte";
    import MobileMenu from "./MobileMenu.svelte";
    import pages from "../../lib/pages";
    import { darkMode, user } from "../../lib/stores";
    import { auth } from "../../lib/firebase";
    import {
        signInWithPopup,
        browserSessionPersistence,
        GoogleAuthProvider,
    } from "firebase/auth";
    import { onMount } from "svelte";

    let open = false;

    $: document.body.className = $darkMode;

    function change() {
        $darkMode = $darkMode === "dark" ? "light" : "dark";
        console.log($darkMode);
    }

    onMount(() => {
        auth.onAuthStateChanged((u) => (u ? ($user = u) : ($user = null)));
    });

    async function accedi() {
        try {
            await auth
                .setPersistence(browserSessionPersistence)
                .then(() => signInWithPopup(auth, new GoogleAuthProvider()));
        } catch (error) {
            console.error(error);
        }
    }

    async function esci() {
        await auth.signOut();
    }
</script>

<nav
    class="w-full bg-navbar-background dark:bg-navbar-background-dark shadow-lg overflow-hidden"
>
    <!-- Parte alta -->
    <div class="max-w-7xl mx-auto px-4 flex justify-between">
        <!-- Logo e link -->
        <div class="flex space-x-7">
            <div class="flex justify-center items-center h-16">
                <img
                    src="/img/logo.jpg"
                    alt="Logo"
                    class="h-4/6 mr-2 rounded-md block"
                />
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:inline-flex flex-row items-center space-x-7">
                {#each pages as { href, name }}
                    <Button
                        useLink
                        bgDark="navbar-link-dark"
                        bg="navbar-link"
                        {href}
                    >
                        {name}
                    </Button>
                {/each}
            </div>
        </div>
        <!-- Secondary Navbar items -->
        <div class="hidden md:flex items-center space-x-3 ">
            {#if $user}
                <Button useLink bgDark="navbar-link-dark" bg="navbar-link">
                    <span class="text-white">Ciao, {$user.displayName}</span>
                </Button>
            {/if}
            <Button useLink href="" on:click={change}>Dark Mode</Button>
            {#if $user}
                <Button on:click={esci}>Esci</Button>
            {:else}
                <Button on:click={accedi}>Accedi</Button>
            {/if}
        </div>
        <!-- Or mobile menu button -->
        <div class="md:hidden flex items-center">
            <div
                class="outline-none w-10 h-10 text-gray-500 hover:text-gray-300 cursor-pointer"
                on:click={() => (open = !open)}
            >
                <MdExpandMore />
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <MobileMenu bind:open on:darkModeChange={change} />
</nav>
