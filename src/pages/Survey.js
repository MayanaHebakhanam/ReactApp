import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import { useFetch } from "./Hooks";
import { SurveyContext } from "./Context";
import { useContext } from "react";
import colors from "./colors";
import { useTheme } from "./Hooks";
function Survey(){

  const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: green;
  color: purple;
`

const QuestionContent = styled.span`
  margin: 30px;
  color: brown;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: blue;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  cursor: pointer;
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const { questionNumber } = useParams()
const questionNumberInt = parseInt(questionNumber)
const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
const nextQuestionNumber = questionNumberInt + 1
const { data, isLoading, error } = useFetch(`https://mocki.io/v1/4b92ca24-53e2-4598-8b66-4bfc67cdbb87`)
const { saveAnswers, answers } = useContext(SurveyContext)
const {theme}= useTheme()
function saveReply(answer) {
  saveAnswers({ [questionNumber]: answer })
}
  
    if (error) {
      return <span>There is an error</span>
    }
    
    return(
        <div>
        <SurveyContainer>
        <QuestionTitle>Question {questionNumber}</QuestionTitle>
          {isLoading ? (
                <Loader />
           ) : (
            <QuestionContent>{data && data[questionNumberInt-1].quest}</QuestionContent>
         )}
          <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
          theme={theme}
        >
          Yes
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
          theme={theme}
        >
          No
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        
          <Link to={`/survey/${prevQuestionNumber}`}>Back</Link>
          { data && data[questionNumberInt] ? (  
          <Link to={`/survey/${nextQuestionNumber}`}>Next</Link>
      ) : (
        <Link to={`/results`}>Results</Link>
      )}
 
      </LinkWrapper>
      </SurveyContainer>
        </div>
    )
}

export default Survey;