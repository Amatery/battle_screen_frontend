import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import BattleScreen from './components/organisms/BattleScreen/BattleScreen'
import { store } from './store/store'

function App(): ReactElement {
  return (
    <Provider store={store}>
      <BattleScreen />
    </Provider>
  )
}

export default App
