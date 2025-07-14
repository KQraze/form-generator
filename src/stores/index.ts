import { createStore, type StoreOptions } from 'vuex'
import { accountModule, formsModule, type FormsState, type AccountState } from './modules'

export interface RootState {
  forms: FormsState
  account: AccountState
}

const storeOptions: StoreOptions<RootState> = {
  modules: {
    forms: formsModule,
    account: accountModule,
  },
}

export default createStore<RootState>(storeOptions)
