import { api } from "../../services/api";

export async function getGeneralDataAboutTheShow() {
  return await api.get('tv-shows/SHOW123.json').then(response => response.data);
}