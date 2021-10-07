import React, { useContext, useState } from 'react';
import Cookies from 'js-cookie';

// fetch the user from local storage as the default value
export const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = props => {

    // keep the user state in the provider
    const [user, setUser] = useState(Cookies.get('auth'));

    // saves a user in the global state and in local storage
    const saveUser = () => {
        setUser(true);
    };

    // deletes the user from global state and local storage
    const logoutUser = () => {
        setUser();
    };

    return (
        <AuthContext.Provider value={{user, saveUser, logoutUser}}>
            { props.children }
        </AuthContext.Provider>
    );

}