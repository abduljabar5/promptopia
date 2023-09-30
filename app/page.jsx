import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompt</span>
        </h1>
        <p className="desc text-center">
            promptopia is an open-source AI promting tool for modern world to Discover, create and share creative prompts.
        </p>

        <Feed />
    </section>
  )
}

export default Home;