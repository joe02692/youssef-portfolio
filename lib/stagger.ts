import type { CSSProperties } from "react";

// Sets --i, which staggers the `.rise` and `.reveal` animations in globals.css.
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties;
