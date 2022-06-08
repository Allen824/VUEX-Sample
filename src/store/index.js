import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: [
      {name:'Home', count:1},
      {name:'Items', count:0},
      {name:'Other', count:0}

    ],

    items: [
      {type: 'TVs'},
      {type: 'Computers'},
      {type: 'WashingMachines'},
    ],

    TVs: [
      {name: 'Samsung AU8000', price: 139.99},
      {name: 'Vizio V555', price: 280.99},
      {name: 'LG UHD', price: 340.99}
    ],
    WashingMachines: [
      {name: 'Kenmore 28', price: 299.99},
      {name: 'Costway Portable', price: 699.99},
      {name: 'Samsung 2.2', price: 599.99}
    ],
    Computers: [
      {name: 'HP Prodesk', price: 1594.99},
      {name: 'HP Slim', price: 469.99},
      {name: 'Dell Optiplex', price: 92.29}
    ]
  }, 
  getters: {
    
  },
      

   
  mutations: {
    incrementCount: (state, pg) => {
      state.pages.forEach(page => {
        if(page.name == pg) {
          page.count++;
        }
      })
      
    },

    zeroCount: state => {
      state.pages.forEach(page => {
        if(page.name != 'Home'){
          page.count = 0;
        }
        else {
          page.count = 1;
        }
      })
    }

  },
  actions: {

  },
  modules: {
  }
})
