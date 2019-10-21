import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import EmberObject, { action } from '@ember/object';
import Controller from '@ember/controller';

export default class BooksController extends Controller {
  @tracked
  bookEntry

  initBookEntry(){
    this.bookEntry = EmberObject.create();
  }

  @service store

  @action
  async removeBook( book ){
    book.deleteRecord();
    await book.save();
  }

  @action
  async createBook( bookData ){
    const book = this.store.createRecord("book");
    book.set('title', bookData.title );
    await book.save();
    this.initBookEntry();
    this.refresh();
  }

  @action
  refresh(){
    this.send("refreshModel");
  }
}
