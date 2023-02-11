import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Skills } from "../../containers";
import Features from "../features/Features";
import {
  javascript,
  mongo,
  nodejs,
  reactjs,
  elementor,
  wordpress,
} from "../../assets/svg";
import "./toolz.css";
import SectionHeader from "../sectionHeader/SectionHeader";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    partialVisibilityGutter: 20, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 120, // this is needed to tell the amount of px that should be visible.
    showDots: true,
  },
};

const Toolz = () => {
  // const searching =
  // <svg viewBox="0 0 86 87" fill="none" >
  // <path d="M42.9999 10.6301C25.6123 10.6301 11.4666 24.7759 11.4666 42.1635V42.1939C11.4665 48.05 13.0971 53.7903 16.1758 58.7718C19.2545 63.7533 23.6595 67.779 28.8973 70.398L29.1561 70.5274C29.8721 70.8824 30.4743 71.4309 30.8945 72.1107C31.3146 72.7905 31.5359 73.5744 31.5332 74.3736V82.2968C31.5345 83.4368 31.988 84.5298 32.7941 85.3359C33.6002 86.142 34.6932 86.5955 35.8332 86.5968H51.5999C52.7399 86.5955 53.8329 86.142 54.639 85.3359C55.4451 84.5298 55.8986 83.4368 55.8999 82.2968V74.034C55.9025 73.3001 56.0917 72.579 56.4496 71.9383C56.8076 71.2977 57.3226 70.7586 57.9461 70.3717L59.5266 69.3992C60.4193 68.8499 61.2891 68.2487 62.1225 67.6133L62.7696 68.2604C63.6087 69.0994 64.7466 69.5708 65.9332 69.5708C67.1198 69.5708 68.2578 69.0994 69.0968 68.2604C69.9358 67.4213 70.4072 66.2834 70.4072 65.0968C70.4072 63.9102 69.9358 62.7722 69.0968 61.9332L68.3968 61.2332C72.3709 55.8109 74.5198 49.2663 74.5332 42.5437V42.1635C74.5332 24.7759 60.3875 10.6301 42.9999 10.6301ZM53.0332 82.2968C53.0328 82.6768 52.8816 83.0411 52.6129 83.3098C52.3442 83.5785 51.9799 83.7297 51.5999 83.7301H35.8332C35.4532 83.7297 35.0889 83.5785 34.8202 83.3098C34.5515 83.0411 34.4003 82.6768 34.3999 82.2968V79.4301H53.0332V82.2968ZM53.0332 74.034V76.5635H34.3999V74.3736C34.3995 73.6584 34.2928 72.9473 34.0833 72.2635H53.2603C53.1102 72.8417 53.0339 73.4366 53.0332 74.034ZM67.0696 66.2332C66.768 66.5342 66.3593 66.7033 65.9332 66.7033C65.5071 66.7033 65.0984 66.5342 64.7968 66.2332L50.4977 51.9341C51.3726 51.3071 52.1664 50.5739 52.8606 49.7514L67.0696 63.9604C67.3706 64.262 67.5397 64.6707 67.5397 65.0968C67.5397 65.5229 67.3706 65.9316 67.0696 66.2332ZM28.9315 49.9521L24.0271 51.3246L22.9777 49.0647L27.2339 46.328L26.4977 40.1225L21.7069 38.3836L22.1968 35.968L27.2866 36.2347L30.383 30.8068L27.5294 26.6271L29.3766 24.9554L33.3583 28.1312L39.0815 25.5631L39.247 20.5796L41.7657 20.3014L43.0973 25.1318L49.2583 26.3823L52.3671 22.453L54.5782 23.6913L52.7884 28.3452L57.0582 32.9415L61.9625 31.569L63.012 33.8289L58.7557 36.5656L59.4916 42.7711L64.2829 44.5101L63.7928 46.9256L58.7034 46.6589L56.9303 49.7667L54.4809 47.3173C55.8587 44.6218 56.2448 41.5277 55.5716 38.5763C54.8984 35.6249 53.2088 33.0042 50.7984 31.1728C48.3881 29.3414 45.4105 28.4158 42.3867 28.5581C39.3628 28.7005 36.4853 29.9015 34.2576 31.9512C32.0299 34.0009 30.5939 36.7687 30.2009 39.7703C29.8079 42.7719 30.4828 45.816 32.1077 48.3702C33.7325 50.9244 36.2038 52.8258 39.089 53.7419C41.9743 54.658 45.0898 54.5303 47.8904 53.3812L50.3122 55.803L46.9081 57.3305L46.7428 62.3139L44.224 62.5921L42.8923 57.7618L36.7313 56.5117L33.6225 60.4406L31.4114 59.2023L33.2012 54.5484L28.9315 49.9521ZM42.9999 51.4801C41.0155 51.4801 39.0756 50.8917 37.4257 49.7892C35.7757 48.6867 34.4897 47.1197 33.7303 45.2864C32.9709 43.453 32.7722 41.4357 33.1593 39.4894C33.5465 37.5431 34.5021 35.7553 35.9052 34.3522C37.3084 32.949 39.0962 31.9934 41.0425 31.6062C42.9888 31.2191 45.0061 31.4178 46.8395 32.1772C48.6728 32.9366 50.2398 34.2226 51.3423 35.8726C52.4448 37.5225 53.0332 39.4624 53.0332 41.4468C53.0302 44.1069 51.9722 46.6572 50.0912 48.5381C48.2103 50.4191 45.66 51.4771 42.9999 51.4801ZM71.6665 42.5437C71.6542 48.506 69.7946 54.3179 66.3435 59.1799L59.0317 51.8681L60.3176 49.6141L66.1108 49.9175L67.5835 42.6583L62.1303 40.6792L61.8134 38.0076L66.6646 34.8885L63.5363 28.1519L57.9687 29.7098L56.1062 27.7049L58.1451 22.4032L51.6354 18.7577L48.1028 23.2225L45.3929 22.6724L43.8796 17.1839L36.4643 18.0031L36.2757 23.6801L33.7793 24.8002L29.2593 21.195L23.7526 26.1788L27.0051 30.943L25.672 33.2795L19.8788 32.9761L18.4059 40.2351L23.8592 42.2144L24.1762 44.886L19.3247 48.0051L22.4533 54.7417L28.0209 53.1838L29.8835 55.1887L27.8446 60.4904L34.3542 64.1359L37.8868 59.6712L40.5967 60.2211L42.11 65.7097L49.5255 64.8905L49.7139 59.2135L52.4811 57.9718L60.0775 65.5683C59.414 66.06 58.726 66.5258 58.0242 66.9579L56.4437 67.9302C55.8027 68.3259 55.2286 68.8209 54.7431 69.3968H32.3946C31.8283 68.812 31.1669 68.3274 30.4386 67.9636L30.1797 67.8342C25.418 65.4533 21.4133 61.7935 18.6145 57.2649C15.8156 52.7362 14.3332 47.5176 14.3332 42.1939V42.1635C14.3332 26.3566 27.193 13.4968 42.9999 13.4968C58.8068 13.4968 71.6665 26.3566 71.6665 42.1635V42.5437Z" fill="#8655FF"/>
  // <path d="M77.3999 37.8633H85.9999V40.7299H77.3999V37.8633Z" fill="#8655FF"/>
  // <path d="M41.5667 0.59668H44.4333V7.76335H41.5667V0.59668Z" fill="#8655FF"/>
  // <path d="M59.1792 11.0549L64.9117 5.32244L66.9385 7.3493L61.2061 13.0818L59.1792 11.0549Z" fill="#8655FF"/>
  // <path d="M72.2188 22.3862L79.3866 16.6501L81.1783 18.889L74.0104 24.6251L72.2188 22.3862Z" fill="#8655FF"/>
  // <path d="M75.1614 56.3049L76.6349 53.848L83.7975 58.1439L82.324 60.6008L75.1614 56.3049Z" fill="#8655FF"/>
  // <path d="M0 37.8633H8.6V40.7299H0V37.8633Z" fill="#8655FF"/>
  // <path d="M19.05 7.3457L21.0769 5.31884L26.8094 11.0513L24.7825 13.0782L19.05 7.3457Z" fill="#8655FF"/>
  // <path d="M4.84375 18.9202L6.63542 16.6813L13.8033 22.4174L12.0116 24.6563L4.84375 18.9202Z" fill="#8655FF"/>
  // <path d="M2.15625 58.103L9.31886 53.7988L10.7953 56.2557L3.63268 60.5599L2.15625 58.103Z" fill="#8655FF"/>
  // </svg>

  return (
    <section className='section-tools'>
      <SectionHeader subTitle={"skills"} title1={"Tools and experience"} />
      {/* <div className='container tools-grid grid--6-cols grid--3-cols grid--2-cols'> */}
      <div className='container '>
        {/* <div className='tool'>
        </div> */}
        {/* <Features icon={searching} /> */}

        <Carousel
          partialVisible={true}
          responsive={responsive}
          swipeable={true}
          // means to render carousel on server-side.
          ssr={true}
          arrows={false}
          draggable={true}
          showDots={false}
          renderDotsOutside={false}
          rtl={false}
          infinite={true}
        >
          <Skills SVG={javascript} title={"javascript"} percentage={"95%"} />
          <Skills SVG={nodejs} title={"node"} percentage={"90%"} />
          <Skills SVG={reactjs} title={"react"} percentage={"90%"} />
          <Skills SVG={mongo} title={"mongo"} percentage={"88%"} />
          <Skills SVG={elementor} title={"elementor"} percentage={"95%"} />
          <Skills SVG={wordpress} title={"mongo"} percentage={"85%"} />
        </Carousel>
        {/* <Skills SVG={mongo} title={'mongo'} percentage={'90%'} /> */}

        {/* <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div> */}
      </div>
      {/* <button className="primary-btn contact-me">contact me</button> */}
    </section>
  );
};

export default Toolz;
