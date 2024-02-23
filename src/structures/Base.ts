/**
 * The base for a data model.
 *
 * `Serves no purpose at the moment.`
 */
export abstract class Base<T> {
  private raw: T;

  constructor(data: T){
    this.raw = data
  }
}
