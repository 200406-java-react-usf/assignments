const popElements = (arr, value) => {
    let popArr = new Array();
    for(let i = 0; i < value; i++){        
        let tempArr = arr.pop();
        popArr.push(tempArr);
    }
    popArr.sort()
    return {arr,popArr}
}

const pushElement = (originalArr, pushedArr) => {
    for(let x=0;x < pushedArr.length;x++){
        originalArr.push(pushedArr[x])
    }
    return originalArr;
}

const addArr = (firstArr, secondArr) => {
    let result = new Array ();
    if(firstArr.length > secondArr.length){
        let diff = firstArr.length - secondArr.length;
        let firstObj = popElements(firstArr,diff);
        let result = addArr(firstObj.arr,secondArr);
        let finalArr = pushElement(result,firstObj.popArr);
        return finalArr;

    }
    else if (secondArr.length > firstArr.length){
        let diff = secondArr.length - firstArr.length;
        let secondObj = popElements(secondArr, diff);
        let result = addArr(secondObj.arr,secondArr);
        let finalArr = pushElement(result,secondObj.popArr);
        return finalArr;
    }
    for(let x=0;x < firstArr.length;x++){
        result.push(firstArr[x] + secondArr[x])
    }
    return result;

}

module.exports = {
    popElements,
    pushElement,
    addArr
}