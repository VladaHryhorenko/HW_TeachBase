interface Person {
    name: string
    age: number
}
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age';
//key = 'job'; // невалидно, тк key не может принять в себя такое значение


type User =  {
    _id: number
    name: string
    email: string
    createdAt: Date
}

//type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // указыаем какие именно ключи нужно взять из Юзер, а через запятую указываем те, которые нужно исключить

//подобная запись
type UserKeysNoMeta  = Pick<User, 'name' | 'email' > // Pick < 1)откуда нужно брать, 2) что нужно брать>


