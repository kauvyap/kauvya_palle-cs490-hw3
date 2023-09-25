import { MetaTags } from '@redwoodjs/web'
//this is the about page
const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1>AboutPage</h1>

      <main>
        <p>
          This site was created to demonstrate my mastery of redwood: Look on my
          works, ye mighty, and despair~!
        </p>
      </main>
    </>
  )
}

export default AboutPage
