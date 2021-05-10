/* 
Get Leading Candidate

Prompt:

    Given an array of candidates (where each element represents a unique id) and 
    timestamps (each timestamp represents when a ballot was submitted), 
    Find the leading candidate at a given timestamp.

    - The index of the timestamp points to the candidate at the index of candidates;
    - We can assume candidates and timestamps will be of same length;


Constraints:
    - The timestamp received by getLeader may not exist within timestamps
    - 0 >= number of different candidates <= x;

Examples:
    const candidates = [0, 1, 1, 0, 0, 1, 0];
    const timestamps = [0, 5, 10, 15, 20, 25, 30];

    setUp.prototype.getLeader(10) => 1;
    setUp.prototype.getLeader(0) => 0;
    setUp.prototype.getLeader(12) => 1;
    setUp.prototype.getLeader(22) => 0;

Follow-up:
    - What would be the case if there was a tie at a given timestamp?
*/

// O(n) space | O(n) time
function setUp(candidates, timestamps) {
    
    let max = 0;
    let leader = candidates[0];
    this.history = {}; // We track a record of the leader at each timestamp passed
    this.votes = {};
    this.timestamps = timestamps; 

    candidates.forEach((id, i) => {
        this.votes[id] !== undefined ? this.votes[id]++ : this.votes[id] = 1;
        if (this.votes[id] > max) {
            max = this.votes[id];
            leader = id;
        }
        this.history[timestamps[i]] = leader;
    })    

}
 
/*
T = 12
          T
[0, 5, 10, 15, 20, 25, 30] 
 L ->      M        <- R  
                          
We can use a binary search due to the sorted nature of our timestamps

*/

// O(1) space | O(logN) time
// We are cutting our search in half each time
setUp.prototype.getLeader = (timestamp) => {
    let left = this.timestamps[0];
    let right = this.timestamps[this.timestamps.length - 1];
    let mid = Math.floor((left + right) / 2);
    
    if(timestamp === this.timestamps[left]) return this.history[this.timestamps[left]]; 
    if (timestamp === this.timestamps[right]) return this.history[this.timestamps[right]];

    // We reiterate until our left and right pointers overlap
    while (left < right) {
        if (timestamp === this.timestamps[mid]) return this.history[this.timestamps[mid]];
        if (timestamp > this.timestamps[mid]) { 
            left = mid + 1; 
        } else {
            right = mid;
        }
        mid = Math.floor((left + right) / 2);
    }

    // if our pointers overlap and we still havent returned a leader
    // we want to find the next closest vote that has occurred
    return this.history[this.timestamps[left - 1]]; // ex. T => 12, L => 15, R => 15
}

