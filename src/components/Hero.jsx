import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumx_logo" className="w-28 object-contain" />

        <button 
          type="button"
          onClick={() => window.open('')} className="black_btn">
            GitHub
          </button>
      </nav>

      <h1 className="head_text">
        Summerize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        SImplify your reading with Summize, an open-source article summerizer that transforms lengthy articles into clear and consice summaries
      </h2>
    </header>
  )
}

export default Hero