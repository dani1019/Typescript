{
/**
 * Union Types : OR
 */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction : Direction){
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile : TileSize = 16;

    //function : login -> success, fail
    type response = 'success' | 'fail';
    function login(response : response){
        console.log(response);   
    }
    login('success');

    type SuccessState = {
        response:{
            body: string;
        };
    };
    type failState = {
        reason : string;
    }
    type LoginState = SuccessState | failState;
    function login1() : LoginState{
        return {
            response : {
                body : 'login',
            }
    }

    //print loginState
    //success -> body
    //fail -> reason

    function printLoginState(state : LoginState){
        if('response' in state){
            console.log(`${state.response.body}`)
        }else{
            console.log(`${state.reason}`)
        }
    }
    printLoginState(SuccessState)
    }

}