import mockData from '../../MOCK/MOCK_DATA.json'

export function fetchApi(): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mockData);
      } catch (error) {
        reject(new Error('Erro ao carregar os dados'));
      }
    }, 1000); // Simula um atraso de 1 segundo
  });
}