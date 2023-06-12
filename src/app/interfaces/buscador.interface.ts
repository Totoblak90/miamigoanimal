export interface SearchResult {
  title:string;
  url: string | string[];
  img: string;
  queryParams?: { [key: string]: string | string[] };
}
