
let initialState = {
    dialogsList: [
        {
            name: 'Madara',
            id: 1,
            messages: [
                {
                    id: 1,
                    isMy: true,
                    text: 'Hi Madara! I am Hokage!!'
                },
                {
                    id: 2,
                    isMy: false,
                    text: 'I am dark Hokage when it is was not mainstream'
                }
            ],
        },
        {
            name: 'Hosherama',
            id: 2,
        },
        {
            name: 'Djiraya',
            id: 3,
        },
        {
            name: 'Orochimaru',
            id: 4,
        },
    ],
}

const dialogReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'ADD-MESSAGE' :
            let newMessage = {
                id: state.dialogsList[0].messages.length,
                isMy: true,
                text: action.text
            }
            newState =  {...state}
            newState.dialogsList[0].messages.push(newMessage);
            return newState
        default:
            return state;
    }
}

export default dialogReducer;