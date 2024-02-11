//CoffeeMachine
//coffeeBeans
//makeCoffee
{
    type CoffeeCup = {
        shots: number,
        volumn : number
    }
    class CoffeeMaker{
        //shotNumber : number;
        BEANS_GRAMM_PER_SHOT : number = 7;
        coffeeBeans : number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }
        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots*this.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough Coffee');
            }
             this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
             return {
                 shots : shots,
                 volumn : shots * this.BEANS_GRAMM_PER_SHOT
             }
        }
        // if(coffeeBeans < shots*BEANS_GRAMM_PER_SHOT){
        //     
        // }
        // coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        // return {
        //     shots : shots,
        //     volumn : shots * BEANS_GRAMM_PER_SHOT
        // }
    }
    const maker = new CoffeeMaker(10);
    console.log(maker);
}