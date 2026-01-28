import "../styles/main.css";

/* showModal, closeModal is beschikbaar op dialog elementen */
document.querySelectorAll("[data-modal]").forEach((modalBtn) => {
  modalBtn.addEventListener("click", () => {
    const modalId = modalBtn.getAttribute("data-modal");
    document.getElementById(modalId)?.showModal();
  });
});

document.querySelectorAll("[data-close]").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const modalId = closeBtn.getAttribute("data-close");
    document.getElementById(modalId)?.close();
  });
});

/* Popover toggle */
document.querySelectorAll("[data-popover]").forEach((popoverBtn) => {
  const popoverId = popoverBtn.getAttribute("data-popover");
  const popover = document.getElementById(popoverId);

  popoverBtn.addEventListener("click", () => {
    popover?.togglePopover();
  });

  popover?.addEventListener("toggle", () => {
    popoverBtn.setAttribute(
      "aria-expanded",
      popover.matches(":popover-open") ? "true" : "false",
    );
  });
});
