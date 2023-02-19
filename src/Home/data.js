export const baseURL = 'http://localhost:3000'
export const header = [
  {
    title: 'Home',
    children: [
      {
        title: 'Landing Page', desc: '', img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg', link: '/', top: '2px',
      },
    ],
  },
  {
    title: 'Features',
    children: [
      {
        title: 'Project ideas generator', desc: '', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: `${baseURL}/ideas`,
      },
      {
        title: 'Specific ideas generator', desc: '', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: `${baseURL}/idea`,
      },
      {
        title: 'Project title generator', desc: '', img: 'https://gw.alipayobjects.com/zos/rmsportal/qkNZxQRDqvFJscXVDmKp.svg', link: `${baseURL}/title`,
      },
      {
        title: 'Project description generator', desc: '', img: 'https://gw.alipayobjects.com/zos/rmsportal/MrUQjZNOJhYJCSZZuJDr.svg', link: `${baseURL}/description`,
      },
    ],
  },
  {
    title: 'About',
    children: [
      {
        title: 'Our team', desc: '@srini047', img: 'https://gw.alipayobjects.com/zos/rmsportal/VsVqfjYxPTJaFbPcZqMb.svg', link: 'https://github.com/srini047',
      },
    ],
  },
];

export const banner = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: 'An exhilarating project', className: 'seeconf-en-name' },
      { children: 'Hackathon Project Initiater', className: 'seeconf-title', tag: 'h1' },
      { children: 'Explore the different features available to build your next hackathon project', className: 'seeconf-cn-name' },
      {
        children: 'Learn more',
        className: 'banner-button',
        tag: 'button',
        link: `${baseURL}/ideas`,
      },
      { children: 'Ideate | Innovate | Build', className: 'seeconf-time' },
    ],
  },
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: 'Find out the best', className: 'seeconf-en-name' },
      { children: 'Tech stack & Compare (Beta)', className: 'seeconf-title', tag: 'h1' },
      { children: 'Design | Full-stack | Comparison', className: 'seeconf-cn-name' },
      {
        children: 'In beta',
        className: 'banner-button',
        tag: 'button',
        link: '/404',
      },
    ],
  },
];

export const page1 = {
  title: 'Features',
  children: [
    {
      title: 'Ideas generator',
      content: 'Cool ideas to turn into live projects',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
      link: `${baseURL}/ideas`,
    },
    {
      title: 'Title generator',
      content: 'Catchy titles to attract the project and add meaning',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
      link: `${baseURL}/title`,
    },
    {
      title: 'Description generator',
      content: 'Short but informative description of the project',
      src: 'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: `${baseURL}/description`,
    },
  ],
};

export const page3 = {
  title: 'Reason for everyone\'s favorite product',
  children: [
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://youtube.com/',
    },
    {
      img: 'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
      imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
      src: 'https://youtube.com/',
    },
  ],
};

export const page4 = {
  title: 'Many thanks to 💙',
  children: [
    '', // company name
  ],
};

export const footer = [
  {
    title: 'Hacakthon project Initiater',
    children: [
      { title: 'Project Ideas Generator', link: `${baseURL}/ideas` },
      { title: 'Specific Idea Generator', link: `${baseURL}/idea` },
      { title: 'Project Description Generator', link: `${baseURL}/description` },
      { title: 'Project Title Generator', link: `${baseURL}/title` },
    ],
  },
  {
    title: 'Upcoming features',
    children: [
      { title: 'Login Page', link: `${baseURL}/login` },
      { title: 'Dashboard', link: `${baseURL}/user/profile` },
    ],
  },
  {
    title: 'Contact me',
    children: [
      { title: 'Twitter', link: 'https://twitter.com/srini047' },
      { title: 'LinkedIn', link: 'http://linkedin.com/in/sriniketh-jayasendil/' },
      { title: 'Github', link: 'https://github.com/srini047' },
      { title: 'Portfolio', link: 'http://sriniketh.design' },
    ],
  },
  {
    title: '++ Code ++',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
    children: [
      // { title: 'Frontend deployment', desc: '', link: '' },
      { title: 'Landing', desc: '', link: 'https://github.com/srini047/hackathon-projects-landing' },
      { title: 'Frontend', desc: '', link: 'https://github.com/srini047/hackathon-projects-frontend' },
      { title: 'Backend', desc: '', link: 'https://github.com/srini047/hackathon-projects-backend' },
      { title: 'Sponsor this cool project', desc: 'It might generate more than what you sponsor in the future👀', link: 'https://www.buymeacoffee.com/srini047' },
    ],
  },
];

// Preloading at the map;
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  [
    'https://gw.alipayobjects.com/zos/rmsportal/KtRzkMmxBuWCVjPbBgRY.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/qIcZMXoztWjrnxzCNTHv.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/eLtHtrKjXfabZfRchvVT.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/iVOzVyhyQkQDhRsuyBXC.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/HxEfljPlykWElfhidpxR.svg',
    'https://gw.alipayobjects.com/zos/rmsportal/wdarlDDcdCaVoCprCRwB.svg',
  ].concat(page4.children).forEach((src) => {
    const img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}
