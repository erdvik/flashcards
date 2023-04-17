import { createSlice } from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicsSlice'


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds: cardIds
            }
        }
    }
})

export const createQuizAndAssociateWithTopic = (payload) => {
    return (dispatch) => {
        const { name, topicId, cardIds, id } = payload;
        dispatch(addQuiz({ id, name, topicId, cardIds }));
        dispatch(addQuizId({ topicId, quizId: id }));
    }
}


export const selectQuizzes = state => state.quizzes.quizzes
export const { addQuiz } = quizzesSlice.actions
export default quizzesSlice.reducer



