export class MusicalInstrument {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string
  ) { }

  static new(name: string, imageUrl: string): MusicalInstrument {
    return new MusicalInstrument(name.toLowerCase().replace(' ', '-'), name, imageUrl);
  }
}
