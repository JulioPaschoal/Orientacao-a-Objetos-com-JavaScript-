function newObj(x){
    return {
        x: x
    };
}

let y = newObj(1);

function NewObjTwo(x) {
    this.x = x;
}

let z = new NewObjTwo(2);

console.log(y.constructor);
console.log(z.constructor);
