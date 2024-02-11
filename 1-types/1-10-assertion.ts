{
    /**
     * Type Assertions
     */
    function isStrFunc(): any {
        return 'hello';
    }
    const result = isStrFunc();
    const result_len = (result as string).length;
    const result_len1 = (<string>result).length;
    console.log(result_len);

    const wrong : any = 5;
    console.log((wrong as Array<number>).push(1));

    function findNumbers() : number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    const numbers2 = findNumbers()!; // 무조건 널이 아니고 값이 있다고 장담할 떄
    numbers.push(2) // because of number or undefined
    numbers!.push(2) // 무조건 널이 아니고 값이 있다고 장담할 떄