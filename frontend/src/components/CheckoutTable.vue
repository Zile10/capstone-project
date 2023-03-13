<template>
        <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col"># 
              <button class="sort-btn" onclick="sortList()" value="numUp">
                Price: <img src="https://img.icons8.com/material-outlined/24/null/numerical-sorting-12.png">
              </button>
            </th>
            <th scope="col">Item Name</th>
            <th scope="col">Price Per Item</th>
            <th scope="col">Price Total</th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove Item</th>
          </tr>
        </thead>
        <tbody class="products-table">

        </tbody>

        <tfoot>

        </tfoot>
      </table>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>