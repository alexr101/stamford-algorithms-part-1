class QuickUnion{
    // index === el number
    // val === el connections
    // initially connecte to itself
    constructor(size){
        this.id = [];
        for(var i = 0; i < size; i++){
            id[i] = i;
        }
    }

    root(n) {
        let parent = n;
        while(this.id[parent] !== parent) parent = id[parent];
        return parent;
    }

    // O(n)
    connected(n, m) {
        const rootN = this.root(n);
        const rootM = this.root(m);
        return rootN === rootM;
    }

    // O(n)
    union(n, m) {
        rootN = this.root(n);
        rootM = this.root(m);
        this.id[rootN] = rootM;
    }
}