import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Home from "../Home"
import { ThemeProvider } from "../pages/Context"

describe('The Home Component', ()=>{
    test("should render...",()=>{
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home/>
                </ThemeProvider>
            </MemoryRouter>
        )
        expect(screen.getByRole('heading',{
            level: 2,
            text:"Identify your needs and we'll take care of the rest along with our talented professionals"
        })
            ).toBeTruthy()
    })
})