import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import DevelopersPage from '../pages/DevelopersPage'
import ProjectsPage from '../pages/ProjectsPage'
import ProjectProfilePage from '../pages/ProjectProfilePage'
import AccountPage from '../pages/AccountPage'
import NewProjectPage from '../pages/NewProjectPage'
import EditAccountPage from '../pages/EditAccountPage'
import DevProfilePage from '../pages/DevProfilePage'
import ProjectsByUserPage from '../pages/ProjectsByUserPage'



const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/login' , element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
    {path: '/developers', element: <DevelopersPage/>},
    {path: '/projects', element: <ProjectsPage/>},
    {path: '/projects/:id', element: <ProjectProfilePage/>},
    {path: '/developers/:id', element: <DevProfilePage/>},
    {path: '/profile', element: <EditAccountPage/>},
    {path: '/projects/create', element: <NewProjectPage/>},
    {path: '/developer/profile',  element: <AccountPage/> },
    {path: '/projects/developer/:id', element: <ProjectsByUserPage/>}

])

export default router