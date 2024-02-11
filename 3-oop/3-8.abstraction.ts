{
    type CoffeeCup = {
        shots: number,
        hasMilk : boolean,
        hasSuger? : boolean
    }
    interface CoffeeMaker {
        makeCoffee(shots : number) : CoffeeCup;
    }
    abstract class CoffeeMachine implements CoffeeMaker{
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

        clean(){};
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
        protected abstract extract(shots: number): CoffeeCup;

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            return {...coffee, hasMilk : true};
        }
    }
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number,public readonly serialNumber :string){
            super(beans);
        }
        private steamMilk():void{
            console.log('Steaming milk...');
        }
        protected extract(shots: number) : CoffeeCup{
            this.steamMilk();
            return{
                shots,
                hasSuger: true
            };
        }
        }
    }
    class SweetCoffeeMaker extends CoffeeMachine{
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return{
                ...coffee,
                hasSuger : true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16)
    ];
    machines.forEach(machine =>{
        console.log('--------------------');
        machine.makeCoffee(1);
    })

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23,'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(34);
    maker.fillCoffeeBeans(32);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(34);
    // maker2.fillCoffeeBeans(32); //error
    maker.makeCoffee(2);

    //const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(34);
    // maker2.fillCoffeeBeans(32); //error
    maker.makeCoffee(2);
    //maker3.clean();
}