{
    type CoffeeCup = {
        shots: number,
        volumn : number
    }
    interface CoffeeMaker {
        makeCoffee(shots : number) : CoffeeCup;
    }
    class CoffeeMachine implements CoffeeMaker{
        //shotNumber : number;
        private static BEANS_GRAMM_PER_SHOT : number = 7;
        private coffeeBeans : number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans : number) : CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number){
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough Coffee');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void{
            console.log('heating up...❤️‍🔥');
        }
        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                volumn : shots*CoffeeMachine.BEANS_GRAMM_PER_SHOT 
            };
        }
        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(34);
    maker.fillCoffeeBeans(32);
    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(34);
    maker2.fillCoffeeBeans(32);
    maker.makeCoffee(2);
}