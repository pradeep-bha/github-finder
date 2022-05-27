import { FaTwitter, FaInstagram } from "react-icons/fa";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-8 font-arvo text-white">
        Hi I'm <span className="text-green-500">Pradeep</span>
      </h1>
      <p className="mb-6 text-xl font-light font-nunito text-gray-300">
        I started my journey as a Commerce student. Didn’t know what profession
        I should choose. But one thing that worked well for me is that I got
        enough opportunities to learn and explore new things. Out of curiosity,
        in my college days, I started designing websites on Wix. Then got
        introduced to UI/UX design. Made some interesting designs, wireframes,
        and prototypes. But one thing that led me to code is what's the meaning
        of my designs if I can't create them in real. It's like giving life to
        something. And today, here I'm giving my designs a life.
      </p>
      <p className="text-white font-nunito">
        Find me on:
        <a className="inline-block ml-2 " href="https://twitter.com/02_pradeep">
          <FaTwitter color="aqua" />
        </a>
        <a
          className="inline-block ml-2 "
          href="https://www.instagram.com/pradeep__bhandari/"
        >
          <FaInstagram color="#cd486b" />
        </a>
      </p>
    </div>
  );
}

export default About;
