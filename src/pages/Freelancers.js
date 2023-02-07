import Card from './Card';
import styled from 'styled-components';
import EmpPic from '../images/Emp.jpeg';
import colors from "./colors";
import { useTheme } from "./Hooks"
import { useFetch } from "./Hooks";
import { Loader } from "./Loader";
function Freelancers() {
    const CardsContainer=styled.div`
       display: grid;
       gap: 24px;    
       grid-template-rows: 350px 350px;
       grid-template-columns:repeat(2, 1fr);
       align-items: center;
       justify-items: center;
       `

       const PageTitle = styled.h1`
          font-size: 30px;
          color: blue;
          text-align: center;
          padding-bottom: 30px;
        `

       const PageSubtitle = styled.h2`
            font-size: 20px;
            color: ${colors.color};
            font-weight: 300;
            text-align: center;
            padding-bottom: 30px;
         `
         const LoaderWrapper = styled.div`
            display: flex;
            justify-content: center;
        `
 
    const freelancerProfiles=[
        {
            name:"Ram",
            jobTitle:"Devops",
            picture:EmpPic
        },

        {
            name:"Sam",
            jobTitle:"Frontend Developer",
            picture:EmpPic
        },

        {
            name:'Shyam',
            jobTitle:"Web Developer",
            picture:EmpPic
        }
    ]
    const {isLoading} =useFetch(`http://localhost:3000/freelancers`)
    let error=false

    if (error) {
        return <span data-testid="errmsg" >There is an error</span>
      }

    return(
        <div>
            <h1 style={{color:'goldenrod'}}>Freelancers 👩‍💻👨‍💻👩‍💻</h1>
            <PageTitle>Find your service provider</PageTitle>
            <PageSubtitle>
                 Here at Our place we bring together the best profiles for you.
            </PageSubtitle>
            {isLoading ? (
               <LoaderWrapper>
                   <Loader data-testid="loader" />
               </LoaderWrapper>
                 ) : (
            <CardsContainer>
            {freelancerProfiles.map((profile,index) =>(
                                <Card key={`${profile.name}-${index}`}
                                label={profile.jobTitle}
                                picture={profile.picture}
                                title={profile.name}/>
            ))}
            </CardsContainer>
                 )}
        </div>
    )

  }
  
  export default Freelancers