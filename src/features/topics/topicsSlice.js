cd cd import { createSlice } from '@reduxjs/toolkit';
const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {
        '123': {
            id: '123',
            name: 'example topic',
            icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/data-flow.svg',
            quizIds: []
          }
    } },
    reducers: {
        addTopic: (state, action) => { state.topics[action.payload.id] = { ...action.payload, quizIds: [] } },
        addQuizId: (state, action) => { state.topics[action.payload.topicId].quizIds.push(action.payload.id) }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;