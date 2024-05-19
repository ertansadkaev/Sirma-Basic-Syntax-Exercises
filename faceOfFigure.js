function faceOfFigure (figure, a, b) {
    switch (figure) {
        case "square":
            let squareSum = a * a;
            console.log(squareSum.toFixed(2));
        break;
        case "rectangle":
            let rectangleSum = a * b;
            console.log(rectangleSum.toFixed(2));
        break;
        case "circle":
            let circleSum = Math.PI * Math.pow(a, 2);
            console.log(circleSum.toFixed(2));
        break;
        case "triangle": 
            let triangleSum = a * (b / 2);
            console.log(triangleSum.toFixed(2));
        break;
    }
}
faceOfFigure("square", 5);
faceOfFigure("rectangle", 10, 3.5);
faceOfFigure("triangle", 4.5, 20);
faceOfFigure("circle", 10);