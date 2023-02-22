import { v4 as uuidv4 } from 'uuid';

export class Album {
  id = uuidv4();
  name: string;
  year: number;
  artistId: string | null;

  constructor(name: string, year: number, artistId: string | null) {
    this.name = name;
    this.year = year;
    this.artistId = artistId;
  }
}
