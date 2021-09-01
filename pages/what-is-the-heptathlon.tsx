import type { NextPage } from 'next';
import Page from '../components/04-templates/Page/Page';
import SummaryBox from '../components/02-molecules/SummaryBox/SummaryBox';
import CardGrid from '../components/03-organisms/CardGrid/CardGrid';

const eventCards = [
  {
    heading: '100 Hurdles',
    media: (
      <img
        alt="Heather Miller-Koch hurdling"
        src="https://www.gannett-cdn.com/-mm-/e1d78d18d18c0e71d5c7c4a0350b598687f50fe1/c=0-50-534-352/local/-/media/2017/01/27/StCloud/StCloud/636211307076450382-miller-koch-2.jpg?width=534&height=302&fit=crop&format=pjpg&auto=webp"
      />
    ),
    content: (
      <p>
        There are 10 hurdles over 100 meters. The distance from the starting
        line to the first hurdle is 13 meters. The distance between the hurdles
        is 8.5 meters. The distance from the last hurdle to the finish line is
        10.5 meters.
      </p>
    ),
  },
  {
    heading: 'High Jump',
    media: (
      <img
        alt="Heather Miller-Koch high jumping"
        src="https://chorus.stimg.co/21241013/US_TRACK_TRIALS_ATHLETICS_40711491.jpg?fit=crop&crop=faces"
      />
    ),
    content: (
      <p>
        The high jump involves jumping over a rigid bar onto a soft landing mat.
        The bar continues to go up 3cm at a time untill all athletes have been
        eliminated. An athlete remains in the competition until she has three
        consecutive misses.
      </p>
    ),
  },
  {
    heading: 'Shot Put',
    media: (
      <img
        alt="Heather Miller-Koch shot putting"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvLbReKMZlUMx5L5fezRWHlayNmE-0rchcA&usqp=CAU"
      />
    ),
    content: (
      <p>
        A women&apos;s shot has a mass of four kilograms. This event requires
        the most strength of the seven disciplines. Athletes who specialize in
        the shot put often use a rotational technique to hurl the ball, but
        heptathletes almost exclusively use a linear technique called a
        &lsquo;glide&rsquo;.
      </p>
    ),
  },
  {
    heading: '200 Meters',
    media: (
      <img
        alt="Heather Miller-Koch sprinting 200 meters"
        src="https://pbs.twimg.com/media/EXWwk4mUEAAqTnQ.jpg"
      />
    ),
    content: (
      <p>
        Half a lap around a standard outdoor track. The first half of the race
        is run on the curve, and the second half is run on the home straight.
      </p>
    ),
  },
  {
    heading: 'Long Jump',
    media: (
      <img
        alt="Heather Miller-Koch long jumping"
        src="https://media.gettyimages.com/photos/s-heather-millerkoch-competes-in-the-womens-heptathlon-long-jump-the-picture-id589076826"
      />
    ),
    content: (
      <p>
        The long jump involves running at very high speeds and launching
        one&apos;s body into a sand landing area. The athlete must take off from
        behind the designated takeoff line, otherwise the attempt will result in
        a foul.
      </p>
    ),
  },
  {
    heading: 'Javelin Throw',
    media: (
      <img
        alt="Heather Miller-Koch throwing javelin"
        src="https://bloximages.chicago2.vip.townnews.com/chippewa.com/content/tncms/assets/v3/editorial/a/d8/ad816cef-be2d-5db4-a02f-f51d64ef9801/57b1e4e06f5cf.image.jpg?resize=500%2C726"
        style={{ maxHeight: '300px' }}
      />
    ),
    content: (
      <p>
        The women&apos;s javelin has a mass of 600 grams and a length between
        220 and 230 centimeters. It is arguably the discipline that is the
        hardest on the athlete&apos;s body.
      </p>
    ),
  },
  {
    heading: '800 Meters',
    media: (
      <img
        alt="Heather Miller-Koch celebrating with flag"
        src="http://res.cloudinary.com/ybmedia/image/upload/c_scale,f_auto,q_auto,w_700/v1/m/4/e/4e918e1a2dcf7d49eef7a3d1bb7468d58a8f24db/46.jpg"
      />
    ),
    content: (
      <p>
        Two laps around a standard track, this seventh and final event is
        effectively a half-mile race. It requires not only the endurance to
        finish the race, but the endurance to finish the race at the end of two
        very difficult days. This was my wife&apos;s best event. She won this
        discipline at the Olympic Games.
      </p>
    ),
  },
];

const WhatIs: NextPage = () => {
  return (
    <Page id={1}>
      <h1>What is the Heptathlon?</h1>
      <div className="margin-bottom-4">
        <SummaryBox heading="Summary">
          <ul className="usa-list">
            <li>
              The heptathlon consists of seven separate disciplines contested
              over the course of two days.
            </li>
            <li>
              Here is more information about the &nbsp;
              <a
                className="usa-summary-box__link usa-link--external"
                href="https://en.wikipedia.org/wiki/Heptathlon"
              >
                heptathlon
              </a>
              .
            </li>
          </ul>
        </SummaryBox>
      </div>
      <div>
        <CardGrid cards={eventCards} />
      </div>
    </Page>
  );
};

export default WhatIs;
