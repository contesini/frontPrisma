import React from 'react'
import Home from '../views/Home/Home'
import Login from '../views/Login/Login'
import Resultado from '../views/Resultado/Resultado'
import Profile from '../views/Profile/Profile'

import Register from '../views/Register/Register'
import ChangePasswordView from '../views/ChangePasswordView/ChangePasswordView'

export const routes = {
    '/login': () => <Login />,
    '/': () => <Home />,
    '/profile': () => <Profile />,
    '/register': () => <Register />,
    '/judicializar': () => <Resultado />,
    '/change/password/:id': ({ id }) => <ChangePasswordView token={id} />,
}