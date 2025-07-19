import Lottie from 'lottie-react';
import animationData from '../../../../public/animation.json'; // Path to your JSON file

const LottieAnimation = () => {
  return (
    <div className="lottie-container">
      <Lottie animationData={animationData} loop={true} className='lg:w-[650px] lg:h-[400px] md:w-[350px] w-[400px] h-[300px]'/>
    </div>
  );
};

export default LottieAnimation;