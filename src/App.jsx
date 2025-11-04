import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import ArticleList from './components/ArticleList'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <ArticleList />
    </>
  );
  
}

export default App