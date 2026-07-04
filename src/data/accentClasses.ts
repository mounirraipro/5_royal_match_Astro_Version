export const brandAccentClass = "accent-sky";

export const getCategoryAccentClass = (name: string) => {
  const key = name.toLowerCase();
  if (key.includes("sort")) return "accent-sky";
  if (key.includes("color")) return "accent-green";
  if (key.includes("match")) return "accent-gold";
  if (key.includes("logic")) return "accent-violet";
  return brandAccentClass;
};

