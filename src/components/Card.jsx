import heroImg from '../assets/images/illustration-article.svg';
import avatar from '../assets/images/image-avatar.webp';

const Card = () => {
  return (
    <div className="bg-custom-black rounded-xl">
      <main
        role="main"
        tabIndex={0}
        className="border-custom-black bg-custom-white group/card grid w-96 -translate-x-2 -translate-y-2 cursor-pointer items-center justify-center gap-4 rounded-xl border  p-5 outline-none transition duration-[400ms] hover:-translate-x-4 hover:-translate-y-4 focus:-translate-x-4 focus:-translate-y-4"
      >
        <img tabIndex={0} src={heroImg} alt="" className=" rounded-xl" />
        <header tabIndex={0} className="bg-custom-yellow w-fit rounded px-3 py-1 font-extrabold">
          Learning
        </header>
        <p aria-label="Published December 21, 2023" tabIndex={0} className="">
          Published 21 Dec 2023
        </p>
        <h1
          tabIndex={0}
          className="group-hover/card:text-custom-yellow group-focus/card:text-custom-yellow focus:text-custom-yellow text-2xl font-extrabold"
        >
          HTML & CSS foundations
        </h1>
        <p tabIndex={0} className="text-custom-grey">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="flex items-center gap-4">
          <img
            aria-label="Avatar of Greg Hooper"
            tabIndex={0}
            src={avatar}
            alt="Avatar of Greg Hooper"
            className="w-10"
          />
          <p tabIndex={0} className="font-bold">
            Greg Hooper
          </p>
        </div>
      </main>
    </div>
  );
};

export default Card;
