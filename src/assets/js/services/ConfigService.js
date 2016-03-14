export default class ConfigService {
  constructor(siteName) {
    this.siteName = siteName;
  }

  get siteName() { return this._siteName || ''; }
  set siteName(name) { this._siteName = name;}
}
