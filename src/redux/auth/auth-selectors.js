export const getIsAuthenticated = state => !!state.auth.token

export const userName = state => state.auth.user.name