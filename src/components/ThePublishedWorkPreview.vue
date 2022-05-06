<template>
  <div className="underSearchPreviewBlock">
    <div className="underSearchPreviewImg">
      <img
        src="https://eurabota.com/uploads/photo_1483349982.jpg"
        alt="auto-repair"
      />
    </div>
    <p className="underSearchShortName">Покраска двери</p>
    <div className="underSearchDatePriceBlock">
      <div>
        <p>20.04.2022</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.underSearchPreviewBlock {
    margin-top: 40px;
    margin-right: 90px;
    width: 279px;
    background: #F9F9F9;
    box-shadow: -2px 2px 4px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.underSearchPreviewBlock img {
    width: 279px;
    height: 174px;
}

.underSearchPreviewBlock:hover {
    box-shadow: 2px 2px 14px 10px rgba(0, 0, 0, 0.08);
}

.underSearchShortName {
    margin-top: 10px;
    margin-bottom: 7px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #222222;
}

.underSearchDatePriceBlock {
    display: flex;
    justify-content: center;
    padding: 0 26px 0 26px;
}

.underSearchDatePriceBlock p {
    font-weight: 600;
    font-size: 20px;
    color: #000000;
}
</style>