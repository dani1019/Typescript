{
    type CoffeeCup = {
        shots: number,
        volumn : number
    }

    //public
    //private
    //protected
    class CoffeeMaker{
        //shotNumber : number;
        private static BEANS_GRAMM_PER_SHOT : number = 7;
        private coffeeBeans : number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans : number) : CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
    maker.fillCoffeeBeans(34);
    console.log(maker);

    class User{
        // private firstName :string;
        // private lastName : string;
        get fullName() : string{
            return `${this.firstName} ${this.lastName}`;
        }
        // constructor(firstName : string, lastName: string){
            // this.firstName = firstName;
            // this.lastName = lastName;
        // }
        private internalAge = 4;
        get age():number {
            return this.internalAge;
        }
        set age(num: number){
            if(num < 0){
                throw new Error('error');
            }
            this.internalAge = num;
        }
        constructor(private firstName : string, private lastName: string){
        }
    }
    const user = new User('Steve', 'Jobs');
    console.log(user.fullName); //get fullName
    user.age = 6;
    user.firstName = 'Ellie';
    console.log(user.fullName); //get fullName
    console.log(user);
    
}