import type { ActionContext, Module } from 'vuex'
import type { RootState } from '@/stores'

export interface AccountState {
  user: {
    name: string
    email: string
    info: string
  }
}

export const accountModule: Module<AccountState, RootState> = {
  state: (): AccountState => ({
    user: {
      name: '',
      email: '',
      info: '',
    },
  }),
  mutations: {
    setUser(state: AccountState, data: Partial<AccountState['user']>) {
      Object.assign(state.user, data)
    },
  },
  actions: {
    getUser: ({ commit }: ActionContext<AccountState, RootState>) => {
      const data = {
        name: 'Фамилия Имя Отчество',
        email: 'pavel.eliseev061@gmail.com',
        info: 'Информация обо мне',
      }

      setTimeout(() =>
        commit('setUser', data),
      )

      return data;
    },
  },
}
