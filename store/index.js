export const state = () => {
  return {
    breadcrumbs: [],
  }
}


export const mutations = {
  setBreadcrumbs(state, data) {
    state.breadcrumbs = data
  },
}
