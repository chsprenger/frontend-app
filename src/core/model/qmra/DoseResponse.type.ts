export default interface IDoseResponse {
  id: string;
  pathogenId: number;
  pathogenName: string;
  pathogenGroup: string;
  bestFitModel: string;
  k: number;
  hostType: string;
  doseUnits: string;
  route: string;
  response: string;
  reference: string;
  link: string;
}
