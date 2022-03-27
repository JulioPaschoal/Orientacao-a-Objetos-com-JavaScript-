let robo1 = {
    arma: 'lança granada'
}

let robo2 = {

}

console.log(Object.is(robo1, robo2));

robo3 = robo1;

console.log(Object.is(robo1, robo3));