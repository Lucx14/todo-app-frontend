const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export default updateObject;

export const sortById = (arr) => {
  return arr.sort((a, b) => (a.id > b.id ? 1 : -1));
};
