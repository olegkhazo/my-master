<template>
  <div className="withoutWorkBlock">
    <p>ПУСТО</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.withoutWorkBlock {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 279px;
  height: 243px;
  background: #f9f9f9;
  box-shadow: -2px 2px 4px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.withoutWorkBlock:hover {
  box-shadow: 2px 2px 14px 10px rgba(0, 0, 0, 0.08);
}

.withoutWorkBlock p {
  font-size: 30px;
  font-weight: 600;
  color: #707070;
}
</style>