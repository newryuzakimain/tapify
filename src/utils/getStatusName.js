const getStatusName = value => {
  switch(value) {
    case 'assigned':
      return 'ASD';
    case 'completed':
      return 'COM';
    case 'unassigned':
      return 'UNA';
    default: 
      return '';
  }
};

export default getStatusName;