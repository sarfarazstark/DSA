function canSplit(arr) {
    let leftSum = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        leftSum += arr[i];
    }
    
    let rightSum = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        rightSum += arr[i];
        leftSum -= arr[i];
        
        if (rightSum === leftSum) {
            return true;
        }
    }
    
    return false;
}
