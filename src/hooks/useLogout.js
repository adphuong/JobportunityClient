import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // global state and JSON webtoken in local storage indicates status of login
        // So we just need to update global state and delete json webtoken from local storage

        // Remove user from storage
        localStorage.removeItem('user')

        // Dispatch logout action - resets user to null
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}