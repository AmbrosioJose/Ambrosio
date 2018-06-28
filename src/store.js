import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
  state: {
    seedData
  },
  setActiveCourse(fieldId){
      this.state.seedData.forEach(currentField => currentField.id===fieldId ? currentField.active = true : currentField.active = false )
  }
}