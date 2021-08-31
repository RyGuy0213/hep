import type { NextPage } from 'next';
import Page from '../components/04-templates/Page/Page';

const Home: NextPage = () => {
  return (
    <Page id={0}>
      <h1>Our Olympic Dream</h1>
      <img
        alt="Heather Miller-Koch long jumping"
        src="https://media.gettyimages.com/photos/s-heather-millerkoch-competes-in-the-womens-heptathlon-long-jump-the-picture-id589076826"
      />
      <p className="line-height-sans-6">
        In 2016, I had the incredible honor of coaching my wife at the Olympic
        Games in Rio de Janeiro. The competition was two days, but the
        preparation lasted many, many years. It was the culmination of so much
        dedication. I worked hard to support my wife as she committed every
        ounce of her being to realizing her Olympic dream. Making that dream a
        reality was one of the greatest joys of my life. It will remain that way
        for years to come.
      </p>
      <p>
        Our preparation took us many places. We lived in New York City, Southern
        California, and the Twin Cities of Minnesota. We traveled to Germany,
        Austria, Canada, Colombia, and Brazil. We also saw much of the United
        States.
      </p>
      <p>
        The heptathlon changed my life, and I want to tell you more about it!
      </p>
    </Page>
  );
};

export default Home;
