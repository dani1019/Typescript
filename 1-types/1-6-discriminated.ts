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
            result : 'success',
            response:{
                body: string;
            };
        };
        type failState = {
            result : 'fail',
            reason : string;
        }
        type LoginState = SuccessState | failState;
        function login1() : LoginState{
            return {
                result : 'success',
                response : {
                    body : 'login',
                }
        }
    
        //print loginState
        //success -> body
        //fail -> reason
    
        function printLoginState(state : LoginState){
            if(state.result === 'success'){
                console.log(`${state.response.body}`)
            }else{
                console.log(`${state.reason}`)
            }
        }
        printLoginState(SuccessState)
        }
    
    }