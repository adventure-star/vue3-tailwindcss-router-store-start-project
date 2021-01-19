export default {
  createGroup(context, data){
    const groupData = {
      id: data.id,
      name: "placeholder",
      lead: data.lead,
      members: data.members,
      tmp: true
    };

    context.commit('createGroup', groupData);
  },
  saveGroup(context, data){
    context.commit('saveGroup', data);
  },
  deleteTMPGroups(context){

    //Restore groupData if mergedGroup tmp
    context.commit('deleteTMPGroups')
  },
  changeMemberFTE(context, data){
    context.commit('changeMemberFTE', data)
  },
  toggleSelected(context, data){
    context.commit('toggleSelected', data)
  },
  resetSelected(context){
    context.commit('resetSelected')
  },
  mergeGroups(context, data){
    function groupAndSum(arr, groupKeys, sumKeys){
      return Object.values(
        arr.reduce((acc,curr)=>{
          const group = groupKeys.map(k => curr[k]).join('-');
          acc[group] = acc[group] || Object.fromEntries(groupKeys.map(k => [k, curr[k]]).concat(sumKeys.map(k => [k, 0])));
          sumKeys.forEach(k => acc[group][k] += curr[k]);
          return acc;
        }, {})
      );
    }
    
    const groupedMembers = groupAndSum(data.members, ['id'], ['fte']);
    console.log(groupedMembers);


    console.log(data.members);


    const groupData = {
      id: data.id,
      name: data.name,
      lead: data.lead,
      members: groupedMembers,
      mergedGroupData: data.groupData,
      tmp: true,
      selected: false,
    }

    console.log(groupData.mergedGroupData)

    groupData.mergedGroupData.forEach(el => {
      context.commit('deleteGroupByID', el.id)
    })


    //Dispatch cross-module to update FTEAvailableValues
    context.dispatch("members/updateFTEAvailabilityNegative", groupData.members, { root: true });

    context.commit('mergeGroups', groupData)
  }
};