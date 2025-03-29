export class Report {
    constructor(type, description, location, image) {
      this.id = Date.now().toString();
      this.type = type;
      this.description = description;
      this.location = location;
      this.image = image;
    }
  }