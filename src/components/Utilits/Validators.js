
export const requiredField = value => {
    if (value) return undefined
    return 'Field is required!'

}
// export const maxLenght30 = value => {
//     if (value && value.length > )
// }
export const maxLenghtCreator = (max) => value => {
    if (value && value.length > max) return 'Max lenght is ' + max
    return undefined
}
export const minLenghtCreator = (min) => {
    return value => {
        if (value && value.length < min) return 'Min lenght is ' + min
    }
}