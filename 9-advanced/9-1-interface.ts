type PositionType ={
    x: number;
    y: number;
}
interface PositionInterface {
    x: number;
    y: number;
}

//object
const obj1 : PositionType = {
    x : 1,
    y : 1
};

const obj2 : PositionInterface = {
    x : 1,
    y : 1,
    z : 1  
};

//class
class Pos1 implements PositionType{
    x: number;
    y: number;
}

class Pos2 implements PositionInterface{
    x: number;
    y: number;
    z: number;
}

//Extends
interface ZPositionInterface extends PositionInterface {
    z : number;
}

type ZpositionType = PositionType & {z: number};

//only interfaces can be merge
//Type can't
interface PositionInterface{
    z : number;
}

//Type aliases can use computed properties
type Person = {
    name : string,
    age : number
}

type Name = Person['name'];  //string

type NumberType = number;
type Direction = 'left' | 'right'