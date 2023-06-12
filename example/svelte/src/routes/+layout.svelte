<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import { tracker } from "userevent-tracker";
  import "./index.css";
  import Nav from "src/components/Nav.svelte";

  onMount(() => {
    tracker({ showConsole: true });
  });
</script>

<main class="main_app">
  <Nav />
  <slot />
</main>
