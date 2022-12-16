import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import DevelopersPage from '../pages/DevelopersPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectProfilePage from '../pages/ProjectProfilePage'
import AccountPage from '../pages/AccountPage'
import EditAccountPage from '../pages/EditAccountPage'


const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/login' , element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
    {path: '/developers', element: <DevelopersPage/>},
    {path: '/projects', element: <ProjectsPage/>},
    {path: '/projects/:id', element: <ProjectProfilePage/>},
    {path: '/developers/:id', element: <AccountPage/>},
    {path: '/profile/edit', element: <EditAccountPage/>}
])

export default router