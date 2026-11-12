/** Minimal shape of a DOM element used by `XmlNode`. */
export interface DomElementLike {
  readonly localName?: string | null;
  readonly nodeName: string;
  readonly textContent: string | null;
  readonly childNodes: ArrayLike<DomElementLike & { readonly nodeType: number }>;
  getAttribute(name: string): string;
  hasAttribute(name: string): boolean;
}

/** Namespace-agnostic, read-only view of an XML element. */
export class XmlNode {
  constructor(private readonly element: DomElementLike) {}

  /** Local name of the element. */
  get name(): string {
    return this.element.localName ?? this.element.nodeName;
  }

  /**
   * Reads an attribute.
   *
   * @param name - Attribute name.
   * @returns The value, or `undefined` when absent.
   */
  attr(name: string): string | undefined {
    return this.element.hasAttribute(name) ? this.element.getAttribute(name) : undefined;
  }

  /**
   * Finds the first descendant element (depth-first) with a local name.
   *
   * @param name - Local element name.
   * @returns The element, or `undefined`.
   */
  find(name: string): XmlNode | undefined {
    for (let i = 0; i < this.element.childNodes.length; i += 1) {
      const child = this.element.childNodes[i];
      if (child.nodeType !== 1) continue;
      const node = new XmlNode(child);
      if (node.name === name) return node;
      const nested = node.find(name);
      if (nested !== undefined) return nested;
    }
    return undefined;
  }

  /**
   * Reads the trimmed text of the element reached by chaining `find` over the names.
   *
   * @param path - Local names to descend through; empty reads this element.
   * @returns The text, or `undefined` when missing or blank.
   */
  text(...path: string[]): string | undefined {
    let node: XmlNode | undefined = this;
    for (const step of path) {
      node = node?.find(step);
    }
    const value = node?.element.textContent?.trim();

    return value === undefined || value === '' ? undefined : value;
  }
}
