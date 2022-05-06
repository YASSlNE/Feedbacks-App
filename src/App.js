
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import Post from './components/Post'

import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'


import {FeedbackProvider} from './context/FeedbackContext'


function App(){
    const[feedback,setFeedback]=useState(FeedbackData)
    
    
    return (
        <FeedbackProvider>
        <Router>
         
        <Header text="Feedback UI" />
        <div className='container'>
            <Routes>
        <Route exact path='/' element={
            <>
            <FeedbackForm></FeedbackForm>
            <FeedbackStats/>
            <FeedbackList></FeedbackList>   
            <AboutIconLink></AboutIconLink>
            </>
        }
        ></Route>
        <Route path='/about' element={
        <>
        <AboutPage></AboutPage>
        </>
        } 
        />
        <Route path='/post/*' element={<Post/>}/>
            </Routes>      
        
        </div>
        
        
        </Router>
        </FeedbackProvider>
    )
}

export default App 