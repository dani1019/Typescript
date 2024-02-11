{
    /**
     * Intersection Types:
     */
    type Student = {
        name : string,
        score: number;
    };

    type Worker = {
        empolyeeId : number;
        work : () => void;
    };

    function internwork(person : Student & Worker){
        console.log(person.empolyeeId,person.name, person.work());
        
    }
    internwork({
        name : 'ellie',
        score : 1,
        empolyeeId : 123,
        work : () => {},
    })
}