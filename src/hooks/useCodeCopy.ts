import { useEffect } from 'react';

export function useCodeCopy() {
  useEffect(() => {
    function addButtons(container) {
      container.querySelectorAll('pre code').forEach(block => {
        if (block.parentElement.closest('.sql-block')) return;
        if (block.parentElement.querySelector('.copy-btn')) return;
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = '복사';
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(block.textContent);
            btn.textContent = '완료!';
            btn.classList.add('copied');
            setTimeout(() => {
              btn.textContent = '복사';
              btn.classList.remove('copied');
            }, 2000);
          } catch {
            btn.textContent = '실패';
            setTimeout(() => { btn.textContent = '복사'; }, 2000);
          }
        });
        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(btn);
      });
    }

    const timer = setTimeout(() => addButtons(document), 100);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) addButtons(node);
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
