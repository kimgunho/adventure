export const convertDash = category => {
  try {
    return category.replace(/\s/g, "-");
  } catch (e) {
    return category;
  }
};

export const convertUnderscore = title => {
  try {
    return title.replace(/\s/g, "_");
  } catch (e) {
    return title;
  }
};
