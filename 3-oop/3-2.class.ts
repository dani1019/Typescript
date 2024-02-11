{
    type CoffeeCup = {
        shots: number,
        volumn : number
    }
    class CoffeeMaker{
        //shotNumber : number;
        static BEANS_GRAMM_PER_SHOT : number = 7;
        coffeeBeans : number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans : number) : CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots*CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough Coffee');
            }
             this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
             return {
                 shots : shots,
                 volumn : shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT
             }
        }
    }
    const maker= CoffeeMaker.makeMachine(34);
    console.log(maker);
    maker.makeCoffee(3);
    console.log(maker);
}