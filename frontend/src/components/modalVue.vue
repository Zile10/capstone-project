<template>
<!-- Modal -->
<div class="modal fade" :id="id + '-Modal'" tabindex="-1" :aria-labelledby="id + '-Modal'" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <slot name="modal-header"></slot>
      <div class="modal-body">
        
        <slot></slot>
      </div>
      <slot name="modal-footer"></slot>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props: ["id"],
};
</script>
<style scoped>
  img {
    max-width: 150px;
  }
  .modal {
    color: #111 !important;
  }
  .modal-dialog {
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 16px;
  }
  .modal-content {
    background-color: transparent;
    border: none;
  }
  .modal-content * {
    border: none;
  }
</style>
