export default {
  addMember(state, payload) {
    state.members.push(payload);
  },
  toggleSelected(state, payload){
    let item = state.members.find(member => member.id === payload);
    item.selected = !item.selected;
  },
  resetSelected(state){
    const Members = state.members;

    Members.forEach(arrayItem => {
      arrayItem.selected = false;
    });
  },
  updateFTEAvailabilityPositive(state, payload){
    payload.forEach(el=>{
      let member = state.members.find(member => member.id === el.id);
      member.FTEAvailable = member.FTEAvailable - el.fte
      //console.log(member)
    })
  },
  updateFTEAvailabilityNegative(state, payload){
    payload.forEach(el=>{
      let member = state.members.find(member => member.id === el.id);
      member.FTEAvailable = member.FTEAvailable + el.fte
      //console.log(member)
    })
  }
};