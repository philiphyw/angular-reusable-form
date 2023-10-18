export interface UltimateFormControl{
    name: string,
    displayName?: string,
    type?:string,
    placeholder?:string,
    validationFns?:((value:any)=>{foundInvalid:boolean,invalidType:string})[];
}

export const UltimateFormValidations={
    isEmpty :(value:string)=> {return {foundInvalid:value.length === 0,invalidType:'isEmpty'}},
    isShorterThanEight : (value:string)=> {return {foundInvalid:value.length < 8,invalidType:'isShorterThanEight'}},
}