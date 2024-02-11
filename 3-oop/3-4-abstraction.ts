{
    type CoffeeCup = {
        shots: number,
        volumn : number
    }
    interface CoffeeMaker {
        makeCoffee(shots : number) : CoffeeCup;
    }
    interface CommercialCoffeeMaker {
        makeCoffee(shots : number) : CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
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
            return this.extract(shots);
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(34);
    maker.fillCoffeeBeans(32);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(34);
    // maker2.fillCoffeeBeans(32); //error
    maker.makeCoffee(2);

    const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(34);
    // maker2.fillCoffeeBeans(32); //error
    maker.makeCoffee(2);
    maker3.clean();

    class AmateurUser{
        constructor(private machine : CoffeeMaker){
        }
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            }
    }
    class ProBarista{
        constructor(private machine : CommercialCoffeeMaker){
            }
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
            
        }
    }
    const maker4 : CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    // amateur.clean(); //error
    pro.makeCoffee();
}