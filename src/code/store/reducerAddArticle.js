const addArticle = { 
    checkBoxCreateMenu      : false,
    addSubItemToNewMenu     : false,
    menus                   : ['Phiysic', 'Islamic system','space exploration'],
    menuItems               : ['Chaper 1', 'chaper 2', 'chapter 3', 'chapter 4', 'chapter 5']
}


function reducerAddArticle(state = addArticle, action){
    switch(action.type){
        case 'createNewMenu' :
            const copyState = Object.assign(state);
            copyState.checkBoxCreateMenu = action.payload.val;
            console.log(copyState);
            return {...copyState}
        case 'addSubItemToNewMenu' :
            const copyState2 = Object.assign(state);
            copyState2.addSubItemToNewMenu = action.payload.val;
            console.log(copyState2);
            return {...copyState2}
        default: return state
    }
}

export default reducerAddArticle;
