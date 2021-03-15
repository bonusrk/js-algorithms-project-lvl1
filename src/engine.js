class Engine {
  /**
   *
   * @param {Array.<{id:String, text:String}>} arr
   */
  constructor(arr) {
    this.storage = arr;
  }

  search(template) {
    return this.storage.filter(i => i.text.includes(template));
  }
}

/**
 *
 * @param {Array.<{id:String, text:String}>} arr
 */
export default function (arr = []) {
  return new Engine(arr);
}
