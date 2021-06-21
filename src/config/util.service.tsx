export const saveData = async (key: any, data: any) => {
    await localStorage.setItem(key, JSON.stringify(data))
}
export const getLocalData = (key: string) => {
    try {
        return JSON.parse(localStorage.getItem(key) + '')
    } catch (e) {
        return localStorage.getItem(key)
    }
}
export const stringify = (data: any) => {
    try {
        return JSON.stringify(data)
    } catch (e) {
        return data;
    }
}
export const parse = (data: any) => {
    try {
        return JSON.parse(data)
    } catch (e) {
        return data;
    }
}