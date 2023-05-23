//! Input: nums = [5,3,4,4,7,3,6,11,8,5,11]
//! Output: 3
//! Explanation: The following are the steps performed:
//! - Step 1: [5,3,4,4,7,3,6,11,8,5,11] becomes [5,4,4,7,6,11,11]
//! - Step 2: [5,4,4,7,6,11,11] becomes [5,4,7,11,11]
//! - Step 3: [5,4,7,11,11] becomes [5,7,11,11]
//! [5,7,11,11] is a non-decreasing array. Therefore, we return 3.


// nums.splice(1,1)
// ! now what we need we should go from start to end need to check if the next  no. is smaller if it smaller then remove it 
// ! and we will do this till arr[i]<arr[i+1]
// var  nums =[10,6,5,10,15]
var  nums =[5,3,4,4,7,3,6,11,8,5,11]
// var  nums =[4,5,7,7,13]

var counter=0

function check(nums){
    for (let i = 0; i <nums.length; i++) {
        console.log(i);
        // check2()
        // function check2(){
        //     nums.splice(i+1,1)
        //     if(nums[i]>nums[i+1]){
        //         if(counter==0)counter++
        //         check2()
        //     }     
        // }
       
    }
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i]>nums[i+1]){
    //         counter++
    //         check(nums)            
    //     }        
    // }
}
check(nums)
console.log('counter: ', counter);