{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(resourceState : ResourceLoadState){
      let resultString : string = '';
      let state = resourceState.state
      switch(state){
          case 'loading':
              console.log(`👀 ${state}`);
              break;
          case 'success':
              console.log(`😃 ${state}`);
              break;
          case 'success':
              console.log(`😃 ${state}`);
              break;
          default:
              throw new Error(`Error`);
        } 
  }
  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
