module.exports = function solveEquation(equation) {



        equation = equation.replace(/\s/g, '');

        let a = parseInt(equation.replace("`*x^2`", "$`"));

        console.log(a);

        let arr1=equation.split(`*`); ///-20    x^2 -11111   x-5465465

        let arrc= arr1[2].split(`x`);
        let c = arrc[1];

        console.log(c);

        let arrb=arr1[1].split(`x^2`);
        let b = arrb[1];

        console.log(b);

        let D = b*b - 4 * a * c;
        let arr = [];
        console.log ("D="+D);

        if (D > 0) {
            let x1 = (-b + Math.sqrt(D)) / (2 * a);
            let x2 = (-b - Math.sqrt(D)) / (2 * a);

            console.log ("x1="+x1+" x2="+ x2);


                arr.push(Math.round(x1));
                arr.push(Math.round(x2));

                if (x1 > x2) {
                    arr.reverse();

                }


        }

    return (arr);



    }

       
    
    




