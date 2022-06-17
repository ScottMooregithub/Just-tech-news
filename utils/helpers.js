module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },

  format_plural: (word, wordCount) => {
    if (wordCount > 1) {
      return `${word}s`;
    } else if (wordCount === 0) {
      return `${word}s`;
    } else {
      return `${word}`;
    }
  },

  //   format_singular: (word, wordCount) => {
  //     if (wordCount === 1) {
  //       return `${word}`;
  //     } else {
  //       return `${words}s`;
  //     }
  //   },

  format_url: (url) => {
    // cut off http://
    // cut off https://
    //cut off www.
    // cut off everything after .com
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];

    // BASED METHOD DOWN BELOW
    // new URL(url).domain
  },
};
