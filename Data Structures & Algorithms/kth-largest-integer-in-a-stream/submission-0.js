class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinHeap()
        this.k = k
        for(let n of nums){
            this.minHeap.push(n)
        }
        while (this.minHeap.size() > this.k){
            this.minHeap.pop()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val)
        if(this.minHeap.size() > this.k){
            this.minHeap.pop()
        }
        return this.minHeap.peek()
    }
}
class MinHeap{
    constructor(){
        this.heap = []
    }
    push(val){
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }
    _bubbleUp(i) {
        while (i > 0){
            const parent = Math.floor((i - 1) / 2);
            if(this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent
        }
    }
    peek(){
        return this.heap[0];
    }
    size(){
       return this.heap.length
    }
    pop(){
        const min = this.heap[0]
        const last = this.heap.pop()
        if(this.heap.length > 0){
            this.heap[0] = last
            this._bubbleDown(0)
        }
        return min;

    }
    _bubbleDown(i){
        const n = this.heap.length;
        while(true){
            let smallest = i;
            const left = (i * 2) + 1
            const right = (i * 2) + 2
            if(left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if(smallest === i ) break;
            [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
            i = smallest;
        }
    }
}