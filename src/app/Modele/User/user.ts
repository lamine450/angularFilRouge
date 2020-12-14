export class User {
  constructor(id: number, prenom: string, nom: string, username: string, password: string, email: string, type: string) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.username = username;
    this.password = password;
    this.email = email;
    this.type = type;
  }
  id: number;
  prenom: string;
  nom: string;
  username: string;
  password: string;
  email: string;
  type: string;
}
