import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentSelected: {
      title: '',
      componentSelected: ''
    },
    carnes: [
        { name: 'frango', src: require('./assets/frango.png')}, /*em ambiente normal require('./assets/frango.png')*/
        { name: 'peixe', src: require('./assets/peixe.png')}, 
        { name: 'porco', src: require('./assets/porco.png')}, 
        { name: 'bovino', src: require('./assets/bovino.png')}
    ],
    verduras: [
        { name: 'alface', src: require('./assets/alface.png')},
        { name: 'couve-flor', src: require('./assets/couve-flor.png')}, 
        { name: 'batata', src: require('./assets/batata.png')}, 
        { name: 'cenoura', src: require('./assets/cenoura.png')}
    ],
    integrais: [
        { name: 'arroz', src: require('./assets/arroz.png')},
        { name: 'feijao', src: require('./assets/feijao.png')}, 
        { name: 'farinha', src: require('./assets/farinha.png')}, 
        { name: 'acucar', src: require('./assets/acucar.png')}
    ],
    frutas: [
        { name: 'maca', src: require('./assets/maca.png')},
        { name: 'manga', src: require('./assets/manga.png')}, 
        { name: 'banana', src: require('./assets/banana.png')}, 
        { name: 'abacaxi', src: require('./assets/abacaxi.png')}
    ],
    typeSelected: ''
  },
  mutations: {
    selected:(state, componentSelected) => {
      state.componentSelected.title = componentSelected.title;
      state.componentSelected.componentSelected = state[componentSelected.type];
      state.typeSelected = componentSelected.type;
    }
  },
  actions: {

  },
  getters: {
    getStateComponent: state => {
      return state.componentSelected;
    }
  }
})
