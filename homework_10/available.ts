export function addAvailable(val : boolean) {
    return function (myClass : Function) {
        return class {
            available = val; 
        }
    }
}