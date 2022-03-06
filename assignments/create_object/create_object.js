function CreateObject(arr) {
    // Write your code here
    const d ={}
    
    for (let i = 0;i<arr.length;i++){
        if(i%2===0){
            d[arr[i]] = arr[i+1]
        }
        
    }
    return d 
}

module.exports = CreateObject;
