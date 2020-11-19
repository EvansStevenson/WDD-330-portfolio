//main
export default function listener(id, listener, tasks){
    document.getElementById(id).addEventListener(listener, tasks)
}

export function selectId(id){
    return document.getElementById(id);
}

export function setHidden(id, hidden){
    selectId(id).hidden = hidden;
}

//recipe-class
//shoping-list-class
//user-class
