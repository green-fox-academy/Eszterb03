let xCenterCoor1: number;
let yCenterCoor1: number;
let widthOfEllipse: number;
let heightifellipse:number;

class Ellipse {
    xCoordCenter: number;
    yCoordCenter :number;
    height: number;
    width: number;

    constructor( xCoordCenter: number = 100, // megadhatok default értékeket, de feltudom írni 
        yCoordCenter :number = 100,
        height: number = 51.5,
        width: number = 50){
        this.xCoordcenter = xCoordCenter; //ez a this referál a first. lentebbb
        this.yCoordCenter = yCoordCenter; 
        this.height = height;
        this.width = width;
    }
}

let first: Ellipse = new Ellipse();
// first.xCoordcenter = 100;