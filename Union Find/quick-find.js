class QuickFind{

    // index === el number
    // val === el connections
    // initially connecte to itself
    constructor(size){
        this.id = [];
        for(var i = 0; i < size; i++){
            id[i] = i;
        }
    }

    connected(n, m) {
        return arr[n] === arr[m];
    }

    // n val must match m val
    union(n, m) {
        nId = this.id[n];
        mId = this.id[m];
        for(var i = 0; i < id.length; i++) {
            if(n[i] === nId) n[i] = mId;
        }
    }

    
}