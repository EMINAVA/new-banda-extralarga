import Home from "../pages/home/Home.svelte";
import Roles from "../pages/roles/Roles.svelte";
import Graphs from "../pages/graphs/Graphs.svelte";
import Coverage from "../pages/coverage/Coverage.svelte";
import Contacts from "../pages/contacts/Contacts.svelte";

export default [
    { name: "Home", href: "/", component: Home },
    { name: "Ruoli", href: "/roles", component: Roles },
    { name: "Grafici", href: "/graphs", component: Graphs },
    { name: "Copertura", href: "/coverage", component: Coverage },
    { name: "Contatti", href: "/contacts", component: Contacts }
]