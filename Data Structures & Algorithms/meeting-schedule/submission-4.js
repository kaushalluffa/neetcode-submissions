/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const sortedIntervals = intervals.sort((intA, intB) => intA.start - intB.start)
        for (let i = 1; i<sortedIntervals.length; i++){
            let prevInt = sortedIntervals[i - 1]
            let currInt = sortedIntervals[i]

            if(prevInt.end > currInt.start){
                return false
            }

        }
        return true
    }
}
