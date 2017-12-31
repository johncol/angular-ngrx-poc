export class MusicalInstrument {
  constructor(
    public name: string,
    public imageUrl: string
  ) { }

  static new(name: string, imageUrl: string): MusicalInstrument {
    return new MusicalInstrument(name, imageUrl);
  }
}
