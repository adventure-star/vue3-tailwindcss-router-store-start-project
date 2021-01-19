import { createStore } from 'vuex';

import membersModule from './modules/members/index.js';
import groupsModule from './modules/groups/index.js';

const store = createStore({
  modules: {
    members: membersModule,
    groups: groupsModule,
  },
  state() {
    return {
      memberId: 'm7',
      fteValue: 40,
    };
  },
  getters: {
    memberId(state) {
      return state.memberId;
    },
    fteValue(state) {
      return state.fteValue;
    },
  }
});

export default store;