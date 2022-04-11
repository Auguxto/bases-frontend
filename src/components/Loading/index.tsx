import { Lottie } from "@crello/react-lottie";

import loadingAnimationData from "../../assets/animations/loading.json";

const Loading = () => {
  return (
    <Lottie
      speed={1}
      width="200px"
      height="200px"
      config={{
        animationData: loadingAnimationData,
        loop: true,
        autoplay: true,
      }}
    />
  );
};

export default Loading;
