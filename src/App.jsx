import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import ArticleList from './components/ArticleList'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage'
import NotFoundPage from './pages/NotFoundPage'
import NewArticlePage from './pages/NewArticlePage'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/articles/new" element={<NewArticlePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );

}

export default App