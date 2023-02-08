/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
// import Marketplace from 'assets/feature/marketplace.svg';
// import Gift from 'assets/feature/gift.svg';
// import Award from 'assets/feature/award.svg';
import Mobile from 'assets/images/mobile-development.png';
import Website from 'assets/images/website-development.png';
import Software from 'assets/images/software-development.png'

const data = [
  {
    id: 1,
    imgSrc: Software,
    altText: 'Marketplace',
    title: 'Software development',
    text:
      'We specialize in custom software development that is tailored to meet the specific requirements of each client. From conceptualization to deployment, our team will work closely with you to ensure that your software is exactly what you need.',
  },
  {
    id: 2,
    imgSrc: Website,
    altText: 'Gift',
    title: 'Web application development',
    text:
      'Our web application development services are designed to help businesses improve their online presence and reach a wider audience. Whether you need a simple website or a complex web application',
  },
  {
    id: 3,
    imgSrc: Mobile,
    altText: 'Awards',
    title: 'Mobile application development',
    text:
      'We understand the importance of having a mobile presence, which is why we offer high-quality mobile application development services. Whether you need an iOS, Android or cross-platform app, our team will work closely with you to create a solution that meets your needs.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="feature">
      <Container>
        <SectionHeader
          title="Go Beyond unlimited services"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      '40px',
      '45px',
      '45px 30px',
      null,
      '60px 30px',
      '50px 40px',
      null,
      '75px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
