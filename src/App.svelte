<script>
    import { Router, Route } from "svelte-routing"
    import Home from "./pages/home/Home.svelte";
    import Layout from "./components/Layout.svelte";
    import Roles from "./pages/roles/Roles.svelte";
    import Graphs from "./pages/graphs/Graphs.svelte";
    import Coverage from "./pages/coverage/Coverage.svelte";
    import pages from "./lib/pages";
</script>

<div class="w-full bg-background dark:bg-background-dark text-lg">
  <Router>
    {#each pages as page }
      <Route path={page.href}>
        <Layout component={page.component}/>
      </Route>
    {/each}
  </Router>
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>