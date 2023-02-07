import Card from '../pages/Card';
import { render, screen, fireEvent, cleanup, getByTestId } from '@testing-library/react'
import { ThemeProvider } from '../pages/Context';

afterEach(cleanup)
describe('Card', () => {
    test('Should render title and image', async () => {
      render(
        <ThemeProvider>
          <Card
            title="Ram"
            label="Devops"
            picture="/Emp.jpeg"
          />
       </ThemeProvider>
      )
      const cardPicture = screen.getByRole('img')
      const cardTitle = screen.getByText(/Ram/i)
      expect(cardPicture.src).toBe('http://localhost/Emp.jpeg')
      expect(cardTitle.textContent).toBe(' Ram ')
    })

test('Should add ⭐️ around title', async () => {
  render(
    <ThemeProvider>
       <Card
          title="Ram"
          label="Devops"
          picture="/Emp.jpeg"
       />
       </ThemeProvider>
  )
  let cardTitle = screen.getByText(/Ram/i)
  const parentNode = cardTitle.closest('div')
  fireEvent.click(parentNode)
  cardTitle=screen.getByText(/Ram/i)
  expect(cardTitle.textContent).toBe('⭐️ Ram ⭐️')
})
})

