import React from 'react';
import Masonry from 'masonry-layout';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SSI, Dolphin, Spectrum, LWPS, Intel, Quickmart } from '../../assets/projects/index'
import './msry.css'

const links = {
  SSI: 'https://ssisouthsudan.com/',
  Spectrum: 'https://spectrumadvertizing.com/',
  Dolphin: 'https://greendolphin.co.ke/',
  LWPS: 'https://lwps.sc.ke/',
  // Intel: 'https://brandintel.co.ke/',
  Intel: '',
  Quickmart: 'https://quickmart.co.ke/'
};

class ProjectLayout extends React.Component {
  componentDidMount() {
    this.msnry = new Masonry(this.grid, {
      itemSelector: '.grid-item',
      columnWidth: 316,
      gutter: 20
    });
  }

  render() {
    return (
      <div className="msry-grid" ref={grid => this.grid = grid}>
        <div className="grid-item" style={{ backgroundImage: `url(${SSI})`, backgroundSize: 'cover', height: '600px' }} ><a href={links.SSI} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
        <div className="grid-item" style={{ backgroundImage: `url(${Spectrum})`, backgroundSize: 'cover', height: '370px' }} ><a href={links.Spectrum} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
        <div className="grid-item" style={{ backgroundImage: `url(${Dolphin})`, backgroundSize: 'cover', height: '600px' }} ><a href={links.Dolphin} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
        <div className="grid-item" style={{ backgroundImage: `url(${LWPS})`, backgroundSize: 'cover', height: '600px' }} ><a href={links.LWPS} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
        <div className="grid-item" style={{ backgroundImage: `url(${Intel})`, backgroundSize: 'cover', height: '370px' }} ><a href={links.Intel} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
        <div className="grid-item" style={{ backgroundImage: `url(${Quickmart})`, backgroundSize: 'cover', height: '370px' }} ><a href={links.Quickmart} target="_blank" rel="noopener">
        <span className="link"></span>
      </a></div>
      </div>
    );
  }
}

export default ProjectLayout;
