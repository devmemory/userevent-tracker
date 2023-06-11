<script>
  import CommonBtn from "src/components/CommonBtn.svelte";
  import { countStore } from "src/store/countStore";

  const increment = () => {
    $countStore += 1;
  };

  const decrement = () => {
    $countStore -= 1;
  };
</script>

<div class="div_counter">
  <p>{$countStore}</p>
  <div>
    <CommonBtn margin="4px" onClick={increment}>Increament</CommonBtn>

    <CommonBtn margin="4px" onClick={decrement}>Decrement</CommonBtn>
  </div>
</div>

<style>
  .div_counter {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .div_counter > p {
    font-size: 20px;
  }

  .div_counter > div {
    display: flex;
  }
</style>
