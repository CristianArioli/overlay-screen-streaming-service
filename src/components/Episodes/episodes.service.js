import { api } from "../../services/api";

export async function getEpisodesOfTheShow() {
  return await api.get('episodes/SHOW123.json').then(response => response.data);
}
