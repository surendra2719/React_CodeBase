import strings from "../config/constant.strings"

export const checkLogin = (dbData: any, formData: any) => {
    console.log(dbData,formData)
    // check username exist in filtered object
    if (!dbData || !Object.keys(dbData).length) {
        return { message: strings['usernameFailure'] }
    }
        return { success: true }

    //check password matches
    // if (formData['password'] == dbData['password']) {
    //     return { success: true }
    // } else {
    //     return { message: strings['passwordFailure'] }
    // }

}