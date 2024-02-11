{
    type CoffeeCup = {
        shots: number,
        hasMilk : boolean,
        hasSuger? : boolean
    }
    interface CoffeeMaker {
        makeCoffee(shots : number) : CoffeeCup;
    }
    class CoffeeMachine implements CoffeeMaker{
        //shotNumber : number;
        private static BEANS_GRAMM_PER_SHOT : number = 7;
        private coffeeBeans : number = 0;

        constructor(coffeeBeans: number,
            private milk : MilkFrother,
            private sugar : SugarProvider){
            this.coffeeBeans = coffeeBeans;
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
                hasMilk : true
            };
        }
        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugar = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugar);
        }
    }

    interface MilkFrother{
        makeMilk(cup : CoffeeCup): CoffeeCup;
    }
    interface SugarProvider{
        addSugar(cup : CoffeeCup) : CoffeeCup;
    }
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk():void{
            console.log('Steam some milk...');
        }
        makeMilk(cup : CoffeeCup): CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true 
            }
        }
    }

    class NoSugar implements SugarMixer{
        addSugar(cup: CoffeeCup): CoffeeCup{
            return cup;
        }
    }
    class FancyMilkSteamer implements MilkFrother {
        private steamMilk():void{
            console.log('Fancy Steam some milk...');
        }
        makeMilk(cup : CoffeeCup): CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true 
            }
        }
    }
    class ColdMilkSteamer implements MilkFrother {
        private steamMilk():void{
            console.log('Cold Steam some milk...');
        }
        makeMilk(cup : CoffeeCup): CoffeeCup{
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true 
            }
        }
    }
    class NoMilk implements MilkFrother{
        makeMilk(cup: CoffeeCup) : CoffeeCup{
            return cup;
        }
    }
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar');
        }
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasMilk : true
            }
        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar');
        }
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasMilk : true
            }
        }
    }
    //Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    //Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    const sweetCandyachine = new CoffeeMachine(12, noMilk,candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk,sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatterMachine = new CoffeeMachine(
        12,
        cheapMilkMaker,
        candySugar
    );
}