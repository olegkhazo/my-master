<template>
   <div className="currentWorkPreviewBlock">
            <div className="currentWorkPreviewImg">
                <img src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair" />
            </div>
            <p className="currentWorkShortName">Покраска двери</p>
            <div className="currentWorkDatePriceBlock">
                <div>
                    <p>20.04.2022</p>
                </div>
                <div>
                    <p><span>$250</span></p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.currentWorkPreviewBlock {
    margin-top: 40px;
    margin-right: 90px;
    width: 279px;
    background: #F9F9F9;
    box-shadow: -2px 2px 4px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.currentWorkPreviewBlock img {
    width: 279px;
    height: 174px;
}

.currentWorkPreviewBlock:hover {
    box-shadow: 2px 2px 14px 10px rgba(0, 0, 0, 0.08);
}

.currentWorkShortName {
    margin-top: 10px;
    margin-bottom: 7px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #222222;
}

.currentWorkDatePriceBlock {
    display: flex;
    justify-content: space-between;
    padding: 0 26px 0 26px;
}

.currentWorkDatePriceBlock p {
    font-weight: 600;
    font-size: 20px;
    color: #000000;
}

.currentWorkDatePriceBlock p span {
    color: #37A000;
}
</style>