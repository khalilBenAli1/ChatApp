import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const RootStoreModel = types
  .model("RootStore")
  .props({
    // session: types.optional(Session, {}),
    user:types.optional(types.string,"test")
  })
export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}