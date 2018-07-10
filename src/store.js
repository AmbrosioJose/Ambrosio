
import { seedData } from './seed.js';

export const store = {
  state: {
    seedData
  },
  setActiveComponent(id){
    this.state.seedData.forEach(currentField => currentField.id===id ? currentField.active = true : currentField.active = false )
  },
  setActiveComponentByName(name){
    this.state.seedData.forEach(currentField => currentField.referenceName.toLocaleLowerCase()===name.toLocaleLowerCase() ? currentField.active = true : currentField.active = false )
  },
  getActiveComponent(){
    return this.state.seedData.find(component => {return component.active===true})
  }
}