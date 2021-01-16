const arrayOfNumbers: Array<number> = [1,1,2,3,5,8]
const arrayOfStrings: Array<string> = ['Hello', 'Sammy']

function reverse<T>(array: T[]): T[]{
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)