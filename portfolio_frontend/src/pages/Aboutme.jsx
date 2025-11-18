import React, { useEffect } from 'react';
import '../assets/aboutme-103-62.css';

/**
 * PUBLIC_INTERFACE
 * Aboutme
 * A React component that reproduces the static Aboutme screen (assets/aboutme-103-62.html)
 * with its styles (assets/aboutme-103-62.css) and minimal runtime behavior from
 * assets/aboutme-103-62.js to replace an old display name with the new one.
 *
 * Notes:
 * - Image references are expected under public/figmaimages to work with CRA static serving.
 * - We scope the DOM walk to the local root element to avoid global side-effects.
 */
function Aboutme() {
  useEffect(() => {
    // Ported logic from assets/aboutme-103-62.js
    const OLD_NAME = 'Anderson Coper';
    const NEW_NAME = 'Selva Tharun R R';

    const root = document.getElementById('aboutme-103-62-root');
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.indexOf(OLD_NAME) !== -1) {
        // Use replaceAll if available; otherwise fallback to split/join
        if (typeof node.nodeValue.replaceAll === 'function') {
          node.nodeValue = node.nodeValue.replaceAll(OLD_NAME, NEW_NAME);
        } else {
          node.nodeValue = node.nodeValue.split(OLD_NAME).join(NEW_NAME);
        }
      }
    }

    // Defensive minimal CSS adjustments for overflow (best-effort)
    try {
      const elements = root.querySelectorAll('*');
      elements.forEach((el) => {
        const cs = window.getComputedStyle(el);
        if (
          cs.display === 'inline' ||
          cs.display === 'inline-block' ||
          cs.display === 'block' ||
          cs.display === 'flex' ||
          cs.display === 'grid'
        ) {
          if (el.scrollWidth > el.clientWidth) {
            const ls = parseFloat(cs.letterSpacing);
            if (!Number.isNaN(ls)) {
              el.style.letterSpacing = `${ls - 0.1}px`;
            }
          }
        }
      });
    } catch {
      // no-op
    }
  }, []);

  // Translate the static HTML to JSX while preserving class names and structure
  return (
    <div className="aboutme-103-62-screen" id="aboutme-103-62-root">
      {/* Child: AboutMe(3) 1 (rectangle) */}
      <img
        id="el-105-2"
        src="/figmaimages/figma_image_105_2.png"
        alt="AboutMe(3) 1"
      />
    </div>
  );
}

export default Aboutme;
