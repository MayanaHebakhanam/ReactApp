import {rest} from 'msw'
import {setupServer} from 'msw/node'
import EmpPic from '../images/Emp.jpeg'
import {screen, waitForElementToBeRemoved} from '@testing-library/react'
import Freelancers from '../pages/Freelancers'
import {render} from '../pages/CustomRender'
const freelancersMockedData = [
    {
        name:"Ram",
        jobTitle:"Devops",
        picture:EmpPic,
    },

    {
        name:"Sam",
        jobTitle:"Frontend Developer",
        picture:EmpPic
    }
  ]

const server=setupServer(
   rest.get(`http://localhost:3000/freelancers`,(req,res,ctx)=>{
          return res(ctx.json({freelancersList: freelancersMockedData}))
   })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names after loader is removed', async() => {
    render( <Freelancers />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.getByText('Ram')).toBeInTheDocument()
    expect(screen.getByText('Sam')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})

it('Should display error contenet',async()=>{
    server.use(
        rest.get('http://localhost:3000/freelancers',(req,res,ctx)=>{
            return res.once(
                ctx.status(500),
                ctx.json({ererorMessage:'Oops! There is an error with the API'})
            )
        })
    )
    render(<Freelancers/>)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.queryByTestId('errmsg')).toMatchInlineSnapshot()

})
