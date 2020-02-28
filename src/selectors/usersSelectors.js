import { createSelector } from 'reselect'

export const makeGetTotalUsersState = () => createSelector(
  (state) => state.totalUsers,
  (totalUsers) => totalUsers
)

export const makeGetIsCountingUsersState = () => createSelector(
  (state) => state.isCountingUsers,
  (isCountingUsers) => isCountingUsers
)