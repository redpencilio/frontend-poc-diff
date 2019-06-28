import { action } from '@ember/object';
import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
  model(){
    return this.store.findAll('book');
  }

  setupController(controller){
    super.setupController(...arguments);
    controller.initBookEntry();
  }

  @action
  refreshModel(){
    this.refresh();
  }
}
