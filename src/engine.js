const compare = (a, b, template) => {
  const aLength = a.text.match(new RegExp(template, 'g')).length;
  const bLength = b.text.match(new RegExp(template, 'g')).length;
  return bLength - aLength;
};

class Engine {
  /**
   *
   * @param {Array.<{id:String, text:String}>} arr
   */
  constructor(arr) {
    this.storage = arr;
  }

  search(template) {
    const t = template.replace(/[^\w\s]/gi, '');
    const results = this.storage.filter(
      (i) => i.text.includes(t),
    );
    const orderedResults = results.sort((a, b) => compare(a, b, t));
    return orderedResults.map((i) => i.id);
  }
}

/**
 *
 * @param {Array.<{id:String, text:String}>} arr
 */
export default function buildEngine(arr = []) {
  return new Engine(arr);
}
