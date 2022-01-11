<script>
    import Navbar from "./navbar/Navbar.svelte";
    import Footer from "./Footer.svelte";

    export let component;
</script>

<div class="min-h-screen flex flex-col">
  <Navbar/>
  <div class="flex-grow">
    <div class="container my-20 mx-auto max-w-7xl px-4 text-black dark:text-white">
      <svelte:component this={component}/>
    </div>
  </div>
  <Footer />
</div>