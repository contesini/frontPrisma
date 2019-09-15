import React from 'react'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Profile from '../views/Profile/Profile'
import Resultado from '../views/Resultado/Resultado'

import Register from '../views/Register/Register'
import ChangePasswordView from '../views/ChangePasswordView/ChangePasswordView'

export const routes = {
    '/login': () => <Login />,
    '/': () => <Home />,
    '/register': () => <Register />,
    '/judicializar': () => <Resultado />,

}