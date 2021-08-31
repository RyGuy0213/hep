import type { NextPage } from 'next';
import { Default } from '../components/02-molecules/TFEventScore/TFEventScore.stories';
import CardGrid from '../components/03-organisms/CardGrid/CardGrid';
import Page from '../components/04-templates/Page/Page';

const techCards = [
  {
    heading: 'React.js',
    media: (
      <img
        alt="React.js logo"
        src="data:image/png;base64,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"
        style={{ height: '200px' }}
      />
    ),
    content: <p>Reusable UI components developed in React.</p>,
  },
  {
    heading: 'Next.js',
    media: (
      <img
        alt="Next.js logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+VlZWpqanm5uZDQ0PAwMDDw8NhYWF3d3fh4eG4uLg9PT2ZmZmkpKQiIiJsbGzT09OxsbHx8fFNTU2enp46OjonJyfJycmJiYkXFxd2dnYKCgpeXl7v7+80NDRVVVV/f39QUFDZ2dmOjo5ISEgbGxslJSWd2tO4AAAEy0lEQVR4nO3b63aiMBQF4BxF6r0oKt4rRTvv/4ZzsLYinAS6bCZM1v5+VSxttgRyElApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9sXTfAtsT3hK9j1y2wre+6AbbtXl23wLLo4LoFlvU6rltg2X60d90Ey0bvrltg2WTiugWWHWauW2DZ/vjmugmWDQeuW2DZfO26BZal5HnBfaHIdRPs2sYj102wbHZ03QLLlnRy3QS7duR5MbOioesmfNpMOonp/WTS0TgrtVhOVrodAxqrhXZnNln8fhrJkchYOPZIa5/vrTtQI9rwx6ffmW0sxBEE/K9Sw/ucMOyKpiof8Ggq7ra7fm6nefH3Awqmhdfzk4U4Av63RIbimBOaWsJHSRrUE6KPysaQwh827lcENJ2b+iknNK6TrYmErZnUL0J6+WHjfkVAXT6b9KdEXcJtTNXiuiseLYcJD0Ta1b66hKpPdC5tiiiWftNhQmXop7UJ+YBR72FDEsu7uEyohpXj8KU+Ie8cPLyeXf9kldOEPe31tEHCFdG88HJZCvzNaUI10fXTBgl5nlsYMt6JNMWK24R8fZcXppsk5LbT16LvR0xL7W85TTgmEkvMRgn3x+8usNYX3I4TcnUiNq1RQnWi25HrGAYe1wn5Eij102YJ+TymfO3+3VRPO0v4VTon5XHtqmFCPo/5CroPhALnm/OEPB/Iqu83TcjDfKheKDZMNt0n5KtEtZ/WzC3udjzNIjKtcLcgIVfRl/L7nDAYCoLKmDDnmaZxetSChFwyV/qpdo5fWQp9442VD6ioDQnVqLI+xgkHq7GgcsLNOKFwIt+1IiG/LI37nLDZYwY8Xpx1axqf2pHwUB73m15LF/mY3zX+cjsSqmnpddOE8bVuyyjWPznTkoS84WFq0DDhbSRcmdYm25Lw8thPmyXcEO2uP6SGsq0tCfmSUdzSKGHvPgceaaeH7hJW7p9kxWGtUcLiOsZRN8VvUcI3Ktz3a5JwXpxbroRi4JOcsMNzm8Mwjq3dqBIS8ll1L8kaJIwez72OrjqVE87X/JEue33jUPoMKSGXJ6evH+sTbqnU8rVmWUubMMqXzU+2HksRE+7v51J9woxKN7NfY3m5wHAMs4EwNf0lYkI1+J751yZcVsu6iMTVKG1C9c6HPbP17JSckC/6t2bXJeyTMKmUqzd9QrYKjFX7EzQJt/Gtn9Yk/IjF+cSQjtVHhaoJT3x1Ga3VLu8wG90g8yxNQu5pn2N4TcK1vG6RkLBgU0q4PHK53j3zdfhCYbTRLrM+S5eQB7nrg6/mVYyzfINUrt5KCSP+CKNsmN8wWYRBZroR/RRtQhVfL5GccD0ShePyHYuisLpy56imOWpW8/NV8Lz1F/2TBoetZli4/eHyTcS1aanRnijVjkTT/Hr6kQ400j+rdKC/xPcGaenNQ9q6LyXMxFu5PnnVnmXe6DdbwfifLaVHSfySOXnI55/y/TlmPhVj37+0pLr+99PZznULbEuGvn8BVEX+99Op9/1UvRgfBfdB4n19qvq+f8dOqY3v35NUytoySmu8nVy3wLqe9+O+6nlfgu+9HxTV3vuDCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF77C51rLm5JizlVAAAAAElFTkSuQmCC"
        style={{ height: '200px' }}
      />
    ),
    content: <p>This React application is built on top of Next.js.</p>,
  },
  {
    heading: 'Typescript',
    media: (
      <img
        alt="Typescript logo"
        src="https://miro.medium.com/max/1000/1*2f1lCdtqoP_BnPeZby3QRg.png"
        style={{ height: '200px' }}
      />
    ),
    content: (
      <p>
        Javascript is a great language. It's even better when it's strongly
        typed.
      </p>
    ),
  },
  {
    heading: 'USWDS',
    media: (
      <img
        alt="USWDS logo"
        src="https://s3.amazonaws.com/digitalgov/uswds-logo.png"
        style={{ height: '200px' }}
      />
    ),
    content: (
      <p>
        This project incorporates just a few pieces from the U.S. Web Design
        System. It is not intended to completely comply with USWDS or 508
        standards, but rather simply demonstrate an ability to jump into a tool
        and utilize a few pieces for short/fast demo project.
      </p>
    ),
  },
  {
    heading: 'Additional Tools',
    content: (
      <ul>
        <li>
          Deployed on <b>Vercel</b>
        </li>
        <li>
          Unit testing with <b>Jest</b>
        </li>
        <li>
          <b>CSS Modules</b>
        </li>
        <li>
          <b>Storybook</b> component library
        </li>
      </ul>
    ),
  },
];

const SiteBuildInfo: NextPage = () => {
  return (
    <Page id={3}>
      <h1>Under the Hood</h1>
      <CardGrid cards={techCards} />
    </Page>
  );
};

export default SiteBuildInfo;
