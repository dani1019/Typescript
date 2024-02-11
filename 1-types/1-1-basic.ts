/**
 * Javascript
 * primitive: number,string, boolean,bigint,symbol, null,undefined
 * Object : funtion, array・・・・
 */

//number
const num:number = -6;

// string
const str:string = 'hello';

// boolean
const boal:boolean = false;

//undefined
let age:number | undefined
age = undefined;
age = 1;
function find(): number | undefined{
    return undefined;
}

//null
//가능한 한 쓰지 않는 것이 좋음
let person: null;
person = null;

//unknown 타입이 정해지지 않는 상태
//가능한 한 쓰지 않는 것이 좋음
let notSure: unknown = 0;
notSure = 'he';
notSure = true;

let person2: string | null;

//any 가능한 한 쓰지 않는 것이 좋음
let anything : any = 0;
anything = 'hello';


//void
function print(): void {
    console.log('hello');
    return;
}

//아래와 같이 쓰는 경우는 없음
let unusable: void = undefined;

//never
//리턴 값이 전혀 없을 때
function throwError(messgae: string) : never{
    //message → server(log)
    throw new();
    /**
     * while(true)
     */
}

//object
//가능한 한 쓰지 않는 것이 좋음
//구체적으로 선언하는 것이 좋음
let obj: object;
function acceptSomeObject(obj: object){
}

acceptSomeObject({ name: 'ellie'});