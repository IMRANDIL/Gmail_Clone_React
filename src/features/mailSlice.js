import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        sendMessageIsOpne: false
    },
    reducers: {
        selectMail: (state, action) => {
            state.selectedMail = action.payload
        },
        openSendMessage: state => {
            state.sendMessageIsOpne = true;
        },

        closeSendMessage: state => {
            state.sendMessageIsOpne = false;
        }
    }


});



export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;


//selector.....

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpne;
export const selectedMail = (state) => state.mail.selectedMail

export default mailSlice.reducer;
