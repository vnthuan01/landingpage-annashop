export function flyToTarget(startX: number, startY: number, targetSelector: string, imageUrl: string) {
  const target = document.querySelector(targetSelector) as HTMLElement;
  if (!target) return;

  const targetRect = target.getBoundingClientRect();
  const targetX = targetRect.left + targetRect.width / 2;
  const targetY = targetRect.top + targetRect.height / 2;

  const clone = document.createElement("img");
  clone.src = imageUrl;
  clone.style.position = "fixed";
  clone.style.left = `${startX}px`;
  clone.style.top = `${startY}px`;
  clone.style.width = "60px";
  clone.style.height = "60px";
  clone.style.objectFit = "cover";
  clone.style.borderRadius = "50%";
  clone.style.zIndex = "9999";
  clone.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
  clone.style.transform = "translate(-50%, -50%) scale(1)";
  clone.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  clone.style.pointerEvents = "none";

  document.body.appendChild(clone);

  // Trigger reflow
  void clone.offsetWidth;

  clone.style.left = `${targetX}px`;
  clone.style.top = `${targetY}px`;
  clone.style.transform = "translate(-50%, -50%) scale(0.2)";
  clone.style.opacity = "0.2";

  setTimeout(() => {
    clone.remove();
    // Bump animation on target
    target.style.transform = "scale(1.2)";
    setTimeout(() => {
      target.style.transform = "scale(1)";
    }, 200);
  }, 800);
}
