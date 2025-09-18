export interface AmiiboData {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
    au: string | null;
    eu: string | null;
    jp: string | null;
    na: string | null;
  };
  tail: string;
  type: string;
}
