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

export function setLocalData(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalData(item){
    return JSON.parse(window.localStorage.getItem(item));
}

//recipe-class
//shoping-list-class
//user-class
