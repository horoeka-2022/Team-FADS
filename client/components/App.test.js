import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'
import Home from './Home'
import Nav from './Nav'
import { MemoryRouter as Router } from 'react-router-dom'

test('renders the App page', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  expect(
    screen.getByText('Welcome to Mr Beans favourite holidays')
  ).toBeInTheDocument()
})

test('it should be image when render App page', () => {
  render(
    <Router>
      <App />
    </Router>
  )
  expect(screen.getByRole('img')).toBeInTheDocument()
})

test('renders the Home page', () => {
  render(<Home />)
  expect(
    screen.getByText('Please select a continent from the nav list')
  ).toBeInTheDocument()
})

test('for heading in home page', () => {
  render(<Home />)
  expect(screen.getByRole('heading')).toHaveTextContent(/Home/)
})

test('for heading in Nav page', () => {
  render(
    <Router>
      <Nav />
    </Router>
  )
  expect(screen.getByRole('heading')).toHaveTextContent(/Nav/)
})

test('renders link', () => {
  render(
    <Router>
      <Nav />
    </Router>
  )
  //const linkElement = screen.getByText(/continents/)
  //expect(linkElement).toBeInTheDocument()
  expect(document.querySelector('a').getAttribute('href')).toBe(
    '/continents/Africa'
  )
})
