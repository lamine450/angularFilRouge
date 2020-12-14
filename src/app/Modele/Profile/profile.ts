export class Profile {
  constructor(id: number, libelle: string, archive: string) {
    this.id = id;
    this.libelle = libelle;
    this.archive = archive;
  }
  id: number;
  libelle: string;
  archive: string;
}
