function sum(a) {
    return function(b) {
        if(b) {
            return sum(a + b);
        }
        return a;
    }
}

let res = sum(2)(3)(4)(5)();