

export const updateObjectInArray = (array, objPropName, userId, newObjProp ) => {
    return array.map( user => {
        if (user[objPropName] === userId) return {...user, ...newObjProp}
        return user
    })
}