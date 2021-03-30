export const getLocalStorage = (name: string) => {
  const result = localStorage.getItem(name);
  if (result) return JSON.parse(result);
  return result;
};

export const setLocalStorage = (
  name: string,
  value: string | number | object,
) => {
  localStorage.setItem(name, JSON.stringify(value));
};
