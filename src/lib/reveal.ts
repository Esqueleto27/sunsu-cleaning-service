import { animate, inView } from 'motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const DISTANCE = 28;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function fadeUp(el: HTMLElement, delay = 0) {
  if (prefersReducedMotion()) {
    el.style.opacity = '1';
    return;
  }
  animate(
    el,
    { opacity: [0, 1], transform: [`translateY(${DISTANCE}px)`, 'translateY(0)'] },
    { duration: 0.6, delay, ease: EASE },
  );
}

/**
 * Wires up scroll-reveal animations for the whole page.
 * Convention: `data-reveal` fades an element in on its own; `data-reveal-group`
 * fades its direct `data-reveal-item` children in with a stagger, once the group enters view.
 */
export function initReveal(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    inView(el, () => fadeUp(el), { amount: 0.2 });
  });

  root.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = Array.from(group.querySelectorAll<HTMLElement>(':scope > [data-reveal-item], :scope > * > [data-reveal-item]'));
    inView(
      group,
      () => {
        items.forEach((el, i) => fadeUp(el, i * 0.1));
      },
      { amount: 0.2 },
    );
  });
}
