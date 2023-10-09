import { react, useState, useEffect } from "react";
import "../styles/about.module.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Fade from "@mui/material/Fade";
 import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion";
const About = () => {
  const offersAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start off-screen
    },
    visible: {
      opacity: 1,
      y: 0, // Slide up to its original position
      transition: {
        duration: 0.8, // Adjust the animation duration as needed
      },
    },
  };


  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.05, // Adjust as needed
  });

  const contentAnimationVariantsLeft = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentAnimationVariantsRight = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const stat = [
    {
      icon: "",
      count: "",
      desc: "",
    },
    {
      icon: "",
      count: "",
      desc: "",
    },
    {
      icon: "",
      count: "",
      desc: "",
    },
    {
      icon: "",
      count: "",
      desc: "",
    },
  ];
  // const fadeInUpEasing = {
  //   opacity: [0, 1],
  //   transform: ["translate3d(0,100%,0)", "none"],
  // };
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSlideVisible(true);
    }, 500);
  }, [isSlideVisible]);
  const getContainer = () => document.getElementById("slider-component");

  return (
    <div>
      <div className="container">
        {" "}
        <section     className="elementor-section elementor-top-section elementor-element elementor-element-273f3e10 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no" data-id="273f3e10" data-element_type="section">
						<div     className="elementor-container elementor-column-gap-default">
					<div     className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4c577536" data-id="4c577536" data-element_type="column">
			<div     className="elementor-widget-wrap elementor-element-populated">
								<div     className="elementor-element elementor-element-5aeb5fcd elementor-widget elementor-widget-text-editor" data-id="5aeb5fcd" data-element_type="widget" data-widget_type="text-editor.default">
				<div     className="elementor-widget-container">
			
<div id="wp-block-themeisle-blocks-advanced-columns-f6c33b22"     className="wp-block-themeisle-blocks-advanced-columns has-0-columns has-desktop-undefined-layout has-tablet-equal-layout has-mobile-equal-layout has-vertical-unset"><div     className="wp-block-themeisle-blocks-advanced-columns-overlay"></div><div     className="innerblocks-wrap"></div></div>
			</div>
				</div>
					</div>
		</div>
							</div>
		</section>
        <div className="heroComp">
          {" "}
          <div className="about-container">
        
            {" "}
            <div className="about-content">
              <div className="about-headings">
                <div className="heading-title">
                  <h6> CoopBank Diaspora </h6>
                </div>
                <div className="heading-sub">
                  <h3> Diaspora Banking</h3>
                </div>
                <div className="diaspora-banking-top--element-3 elementor-element-a727a1b elementor-widget elementor-widget-heading" data-id="a727a1b" data-element_type="widget" data-widget_type="heading.default">
				      <div className="diaspora-banking-top--widget-container-3">
			            <p className="heading-title-3 elementor-size-default">
                We provide you with a distinctive array of products and services tailored to your banking needs both at home and abroad!</p>		</div>
				          </div>
                <div className="heading-desc">
                  {" "}
                  <p>
                    {" "}
                    CoopBank of Oromia is one of the leading private banks in
                    Ethiopia with very distinctive banking history. Diaspora
                    Banking is one of the banking segments of CoopBank which has
                    been given due emphasis. CoopBank Diaspora Account has been
                    operational since August 2012. <br />
                    CoopBank Diaspora Banking is a platform designed for
                    Ethiopians who do not reside in the country to have a safe,
                    easy and convenient access to a wide range of products and
                    services carefully curated to simplify cross-border banking.
                  </p>
                </div>
              </div>
            </div>
          
            <div className="about-globe-container"
        >
              <div className="about-globe-animated ">
                
                <div className="about-background-overlay"></div>
         
                <div className="about-globe-image-outer-container">
                  <div className="about-globe-image-container">
                    <img
                      src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png"
                          className="attachment-full size-full wp-image-2257"
                      alt=""
                      srcset="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png 850w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-300x194.png 300w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-768x497.png 768w"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            
          </div>
        </div>
        {/* <div className="about-diaspora-stat">
          <div className="about-diaspora-stat-background-overlay"></div>

          <div className="about-diaspora-stat-grid-items">
            {stat.map((stat) => (
              <div className="about-diaspora-stat-grid-widget">
                <div className="about-diaspora-stat-grid-widget-wrap">
                  <div className="about-diaspora-stat-grid-widget-ekit-wid-con">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className="about-diaspora-grid-text-center">
                      <div className="about-diaspora-grid-item">
                        <div className="funfact-icon">
                          {" "}
                          <i></i>
                          <i
                            aria-hidden="true"
                            className="elementskit-funfact-icon fas fa-users"
                          ></i>
                        </div>
                        <div className="funfact-content">
                          <div className="number-percentage-wraper">
                            <span
                              className="number-percentage"
                              data-value="5000"
                              data-animation-duration="3500"
                              data-style="static"
                            >
                              5,000
                            </span>
                            +{" "}
                          </div>
                          <h3 className="funfact-title">Total Membership</h3>{" "}
                        </div>Slide
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

{/* component={Slide}
          direction='up'
          appear={true}
          in={isSlideVisible}
          timeout={{ enter: 1000 }}
          mountOnEnter
          easing={{ fadeInUpEasing }}
          container={getContainer} */}

           <motion.div
          className="stat-of-diaspora-banking-section-elementor-section elementor-top-section elementor-element elementor-element-b328901 elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no wpr-sticky-section-no animated fadeInUp"

           // Attach the ref to the "offers" section
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}  // Animate when in view
            variants={offersAnimationVariants}
        >
          <div     className="stat-of-diaspora-banking-section-elementor-section--background-overlay"></div>
          <div     className="stat-of-diaspora-banking-section-elementor-section--container elementor-column-gap-default">
            <div
                  className="stat-of-diaspora-banking-section-elementor-section--column elementor-col-25 elementor-top-column elementor-element elementor-element-7172e0c"
              data-id="7172e0c"
              data-element_type="column"
            >
              <div     className="stat-of-diaspora-banking-section-elementor-section--widget-wrap elementor-element-populated">
                <div
                      className="stat-of-diaspora-banking-section-elementor-section--element elementor-element-2d7203d elementor-widget elementor-widget-elementskit-funfact"
                  data-id="2d7203d"
                  data-element_type="widget"
                  data-widget_type="elementskit-funfact.default"
                >
                  <div     className="stat-of-diaspora-banking-section-elementor-section--widget-container">
                    <div     className="ekit-wid-con">
                      <div     className="elementskit-funfact text-center     ">
                        <div     className="elementskit-funfact-inner position_top">
                          <div     className="funfact-icon">
                            {" "}
                            <i></i>
                            <i
                              aria-hidden="true"
                                  className="elementskit-funfact-icon fas fa-users"
                            ></i>
                          </div>

                          <div     className="funfact-content">
                            <div     className="number-percentage-wraper">
                              <span
                                    className="number-percentage"
                                data-value="5000"
                                data-animation-duration="3500"
                                data-style="static"
                              >
                                5,000
                              </span>
                              +{" "}
                            </div>
                            <h3     className="funfact-title">Total Membership</h3>{" "}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
                  className="stat-of-diaspora-banking-section-elementor-section--column elementor-col-25 elementor-top-column elementor-element elementor-element-017d7eb"
              data-id="017d7eb"
              data-element_type="column"
            >
              <div     className="stat-of-diaspora-banking-section-elementor-section--widget-wrap elementor-element-populated">
                <div
                      className="stat-of-diaspora-banking-section-elementor-section--element elementor-element-d6123df elementor-widget elementor-widget-elementskit-funfact"
                  data-id="d6123df"
                  data-element_type="widget"
                  data-widget_type="elementskit-funfact.default"
                >
                  <div     className="stat-of-diaspora-banking-section-elementor-section--widget-container">
                    <div     className="ekit-wid-con">
                      <div     className="elementskit-funfact text-center     ">
                        <div     className="elementskit-funfact-inner position_top">
                          <div     className="funfact-icon">
                            {" "}
                            <i></i>
                            <i
                              aria-hidden="true"
                                  className="elementskit-funfact-icon fas fa-money-bill-alt"
                            ></i>
                          </div>

                          <div     className="funfact-content">
                            <div     className="number-percentage-wraper">
                              <span
                                    className="number-percentage"
                                data-value="10"
                                data-animation-duration="3500"
                                data-style="static"
                              >
                                10
                              </span>
                              M+{" "}
                            </div>
                            <h3     className="funfact-title"> Deposit Amount</h3>{" "}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
                  className="stat-of-diaspora-banking-section-elementor-section--column elementor-col-25 elementor-top-column elementor-element elementor-element-6b9df97"
              data-id="6b9df97"
              data-element_type="column"
            >
              <div     className="stat-of-diaspora-banking-section-elementor-section--widget-wrap elementor-element-populated">
                <div
                      className="stat-of-diaspora-banking-section-elementor-section--element elementor-element-8de7b66 elementor-widget elementor-widget-elementskit-funfact"
                  data-id="8de7b66"
                  data-element_type="widget"
                  data-widget_type="elementskit-funfact.default"
                >
                  <div     className="stat-of-diaspora-banking-section-elementor-section--widget-container">
                    <div     className="ekit-wid-con">
                      <div     className="elementskit-funfact text-center     ">
                        <div     className="elementskit-funfact-inner position_top">
                          <div     className="funfact-icon">
                            {" "}
                            <i></i>
                            <i
                              aria-hidden="true"
                                  className="elementskit-funfact-icon fas fa-globe-americas"
                            ></i>
                          </div>

                          <div     className="funfact-content">
                            <div     className="number-percentage-wraper">
                              <span
                                    className="number-percentage"
                                data-value="120"
                                data-animation-duration="3500"
                                data-style="static"
                              >
                                120
                              </span>
                              +{" "}
                            </div>
                            <h3     className="funfact-title">Countries</h3>{" "}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
                  className="stat-of-diaspora-banking-section-elementor-section--column elementor-col-25 elementor-top-column elementor-element elementor-element-ab14769"
              data-id="ab14769"
              data-element_type="column"
            >
              <div     className="stat-of-diaspora-banking-section-elementor-section--widget-wrap elementor-element-populated">
                <div
                      className="stat-of-diaspora-banking-section-elementor-section--element elementor-element-e91b519 elementor-widget elementor-widget-elementskit-funfact"
                  data-id="e91b519"
                  data-element_type="widget"
                  data-widget_type="elementskit-funfact.default"
                >
                  <div     className="stat-of-diaspora-banking-section-elementor-section--widget-container">
                    <div     className="ekit-wid-con">
                      <div     className="elementskit-funfact text-center     ">
                        <div     className="elementskit-funfact-inner position_top">
                          <div     className="funfact-icon">
                            {" "}
                            <i></i>
                            <i
                              aria-hidden="true"
                                  className="elementskit-funfact-icon fas fa-share-square"
                            ></i>
                          </div>

                          <div     className="funfact-content">
                            <div     className="number-percentage-wraper">
                              <span
                                    className="number-percentage"
                                data-value="13"
                                data-animation-duration="3500"
                                data-style="static"
                              >
                                13
                              </span>
                              +{" "}
                            </div>
                            <h3     className="funfact-title">Remmitance Agency</h3>{" "}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      
        <section className="state-separator-section-element">
          <div className="state-separator-section-element-container">
            <div className="state-separator-section-element-column ">
              <div className="state-separator-section-element-widget-wrap">
                <div className="state-separator-section-element-element ">
                  <div className="state-separator-section-element-widget-container">
                    <div className="state-separator-section-element-spacer">
                      <div className="state-separator-section-element-spacer-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="about-coopbank " id="slider-component">
          <div className="about-coopbank-outer-grid">
            <div className="about-coopbank-inner-grid">
              <div className="about-coopbank-inner-inner-grid">
                <div className="about-coopbank-widget">
                  <div className="about-coopbank-widget-container">
                    <div className="about-coopbank-widget-ekit-wid-con">
                      <div className="about-coopbank-widget-section-title-wraper ">
                        <h2 className="about-coopbank-widget-section-title ">
                          About <span>Coopbank</span>
                        </h2>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-coop-desc">
          <div className="about-coop-desc-container elementor-column-gap-default">
            <div
              className="about-coop-desc-column elementor-col-100 elementor-top-column elementor-element elementor-element-5529bfe"
              data-id="5529bfe"
              data-element_type="column"
            >
              <div className="about-coop-desc-widget-wrap elementor-element-populated" >
                <div className="about-coop-desc-element elementor-element-01d7595 elementor-widget elementor-widget-text-editor">
                  <div className="about-coop-desc-widget-container">
                    <div className="about-coop-desc-row-container onepage-section">
                      <div
                        className="about-coop-desc-limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-about-row-inner">
                          <div className="about-coop-desc-about-column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-about-style-light">
                              <div className="about-coop-desc-about-uncoltable">
                                <div className="about-coop-desc-about-uncell no-block-padding">
                                  <div className="about-coop-desc-about-uncont">
                                    <div className="about-coop-desc-about-uncode_text_column">
                                      <p>
                                        The Coopbank is now one of the most
                                        profitable banks in Ethiopia having a
                                        total asset value of more than ETB 121
                                        billion. The bank has 630+ branch
                                        networks, 10 million account holders,
                                        and more than 11,500 employees.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-3"
                      className="about-coop-desc-vision-row-container onepage-section"
                      data-parent="true"
                      data-label="Vision"
                      data-name="vision"
                      data-section="3"
                    >
                      <div
                        className="about-coop-desc-vision-row one-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-vision-row-inner">
                          <div className="about-coop-desc-vision-column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-vision-uncol style-light">
                              <div className="about-coop-desc-vision-uncoltable">
                                <div     className="uncell no-block-padding">
                                  <div className="about-coop-desc-vision-uncont">
                                    <div className="about-coop-desc-vision-uncode_text_column">
                                      <div className="about-coop-desc-vision-uncode_text_column Vision">
                                        <h4 id="Vision">Vision</h4>
                                        <p>
                                          To be the leading private bank in
                                          Ethiopia by 2025.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-4"
                      className="about-coop-desc-mission-row-container onepage-section"
                      data-parent="true"
                      data-label="Mission"
                      data-name="mission"
                      data-section="4"
                    >
                      <div
                        className="about-coop-desc-mission-row single-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-mission-row-inner">
                          <div className="about-coop-desc-mission-wpb_column pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-mission-uncol style-light">
                              <div className="about-coop-desc-mission-uncoltable">
                                <div className="about-coop-desc-mission-uncell no-block-padding">
                                  <div className="about-coop-desc-mission-uncont">
                                    <div className="about-coop-desc-mission-uncode_text_column">
                                      <div     className="uncode_text_column Vision">
                                        <h4 id="Mission">Mission</h4>
                                        <p>
                                          We root our foundation in communities
                                          to provide banking solutions that
                                          create greater customer experience
                                          with emphasis to cooperatives and
                                          agro-based businesses through proper
                                          use of human resource and up-to-date
                                          technologies to maximize stakeholders’
                                          value.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="row-unique-5"
                      className="about-coop-desc-row-container onepage-section"
                      data-parent="true"
                      data-label="Core Values"
                      data-name="core-values"
                      data-section="5"
                    >
                      <div
                            className="row single-top-padding one-bottom-padding single-h-padding limit-width row-parent"
                        data-imgready="true"
                      >
                        <div className="about-coop-desc-row-inner">
                          <div className="about-coop-desc-pos-top pos-center align_left column_parent col-lg-12 single-internal-gutter">
                            <div className="about-coop-desc-uncol style-light">
                              <div className="about-coop-desc-uncoltable">
                                <div     className="uncell no-block-padding">
                                  <div className="about-coop-desc-uncont">
                                    <div className="about-coop-desc-uncode_text_column">
                                      <div className="about-coop-desc-uncode_text_column Vision">
                                        <h4 id="CoreValues">Core Values</h4>
                                        <p>
                                          The following set of values will serve
                                          to guide the words and actions of all
                                          our employees;
                                        </p>
                                        <ul>
                                          <li>Integrity</li>
                                          <li>Customer Satisfaction</li>
                                          <li>Learning Organization</li>
                                          <li>Teamwork</li>
                                          <li>Cost Consciousness</li>
                                          <li>Concern for Community</li>
                                          <br />
                                          
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="diasopra-bottom-elementor-section-top-section">
          <div className="diasopra-bottom-elementor-section-top-1">
            <div className="diasopra-bottom-elementor-section-top-2">
              <div className="diasopra-bottom-elementor-section-top-3">
                <section className="diasopra-bottom-elementor-section ">
                  <div className="diaspra-bottom-elementor-section-container elementor-column-gap-default">
                  <Slide in={isSlideVisible} timeout={{enter:1000}} direction="right" >
                    <motion.div
                      className="diaspra-bottom-elementor-section-column "
                    
        //               ref={ref}
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        // variants={contentAnimationVariantsRight}
                      //  id="slider-component"
             
                    //   component={Slide}
                    //   direction='right'
                    //   appear={true}
                    //   in={true}
                    //   timeout={{ enter: 1000 }}
                    //   mountOnEnter
                      // easing={{ fadeInUpEasing }}
                      // container={getContainer}
                   
                  >
                      <div className="diaspra-bottom-elementor-section-widget-wrap elementor-element-populated">
                        <div
                          className="diaspra-bottom-elementor-sectionelementor-element elementor-element-09affb3 elementor-widget elementor-widget-elementskit-heading"
                          data-id="09affb3"
                          data-element_type="widget"
                          data-widget_type="elementskit-heading.default"
                        >
                          <div className="diaspra-bottom-elementor-section-widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit-heading-elementskit-section-title-wraper center   ekit_heading_tablet-   ekit_heading_mobile-">
                                <h2 className="ekit-heading--title elementskit-section-title ">
                                  Diaspora{" "}
                                  <span className="accounts-sub-heading">
                                    Accounts
                                  </span>
                                </h2>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div
                          className="diaspra-bottom--element elementor-element-267b612 elementor-widget elementor-widget-text-editor"
                          data-id="267b612"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <p>
                              Diaspora Banking Account allows Diaspora who
                              resides and works outside the country to maintain
                              and perform domestic and international transfers
                              through their Coopbank accounts.
                            </p>
                            <p>
                              » Diaspora Current Account
                              <br />» Diaspora Fixed-Time Deposit Account
                              <br />» Diaspora Non-Repatriable Account
                              <br />» Ethiopian Citizen Or Origin Living In
                              Foreign Land (ECOLFL) Savings Account
                              <br />
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    </Slide>
                  
                    <Slide in={isSlideVisible} timeout={{enter:2000}} direction="left" >      
                     <motion.div
                      // className="diaspra-bottom-elementor-section-column "
        //               variants={contentAnimationVariantsLeft}
        //               ref={ref}
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
                      className="diaspra-bottom--column "
                      data-id="cf6cde5"
                      data-element_type="column"
                      data-settings='{"animation":"slideInRight"}'
                    >
                      <div className="diaspra-bottom--widget-wrap elementor-element-populated">
                        <div
                          className="diaspra-bottom--element elementor-element-410ccbc elementor-widget elementor-widget-elementskit-heading"
                          data-id="410ccbc"
                          data-element_type="widget"
                          data-widget_type="elementskit-heading.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <div className="ekit-wid-con">
                              <div className="ekit-heading-elementskit-section-title-wraper ">
                                <h2 className="ekit-heading--title elementskit-section-title ">
                                  Diaspora{" "}
                                  <span className="accounts-sub-heading-loan">
                                    Loan
                                  </span>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="diaspra-bottom--element elementor-element-ae1ac64 elementor-widget elementor-widget-text-editor"
                          data-id="ae1ac64"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div className="diaspra-bottom--widget-container">
                            <p>
                              The bank provides business and investment loan
                              along with expertise free consultancy services on
                              different opportunities.
                              <br />» Diaspora consumer loans
                              <br />» Mortgage loan
                              <br />» Car/Vehicle loan
                              <br />» Personal loan
                              <br />» Diaspora Business loans
                              <br />» Investment financing
                              <br />» Working capital loans
                            </p>{" "}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    </Slide>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>


        {/* <section className="diaspora-banking-top-elementor-section elementor-top-section elementor-element elementor-element-eqa5d7c elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default wpr-particle-no wpr-jarallax-no wpr-parallax-no" data-id="eqa5d7c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div className="diaspora-banking-top--container elementor-column-gap-no">
					<div className="diaspora-banking-top--column-1 elementor-col-50 elementor-top-column elementor-element elementor-element-236a079" data-id="236a079" data-element_type="column">
			<div className="diaspora-banking-top--widget-wrap-1 elementor-element-populated">
								<div className="diaspora-banking-top--element-1 elementor-element-618cf60d elementor-widget elementor-widget-heading" data-id="618cf60d" data-element_type="widget" data-widget_type="heading.default">
				<div className="diaspora-banking-top--widget-container-1">
			<h6 className="diaspora-banking-top--heading-title-1 elementor-size-default"       >
        CoopBank Diaspora</h6>	
      
        	</div>

				</div>
				<div className="diaspora-banking-top--element-2 elementor-element-3d0aa540 elementor-widget elementor-widget-heading" data-id="3d0aa540" data-element_type="widget" data-widget_type="heading.default">
				<div className="diaspora-banking-top--widget-container-2">
			<h3 className="diaspora-banking-top--heading-title-2 elementor-size-default">
        Diaspora  Banking</h3>		</div> 
				</div>
        
				<div className="diaspora-banking-top--element-3 elementor-element-a727a1b elementor-widget elementor-widget-heading" data-id="a727a1b" data-element_type="widget" data-widget_type="heading.default">
				<div className="diaspora-banking-top--widget-container-3">
			<p className="diaspora-banking-top--heading-title-3 elementor-size-default">
        We provide you with a distinctive array of products and services tailored to your banking needs both at home and abroad!</p>		</div>
				</div>
				<div className="diaspora-banking-top--element elementor-element-5aabbfce elementor-widget elementor-widget-text-editor" data-id="5aabbfce" data-element_type="widget" data-widget_type="text-editor.default">
				<div className="diaspora-banking-top--widget-container">
							<p>CoopBank of Oromia is one of the leading private banks in Ethiopia with very distinctive banking history. Diaspora Banking is one of the banking segments of CoopBank which has been given due emphasis. CoopBank Diaspora Account has been operational since August 2012.<br />CoopBank Diaspora Banking is a platform designed for Ethiopians who do not reside in the country to have a safe, easy and convenient access to a wide range of products and services carefully curated to simplify cross-border banking.</p>		
              				</div>
				</div>
					</div>
		</div>

				<div className="diaspora-banking-top--column elementor-col-50 elementor-top-column elementor-element elementor-element-2c9a3eef" data-id="2c9a3eef" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div className="diaspora-banking-top--widget-wrap-2 elementor-element-populated">
					<div className="diaspora-banking-top--background-overlay"></div>
								<div className="diaspora-banking-top--element elementor-element-a08fabf elementor-widget elementor-widget-image animated headShake" data-id="a08fabf" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;headShake&quot;}" data-widget_type="image.default">
				<div className="diaspora-banking-top--widget-container">
															<img decoding="async" width="850" height="550" src="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png" className="attachment-full size-full wp-image-2257" alt="" srcset="https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54.png 850w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-300x194.png 300w, https://diaspora.coopbankoromia.com.et/wp-content/uploads/2022/08/pngwing.com-54-768x497.png 768w" sizes="(max-width: 850px) 100vw, 850px" />															</div>
				</div>
					</div>
		</div>
							</div>
		</section> */}
    
      </div>
    </div>



  );
};

export default About;
