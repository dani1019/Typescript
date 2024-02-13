{
type Video = {
    title : string;
    author : string;
    descritipn : string;
};

[1, 2].map(item => item*item); // [1, 4]

type Optional<T> = {
    [P in keyof T]?: T[P] // for ...in
};

type ReadOnly<T> = {
    readonly [P in keyof T]? : T[P];
}
type VideoOptional = Optional<Video>;
type Animal ={
    name: string;
    age: number;
}

const animal : Optional<Animal> ={
    name: 'dog'
};

const video : ReadOnly<Video> = {

}

// type VideoOptional = {
//     title?: string;
//     author?: string;
// }
    type Nullable<T> = {
        [P in keyof T] : T[P] | null
    };
    const obj3 : Nullable<Video> = {
        title :null,
        author : null
    };

    type Proxy<T> = {
        get(): T;
        set(Value : T) : void;
    }
    type Proxify<T> = {
        [P in keyof T] : Proxy<T[P]>;
    }
}