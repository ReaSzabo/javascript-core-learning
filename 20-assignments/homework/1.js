// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

triangleArea = (a, b, c) => {

    var s = (a + b + c) / 2;

    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


console.log(triangleArea(5, 6, 7));