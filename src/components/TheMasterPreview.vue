<template>
    <div className="findMasterPreviewBlock">
            <div className="findMasterPreviewImg">
                <img src="https://eurabota.com/uploads/photo_1483349982.jpg" alt="auto-repair"  />
            </div>
            <div className="findMasterShortNameBlock">
                <p className="findMasterShortName">Покраска капота</p>
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.findMasterPreviewBlock {
    margin-top: 40px;
    margin-right: 90px;
    width: 279px;
    background: #F9F9F9;
    box-shadow: -2px 2px 4px 4px rgba(0, 0, 0, 0.05);
    cursor: pointer;
}

.findMasterPreviewBlock img {
    width: 279px; 
    height: 174px;
}

.findMasterPreviewBlock:hover {
    box-shadow: 2px 2px 14px 10px rgba(0, 0, 0, 0.08);
}

.findMasterShortNameBlock {
    padding-top: 22px;
    padding-bottom: 10px;
}

.findMasterShortName {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    color: #222222;
}
</style>