const URL = 'https://services.koreanaparts.ru/calc-to';

export async function getMarksCars(model: string) {
  return await fetch(`${URL}/marks?brand[]=${model}`);
}

export async function getModelsCars(id: number) {
  return await fetch(`${URL}/models?marka=${id}`);
}

export async function getPriceCalculate(id: number) {
  return await fetch(`${URL}/to?model=${id}`);
}
