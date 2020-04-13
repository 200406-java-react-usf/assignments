const addArr = (arr1, arr2) => 
{
    let sumArr = new Array();
    if (arr1.length > arr2.length)
    {
        for (let i = 0; i < arr1.length; i++)
        {
            if(arr2[i] == undefined) sumArr[i] = arr1[i];
            else sumArr[i] = arr1[i] + arr2[i];     
        }
        return sumArr;
    }
    else
    {
        for (let i = 0; i < arr2.length; i++)
        {
            if(arr1[i] == undefined) sumArr[i] = arr2[i];
            else sumArr[i] = arr1[i] + arr2[i];    
        }
        return sumArr;
    }

};

module.exports = 
{
    addArr
};