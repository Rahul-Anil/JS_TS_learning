# Types in JS
- undefined
- string 
- number
- object 
    - in the case of JS this contains things like
        - arrays 
        - dict (hash maps in other languages)
        - functions 
- boolean 
- symbol
- null ?(somewhat not really)

in JS variables do not have type values do (this is the same as in python)

var v; : this has the type undefined when we initially define it 

## new keyword

things that i want to use the new keyword on:
- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

things i dont want to use the new keyword on:
- String()
- Boolean()
- Number()

## Boolean conversion 
when we are converting from some other data type to boolean this is the list of values that become fasle and true

Falsy values
- 0, -0
- null
- NaN
- false: not the string representation
- undefined

Truthy 
- 1
- true
- everything else ....