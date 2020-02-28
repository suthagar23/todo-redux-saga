import { createSelector } from 'reselect'

export const getToDosState = createSelector(
  (state) => state.todos,
  (todos) => todos
)

export const getAddToDoErrorState = createSelector(
  (state) => state.addToDoError,
  (addToDoError) => addToDoError
)

export const getSsFetchingState = createSelector(
  (state) => state.isFetching,
  (isFetching) => isFetching
)