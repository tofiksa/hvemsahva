export const getImageFromSupabaseStorage = async (image: any) => {
  const response = await fetch(`/api/image/${image}`);
  const imgurl = await response.json();
  return imgurl;
};

export const getImagesFromSupabaseStorage = async () => {
  const response = await fetch(`/api/images/list`);
  const imgList = await response.json();
  const imageArray = [];

  // Iterate through imgList and populate imageArray
  for (const image of imgList) {
    const imageUrl = await getImageFromSupabaseStorage(image.name).then(
      (url) => {
        return url.signedUrl;
      },
    );

    imageArray.push({
      name: image.name,
      imgurl: imageUrl,
    });
  }

  localStorage.setItem('images', JSON.stringify(imageArray));
};

export const getImageUrlByNameFromLocalStorage = (imageName: any) => {
  const imageurllist = JSON.parse(localStorage.getItem('images'));
  if (!imageurllist) return null; // If imageurllist is not found in localStorage

  const filteredImage = imageurllist.filter(
    (image: { name: any }) => image.name === imageName,
  );
  return filteredImage.length > 0 ? filteredImage[0].imgurl : null;
};
