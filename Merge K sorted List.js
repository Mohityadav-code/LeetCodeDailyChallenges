//! You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
!
//! Merge all the linked-lists into one sorted linked-list and return it.
!
 !
!
//! Example 1:
!
//! Input: lists = [[1,4,5],[1,3,4],[2,6]]
//! Output: [1,1,2,3,4,4,5,6]
//! Explanation: The linked-lists are:
//! [
//!   1->4->5,
//!   1->3->4,
//!   2->6
//! ]
//! merging them into one sorted list:
//! 1->1->2->3->4->4->5->6
console.log("hello ");
var lists = [[1,4,5],[1,3,4],[2,6]]
var allElements=[]
function mergeKList(lists) {
    for (let i = 0; i < lists.length; i++) {
        for (let j = 0; j < lists[i].length; j++) {
            allElements.push(element)
        } 
    }
    const sorted=allElements.sort((a,b)=>a-b)
    return sorted
}
mergeKList(lists)
