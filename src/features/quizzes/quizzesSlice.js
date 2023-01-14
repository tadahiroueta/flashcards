import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";


const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: { addQuiz: (state, action) => { state.quizzes = { ...state.quizzes, [action.payload.id]: action.payload } } }
});

export const addQuizForTopicId = (quiz) => (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId(quiz));
}

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;