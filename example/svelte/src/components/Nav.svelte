<script>
  // @ts-nocheck
  import routeUtil from "src/util/routeUtil";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const isSelected = (path) => {
    return $page.url.pathname === path;
  };
</script>

<header>
  <img src="/favicon.png" alt="logo" />
  <div>
    {#each Object.keys(routeUtil) as e}
      <button
        data-selected={isSelected(routeUtil[e])}
        on:click={() => goto(routeUtil[e])}
      >
        {e}
      </button>
    {/each}
  </div>
</header>

<style>
  header {
    height: var(--header-height);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px var(--shadow-color);
    position: absolute;
    top: 0;
  }

  header > img {
    height: 30px;
    margin-left: 20px;
    cursor: pointer;
  }

  header > img:hover {
    transform: scale(1.05);
  }

  header > div {
    display: flex;
    margin-right: 10px;
  }

  header > div > button {
    margin: 0 10px 0 10px;
  }

  header > div > button:hover {
    color: #c62828;
    box-shadow: 0 1px currentColor;
    transform: translateY(-1px);
    transition: 0.6s ease;
  }

  header > div > button[data-selected="true"] {
    color: #c62828;
  }
</style>
