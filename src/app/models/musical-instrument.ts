export class MusicalInstrument {
  constructor(
    public id: number,
    public name: string,
    public imageUrl: string
  ) { }

  static new(name: string, imageUrl: string): MusicalInstrument {
    return new MusicalInstrument(null, name, imageUrl);
  }
}
