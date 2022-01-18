<script>
    import { Router, Route } from "svelte-routing"
    import Home from "./pages/home/Home.svelte";
    import Layout from "./components/Layout.svelte";
    import Roles from "./pages/roles/Roles.svelte";
    import Graphs from "./pages/graphs/Graphs.svelte";
</script>

<div class="w-full bg-background dark:bg-background-dark text-lg">
  <Router>
    <Route path="/">
      <Layout component={Home}/>
    </Route>
    <Route path="/roles">
      <Layout component={Roles}/>
    </Route>
    <Route path="/graphs">
      <Layout component={Graphs}/>
    </Route>
  </Router>
</div>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>