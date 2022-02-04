import RequestException from "./exceptions/request-exception.js";


export async function getJson(url) {
  try {
    const response = await fetch(url);
    const bodyJson = await response.json();
    return bodyJson;
  }
  catch(e) {
    throw new RequestException("Erro ao realizar a requisicao");
  }
}