{
    type coffeeResult = {
        kind : string,
        density :number
    }
    function makeCoffee(shotNumber : number): coffeeResult{
        switch(shotNumber){
            case 1:
            return {
                kind : 'espresso',
                density : 30
            }
            case 2:
            return {
                kind : 'americano',
                density : 50
                }
            default:
                throw new Error('error');
        }
    }

    console.log(makeCoffee(1));
    console.log(makeCoffee(2));
    console.clear();
}

//result
{
    type CoffeeCup ={
        shots:number,
        hasMilk : boolean
    }
    const BEANS_GRAMM_PER_SHOT: number = 7
    let coffeeBeans : number = 0;
    function makeCoffeeTwo(shots: number): CoffeeCup{
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!'); 
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots : shots,
            hasMilk : false
        };
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffeeTwo(2);
    console.log(coffee);
    
}

