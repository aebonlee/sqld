import { useEffect } from 'react';

export function useTableScroller() {
  useEffect(() => {
    function wrapTables(container) {
      container.querySelectorAll('table').forEach(table => {
        if (table.parentElement.classList.contains('table-scroll-wrapper')) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'table-scroll-wrapper';
        table.parentElement.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      });
    }

    const timer = setTimeout(() => wrapTables(document), 100);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) wrapTables(node);
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
