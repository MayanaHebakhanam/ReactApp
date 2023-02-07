import Footer from '../pages/Footer'
import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../pages/Context'

describe('Footer', () => {
   test('Should render without crash', async () => {
      render(
      <ThemeProvider>
      <Footer />
      </ThemeProvider>)
   })
})

test('Change theme', async () => {
    render(
       <ThemeProvider>
          <Footer />
       </ThemeProvider>
    )
    let nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Switch Mode : ☀️')
    fireEvent.click(nightModeButton)
    nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Switch Mode : 🌙')
 })
