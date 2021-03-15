class Engine {
  /**
   *
   * @param {Array.<{id:String, text:String}>} arr
   */
  constructor(arr) {
    this.storage = arr;
  }

  search(template) {
    const results = this.storage.filter(
      (i) => i.text.includes(template.replace(/[^\w\s]/gi, '')),
    );
    return results.map((i) => i.id);
  }
}

/**
 *
 * @param {Array.<{id:String, text:String}>} arr
 */
export default function buildEngine(arr = []) {
  return new Engine(arr);
}
