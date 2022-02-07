export class Country {
  name!: {
    official: string
  };
  capital!: string;
  region!: string;
  subregion!: string;
  flags!: {
    png: string;
    svg: string;
  };
}
