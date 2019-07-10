import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  constructor() {
    super(...arguments);
    const isProducer = window.location.port == "81" || window.location.port == "4200";
    this.role = isProducer ? "producer" : "consumer";
  }
}
