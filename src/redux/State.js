// import {rerenderAll} from '../rerender'
// import React from 'react'
// import ReactDOM from "react-dom";
// import App from "../App";
// import profileReducer from "./profileReducer";
// import dialogReducer from "./dialogReducer";
//
// let store = {
//     appState: {
//         profileData: {
//             posts: [
//                 {
//                     id: 1,
//                     text: 'I am Naruto Uzumaki',
//                     likes: 10,
//                 },
//                 {
//                     id: 2,
//                     text: 'I will become Hocage!!',
//                     likes: 17,
//                 }
//             ],
//             textForNewPost: '',
//         },
//         dialogsData: {
//             dialogsList: [
//                 {
//                     name: 'Madara',
//                     id: 1,
//                     messages: [
//                         {
//                             id: 1,
//                             isMy: true,
//                             text: 'Hi Madara! I am Hokage!!'
//                         },
//                         {
//                             id: 2,
//                             isMy: false,
//                             text: 'I am dark Hokage when it is was not mainstream'
//                         }
//                     ],
//                 },
//                 {
//                     name: 'Hosherama',
//                     id: 2,
//                 },
//                 {
//                     name: 'Djiraya',
//                     id: 3,
//                 },
//                 {
//                     name: 'Orochimaru',
//                     id: 4,
//                 },
//             ],
//             newMessageText: '',
//         },
//     },
//     dispatch: function (action) {
//         profileReducer(this.appState.profileData, action)
//         dialogReducer(this.appState.dialogsData, action)
//         this.rerenderAll()
//     },
//     rerenderAll: function () {
//         ReactDOM.render(
//             <React.StrictMode>
//                 <App store={store} />
//             </React.StrictMode>,
//             document.getElementById('root')
//         );
//     }
// }
//
//
//
// export default store