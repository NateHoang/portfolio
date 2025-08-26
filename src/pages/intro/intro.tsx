import { useState } from "react";
import "../../App.css";
import "./intro.css";
import profilePic1 from "../../assets/IMG_1698.jpg";
import profilePic2 from "../../assets/IMG_1699.jpg";
import profilePic3 from "../../assets/IMG_1700.jpg";
import profilePic4 from "../../assets/IMG_1701.jpg";
import profilePic5 from "../../assets/IMG_1702.jpg";
import filePic from "../../assets/file.png";
import { SocialIcon } from "react-social-icons";

function Intro() {
  const name = "Nathan Hoang";
  const email = "nahoang168@gmail.com";
  const phone = "(1)323-719-9167";
  const resumeUrl =
    "https://drive.google.com/file/d/1t8ZRPZbQWus7sRnZAwe9kEW_gaVVw3Fg/view?usp=sharing";

  // Array of images for cycling
  const images = [
    profilePic1,
    profilePic2,
    profilePic3,
    profilePic4,
    profilePic5,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade effect

  // Function to handle image click and cycle through images
  const handleImageClick = () => {
    setFade(false); // Trigger fade out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true); // Trigger fade in after image changes
    }, 500); // Duration of fade-out before changing image
  };

  return (
    <div
      className="introduction-container"
      id="introduction"
      data-aos="fade-up"
    >
      <div className="introduction-block">
        <h1>{name}</h1>
        <div>Email: {email}</div>
        <div>Phone: {phone}</div>
        <div>Address: Stevenson Ranch, CA 91381</div>
        <div className="social-icons-container">
          <SocialIcon url="https://www.linkedin.com/in/nathan-hoang-6395731b8/" />
          <SocialIcon url="https://github.com/NateHoang" />
          <SocialIcon url={`mailto:${email}`} />
          <div
            className="social-icon-custom"
            style={{ background: `url(${filePic}) center / contain no-repeat` }}
          >
            <SocialIcon
              url={resumeUrl}
              style={{ opacity: 0, width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="introduction-block">
        <img
          src={images[currentImageIndex]}
          alt="profile"
          className={`profile-picture ${fade ? "fade-in" : "fade-out"}`}
          onClick={handleImageClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default Intro;
