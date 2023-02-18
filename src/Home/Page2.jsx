import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Icon } from 'antd';

import Tetris from './technology-comp/Tetris';
import Column from './technology-comp/Column';
import Coordinate from './technology-comp/Coordinate';
import Building from './technology-comp/Building';


const pageData = [
  {
    title: 'Ant Design',
    content: 'A UI design language and technology implementation for enterprise-level applications',
    links: [
      <a key="0" href="https://ant.design" target="_blank">Web&nbsp;&nbsp;<Icon type="right" /></a>,
      <a key="1" href="https://mobile.ant.design" target="_blank">Mobile&nbsp;&nbsp;<Icon type="right" /></a>,
      // <a key="2" href="https://pro.ant.design" target="_blank">Pro&nbsp;&nbsp;<Icon type="right" /></a>,
    ],
    full: true,
    Bg: Tetris,
  },
  {
    title: 'Cohere AI',
    content: 'Cutting-edge AI platform backed by NLP to create powerful language models capable of performing a wide range of tasks, from chatbots and voice assistants to content generation and analysis.',
    links: (<a href="http://cohere.ai" target="_blank">Know more here&nbsp;&nbsp;<Icon type="right" /></a>),
    Bg: Column,
    full: true,
  },
  {
    title: 'Twilio verify service',
    content: 'Provides secure and easy-to-use 2FA solutions to help verify user identities and prevent fraud in applications.',
    links: (<a>stay tuned</a>),
    full: true,
    Bg: Building,
  },
  {
    title: 'OpenAI',
    content: 'cutting-edge research organization that develops AI technologies to create powerful language models and solve some of the world\'s most pressing challenges, while ensuring that AI is developed and used in a safe and ethical manner.',
    links: (<a>stay tuned</a>),
    full: true,
    Bg: Building,
  },
  {
    title: 'GoDaddy Registry',
    content: 'A leading provider of domain name registry services that helps individuals and organizations secure, manage, and promote their online presence with a wide range of domain extensions and other digital tools',
    links: (<a href="" target="_blank">Know more here&nbsp;&nbsp;<Icon type="right" /></a>),
    full: true,
    Bg: Column,
  },
];

export default class Design extends React.PureComponent {
  state = {
    hover: null,
  };
  onMouseEnter = (hover) => {
    this.setState({
      hover,
    });
  }
  onMouseLeave = () => {
    this.setState({
      hover: null,
    });
  }
  render() {
    const { isMobile } = this.props;
    const children = pageData.map((item, i) => {
      const colProps = {
        md: item.full ? 24 : 8, xs: 24,
      };
      return (
        <Col {...colProps} key={i.toString()} className="page2-item-wrapper">
          <div
            className={`page2-item${item.full ? ' full' : ''}`}
            onMouseEnter={() => { this.onMouseEnter(item.title); }}
            onMouseLeave={this.onMouseLeave}
          >
            <div className="page2-item-bg">
              {item.Bg && React.createElement(item.Bg, {
                hover: !isMobile && this.state.hover === item.title,
                isMobile,
              })}
            </div>
            <div className="page2-item-desc">
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p className="page2-item-links">
                {item.links}
              </p>
            </div>
          </div>
        </Col>
      );
    });
    return (
      <div className="page-wrapper page2">
        <div className="page">
          <h1>Technologies used</h1>
          <i />
          <OverPack className="page2-content">
            <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
              {children}
            </QueueAnim>
          </OverPack>
        </div>
      </div>);
  }
}
