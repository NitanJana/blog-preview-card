import heroImg from '../assets/images/illustration-article.svg';
import avatar from '../assets/images/image-avatar.webp';

const Card = () => {
  return (
    <div className="bg-custom-black rounded-xl">
      <div className="border-custom-black bg-custom-white group/card grid w-96 -translate-x-2 -translate-y-2 cursor-pointer items-center justify-center gap-4 rounded-xl border  p-5 transition duration-[400ms] hover:-translate-x-4 hover:-translate-y-4">
        <img src={heroImg} alt="" className=" rounded-xl" />
        <h3 className="bg-custom-yellow w-fit rounded px-3 py-1 font-extrabold">Learning</h3>
        <p className="">Published 21 Dec 2023</p>
        <h1 className="group-hover/card:text-custom-yellow  text-2xl font-extrabold">HTML & CSS foundations</h1>
        <p className="text-custom-grey">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="flex items-center gap-4">
          <img src={avatar} alt="avatar" className="w-10" />
          <p className="font-bold">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
