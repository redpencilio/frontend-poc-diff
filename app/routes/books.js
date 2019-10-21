import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default class BooksRoute extends Route {
  model(){
    this.store.unloadAll('book'); // required to sync removals
    return this.store.findAll('book');
  }

  afterModel() {
    // later(this.refreshModel, 5000);  // automatically reload model in 5s
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
