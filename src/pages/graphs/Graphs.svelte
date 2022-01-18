<script>
    import BudgetChart from "../home/BudgetChart.svelte";
    import UsedBudgetChart from "../home/UsedBudgetChart.svelte";
    import DataChart from "./DataGraph.svelte";
    import DonutChart from "../../components/DonutChart.svelte";

    import fiberDir from "./data/fiber_diretto.json"
    import fiberConc from "./data/fiber_concessione.json"
    import wlConc from "./data/wireless_concessione.json"
    import fiberProgress from "./data/fiber_progress.json"
    import wirelessProgress from "./data/wireless_progress.json"

    const dataCantieri = [{ group: "In concessione", value: 21697 }, { group: "Diretti", value: 658 }]
    const dataInterventi = [{ group: "In concessione", value: 7438 }, { group: "Diretti", value: 661 }]
</script>

<div class="grid grid-cols-3 md:grid-cols-6 gap-6">
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <BudgetChart/>
  </div>
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <DonutChart data={fiberProgress} title="Progresso Fibra" label="Comuni"/>
  </div>
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <DonutChart data={wirelessProgress} title="Progresso Wireless" label="Comuni"/>
  </div>
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <DonutChart data={dataCantieri} title="Cantieri" label="Cantieri"/>
  </div>
  <div class="card order-first bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <DonutChart data={dataInterventi} title="Interventi Fibra" label="Interventi"/>
  </div>
  <div class="card bg-white dark:bg-navbar-background-dark col-span-3 row-span-3">
    <UsedBudgetChart/>
  </div>
  <div class="card bg-white dark:bg-navbar-background-dark col-span-3 md:col-span-6 row-span-2 px-8">
    <DataChart data={fiberDir} title="Stato Interventi Fibra Diretti"/>
  </div>
  <div class="card bg-white dark:bg-navbar-background-dark col-span-3 md:col-span-6 row-span-2 px-8">
    <DataChart data={fiberConc} title="Stato Interventi Fibra in Concessione"/>
  </div>
  <div class="card bg-white dark:bg-navbar-background-dark col-span-3 md:col-span-6 row-span-2 px-8">
    <DataChart data={wlConc} title="Stato Interventi Wireless in Concessione"/>
  </div>
</div>

<style lang="postcss">
    @tailwind components;

    .card {
        @apply flex justify-between  py-4 rounded-lg shadow-lg;
        @screen md {
            @apply space-x-6;
        }
    }
</style>