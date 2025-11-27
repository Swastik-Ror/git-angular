export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface LogIn{
    password:string,
    email:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    description:string,
    image:string,
    id:number,
    quantity: undefined | number
}