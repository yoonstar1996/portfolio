export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const headerOffset = 72; // 네비게이션 높이 (px 단위)
    const elementPosition =
      section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
