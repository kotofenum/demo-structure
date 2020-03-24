// RootStore class that combines all the stores
// and passes self-reference to them if needed
import { NameStore } from './name/name.store';
import { OtherNameStore } from './otherName/otherName.store';

export class RootStore {
  nameStore: NameStore;
  otherNameStore: OtherNameStore;

  constructor() {
    this.nameStore = new NameStore(this)
    this.otherNameStore = new OtherNameStore()
  }
}