export class Country {
  name!: {
    official: string;
    nativeName: any;
  };
  capital!: string;
  region!: string;
  subregion!: string;
  flags!: {
    png: string;
    svg: string;
  };
  population!: number;
  area!: number;
  timezones!: string[];
}
