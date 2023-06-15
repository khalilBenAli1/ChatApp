import { createContext, useContext, useEffect, useState } from "react"
import { RootStore, RootStoreModel } from "./RootStore"
import { setupRootStore } from "./setupRootStore"

const _rootStore = RootStoreModel.create({})


const RootStoreContext = createContext<RootStore>(_rootStore)

export const RootStoreProvider = RootStoreContext.Provider

export const useStores = () => useContext(RootStoreContext)

export const useInitialRootStore = (callback: () => void | Promise<void>) => {
  const rootStore = useStores()
  const [rehydrated, setRehydrated] = useState(false)
  // Kick off initial async loading actions, like loading fonts and rehydrating RootStore
  useEffect(() => {
    let _unsubscribe: any;
    (async () => {
      const { unsubscribe } = await setupRootStore(rootStore)
      _unsubscribe = unsubscribe
      setRehydrated(true)
      if (callback) callback()
    })()

    return () => {
      if (_unsubscribe) _unsubscribe()
    }
  }, [])

  return { rootStore, rehydrated }
}
