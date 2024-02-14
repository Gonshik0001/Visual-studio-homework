function total(shopList, nds) {
    const result = [];
        for(let i=0; i<shopList.length; i++){
            result.push(nds(shopList[i]));
        }
        return result;
    }
module.exports = total;