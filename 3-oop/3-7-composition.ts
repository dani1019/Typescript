{
    type CoffeeCup = {
        shots: number,
        volumn : number,
        hasSuger? : boolean
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
            const coffee = this.extract(shots);
            return {...coffee, volumn : shots};
        }
    }
    class CheapMilkSteamer {
        private steamMilk():void{
            console.log('Steam some milk...');
        }
        makeMilk(cup : CoffeeCup): CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                volumn : 
            }

        }
    }
    class AutomaticSugarMixer{
        private getSugar(){
            console.log('Getting some sugar');
            
        }
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ..cup,
                
            }
        }
    }
    class CaffeLatteMachine extends CoffeeMachine{
        constructor(
            beans: number,
            public readonly serialNumber :string, 
            private milkFother: CheapMilkSteamer){
            super(beans);
        }
        makeCoffee(shots:number) : CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.milkFother.makeMilk(coffee);
            this.steamMilk();
            return {
                shots,
                volumn : shots,
            }
        }
    }
    
    class SweetCoffeeMaker extends CoffeeMachine{
        getSugar(){
            console.log('Getting some sugar');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.getSugar();
            return{
                ...coffee,
                hasSuger : true
            }
        }
    }

    class SweetCaffeeLatteMachine extends CoffeeMachine{
        constructor(
            beans : number,
            milk : CheapMilkSteamer,
            sugar : AutomaticSugarMixer,
        ){
             super(beans);
        }
        makeCoffee(shots: number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
            
        }
    }
}