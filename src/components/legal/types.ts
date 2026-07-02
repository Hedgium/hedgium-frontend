export type LegalDocVariant = "standalone" | "embedded";

/**
 * Prefix applied to every in-page `id` a legal doc renders (e.g. "terms-").
 * Required when multiple legal docs are embedded on the same page (see
 * `/legal-complaints-investor-charter`) to avoid duplicate IDs, which break
 * fragment navigation, `aria-labelledby`/`aria-describedby` references, and
 * fail WCAG 4.1.1 (unique IDs). Defaults to "" for standalone pages, where a
 * single doc owns the page and its original ids must stay stable.
 */
export type LegalDocIdPrefix = string;
