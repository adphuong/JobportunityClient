import { useState } from 'react';
import { useAuthContext } from './useAuthContext';


export const useLogin = () =>  {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        // Send request to API
        const response = await fetch('http://localhost:2300/api/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        
        })

        // Will return JSON webtoken and email if successful
        const json = await response.json()

        // Error check for response
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            // Save user to local storage 
            localStorage.setItem('user', JSON.stringify(json))

            // Update the Auth Context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}