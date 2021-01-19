import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      groups: [
        {
          id: 'g1',
          name: 'Team Vue',
          lead: 'm4',
          members: [
            {id: "m4", fte:0.4},
            {id: "m3", fte:0.8},
            {id: "m1", fte:0.25},
            {id: "m5", fte:0.3},
            {id: "m6", fte:0.45},
            ],
          tmp: false,
          selected: false,
        },
        {
          id: 'g2',
          name: 'Team Dairytale',
          lead: 'm5',
          members: [
            {id: "m5", fte:0.1},
            {id: "m4", fte:0.2},
            ],
          tmp: false,
          selected: false,
        },
        {
          id: 'g3',
          name: 'Superheroes',
          lead: 'm4',
          members: [
            {id: "m4", fte:0.3},
            {id: "m2", fte:0.5},
            {id: "m3", fte:0.15},
            ],
          tmp: false,
          selected: false,
        },
        /*
        {
          id: 'g1',
          name: 'Team Vue',
          lead: 'm4',
          members: ["m4", "m3", "m1", "m5", "m6"],
          members: [
            {id: "m4", fte:0.3},
            {id: "m3", fte:0.8},
            {id: "m1", fte:0.25},
            {id: "m5", fte:0.6},
            {id: "m6", fte:0.45},
            ],
          tmp: false,
        },
        {
          id: 'g2',
          name: 'Team Dairytale',
          lead: 'm5',
          members: ["m5", "m4"],
          tmp: false,
        },
        {
          id: 'g3',
          name: 'Superheroes',
          lead: 'm4',
          members: ["m4", "m2", "m3"],
          tmp: false,
        },
        */
      ]
    };
  },
  mutations,
  actions,
  getters
};