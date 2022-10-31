import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AvatarImage from "../assets/AvatarImage.png"

const useProfilePhoto = (photoUrl) => {
  const storage = getStorage();
  photoUrl = photoUrl === undefined ? useSelector(state => state.auth.photoUrl) : photoUrl;
  const [profileSrc, setProfileSrc] = useState(AvatarImage);

  useEffect(() => {
    const updateProfileImage = async () => {
      if (photoUrl) {
        try {
          const url = await getDownloadURL(ref(storage, photoUrl));
          setProfileSrc(url);
        } catch (error) {
          console.error(error);
        }
      } else {
        setProfileSrc(AvatarImage);
      }
    }
    updateProfileImage();
  },[photoUrl]);

  return profileSrc;
}

export default useProfilePhoto
