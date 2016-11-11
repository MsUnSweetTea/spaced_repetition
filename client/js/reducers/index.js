import {createStore} from "redux";
import {LOG_IN_BUTTON} from '../actions/actions'
import {LOG_IN_SUCCESS} from '../actions/actions';
import {CURRENT_USER} from '../actions/actions'
import {START_GAME} from '../actions/actions'
import {QUESTION_SUCCESS} from '../actions/actions'
import {QUESTION_CORRECT} from '../actions/actions';
import {FEEDBACK} from '../actions/actions';
import {LOG_IN_FAILURE} from '../actions/actions';
import {USER_ANSWER} from '../actions/actions';

const initialState = {
    isUserVisable: false,
    userId: "5824d613ad04c481507a6b84",
    isQuestionVisible: false,//boolean in state for question transition (if true, I don't want to render anything but feedback)
    currentQuestion: {},
    currentUser: null,
    counter: 0,
    isCorrect: false,
    questions : {}
    
};
const reducers = function (state = initialState ,action) {
    function assignState(newState){
      return Object.assign({}, state, newState);
    } 
    switch(action.type) {
        case LOG_IN_SUCCESS:
            return assignState({
                logInSuccess: action.payload
            });
        case LOG_IN_FAILURE: 
            return assignState({
                logInFailure: action.error
            });
        case CURRENT_USER: 
            return assignState({
               isUserVisable: true 
            });
        case START_GAME:
            return assignState({
                isQuestionVisible: true
            });
        case QUESTION_SUCCESS:
            return assignState({
                currentQuestion: action.payload
            });
        case QUESTION_CORRECT:
            return assignState({
                isCorrect: action.isCorrect
            });
        case USER_ANSWER:
			return assignState ({
				currentAnswerInput: action.answer
			});

			if(newState.correctAnswer.toString().toLowerCase() === newState.currentAnswerInput.toString().toLowerCase()) {
				newState = Object.assign({}, state, {
					currentAnswerInput: action.answer,
					currentFeedback: 'Correct!',
					isCorrect: true,
					showNextQuestionButton: true
				})
			}	
			else {
				newState = Object.assign({}, state, {
					currentAnswerInput: action.answer,
					currentFeedback: 'Incorrect, please try again.',
					isCorrect: false,
					showNextQuestionButton: true
				})
			}
        default:
            return state;
    }
};

//score key in initial state
//user key in initial state



const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'QUESTION_CORRECT':
      return Object.assign({}, state, { count: state.count + 1 })
    default:
      return state
  }
}

export default reducers