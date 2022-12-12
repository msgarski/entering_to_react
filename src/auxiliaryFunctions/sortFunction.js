const sortList = (a, b) => {
  return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
};

const sortNumbers = (a, b) => a.numberOfEmployees - b.numberOfEmployees;

const sortStrings = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name === "n/a") {
    return 0;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const typeOfAction = (value) => {
  switch (value) {
    case "nameAsc":
      return "NAME_ASC";
    case "nameDesc":
      return "NAME_DESC";
    case "employeesAsc":
      return "NUM_ASC";
    case "employeesDesc":
      return "NUM_DESC";
    case "":
      return "NAME_ASC";
    default:
      throw new Error();
  }
};

export { sortList, sortStrings, sortNumbers, typeOfAction };
