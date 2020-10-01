export function addContributorsContent(
  imageSrc,
  imageInfo,
  contribGitHup,
  contribLogin,
  contributions,
) {
  return `<div class="contributor-content box">
<h5 class="flex"><img src='${imageSrc}' alt ="${imageInfo}" class ="avatar-img"><a href='${contribGitHup}' target= "_blank"><span>${contribLogin} </span></a><span>${contributions}</span></h5></div>`;
}
