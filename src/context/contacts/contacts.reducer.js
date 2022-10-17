function ContactsReducer(state,action){
    const {type, payload} = action;
    switch(type){
        case contactsAction.Add:{
            console.log(state)
            // const [item,index] = state.find(p => p.name === payload.name);
            // if (item){
            //     throw new Error ("This Contat is Already exist");
            // }
            // else{
                return(state = [...state,payload]);
            // }
        }
        case contactsAction.Edit:{
            return(state.map(item => item.id === payload.id? payload: item));

        }
        case contactsAction.Remove:{
            return(state.filter(item => item.id !== payload.id));
        }
        default: throw new Error("This action is not define");
    }

};
const contactsAction = {
    Add: "ADD_CONTACTS_ITEM",
    Remove: "REMOVE_CONTACTS_ITEM",
    Edit: "EDIT_CONTACTS_ITEM",
};

export {contactsAction,ContactsReducer}