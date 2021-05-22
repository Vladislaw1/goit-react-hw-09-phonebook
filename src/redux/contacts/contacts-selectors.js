export const getIsAuthenticated = state => !!state.auth.token

export const allContacts = state => state.contacts.list;
export const filterSel = state => state.contacts.filter
export const loading = state => state.contacts.loading