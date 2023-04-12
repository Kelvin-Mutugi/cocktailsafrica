import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import SEO from '../components/SEO'
export default function Home() {
  return (
    <main>
      < SEO title="Home" />
      <SearchForm />
      <CocktailList />
    </main>
  )
}
