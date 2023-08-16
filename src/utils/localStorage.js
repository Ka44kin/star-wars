export const getStorageData = key => {
    const data = localStorage.getItem(key);
    
    if (data !== null){
        return JSON.parse(data);
    } else {
        return {};
    }
}

export const setStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}