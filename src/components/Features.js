import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Buttons from '../components/Buttons';
import Title_v1 from './Title_v1';
import Title_v2 from './Title_v2';
import '../scss/styles.css';
import Footer_section from './Footer_section';
import img1 from '../img/cloud-firebase.png';


export default class Features extends Component {
  state = {
    integrations: [
      {
        img: require("../img/google-ads.svg"),
        p: "Google Ads"
      },
      {
        img: require("../img/admob.svg"),
        p: "AdMob"
      },
      {
        img: require("../img/google-marketing-platform.svg"),
        p: "Google Marketing Platform"
      },
      {
        img: require("../img/playstore.svg"),
        p: "Play Store"
      },
      {
        img: require("../img/datastudio.svg"),
        p: "Data Studio"
      },
      {
        img: require("../img/bigquery.svg"),
        p: "BigQuery"
      },
      {
        img: require("../img/slack.svg"),
        p: "Slack"
      },
      {
        img: require("../img/jira.svg"),
        p: "Jira"
      },
      {
        img: require("../img/pagerduty.png"),
        p: "PagerDuty"
      }
    ],
    ext__row2: [
      {
        img: require("../img/add.png"),
        p: "Resize Images"
      },
      {
        img: require("../img/translate.png"),
        p: "Translate Text"
      },
      {
        img: require("../img/resize.png"),
        p: "Sync with Mailchimp"
      },
      {
        img: require("../img/trigger.png"),
        p: "Trigger Email"
      }
    ],
    listhead: [
      {
        img: require("../img/build.png"),
        h5: "Build better apps"
      },
      {
        img: require("../img/quality.png"),
        h5: "Improve app quality"
      },
      {
        img: require("../img/grow.png"),
        h5: "Grow your business"
      }
    ],
    listdata1: [
      {
        h6: "Cloud Firestore",
        p: "Store and sync app data at global scale"
      },
      {
        h6: "ML Kit",
        p: "Machine learning for mobile developers",
        sup: "BETA"
      },
      {
        h6: "Cloud Functions",
        p: "Run mobile backend code without managing servers"
      },
      {
        h6: "Authentication",
        p: "Authenticate users simply and securely"
      },
      {
        h6: "Hosting",
        p: "Deliver web app assets with speed and security"
      },
      {
        h6: "Cloud Storage",
        p: "Store and serve files at Google scale"
      },
      {
        h6: "Realtime Database",
        p: "Store and sync app data in milliseconds"
      }
    ],
    listdata2: [
      {
        h6: "Crashlytics",
        p: "Prioritize and fix issues with powerful, realtime crash reporting"
      },
      {
        h6: "Performance Monitoring",
        p: "Gain insight into your app's performance"
      },
      {
        h6: "Test Lab",
        p: "Test your app on devices hosted by Google"
      },
      {
        h6: "App Distribution",
        p: "Distribute pre-release versions of your app to your trusted testers",
        sup: "BETA"
      }
    ],
    listdata3: [
      {
        h6: "In-App Messaging",
        p: "Engage active app users with contextual messages",
        sup: "BETA"
      },
      {
        h6: "Google Analytics",
        p: "Get free and unlimited app analytics"
      },
      {
        h6: "Predictions",
        p: "Smart user segmentation based on predicted behavior"
      },
      {
        h6: "A/B Testing",
        p: "Optimize your app experience through experimentation",
        sup: "BETA"
      },
      {
        h6: "Cloud Messaging",
        p: "Send targeted messages and notifications"
      },
      {
        h6: "Remote Config",
        p: "Modify your app without deploying a new version"
      },
      {
        h6: "Dynamic Links",
        p: "Drive growth by using deep links with attribution"
      }
    ]
  }

  render() {
    return (
      <section className="features" id="features">
        <div className="container">
          <div className="features__container">
          
            <Title_v1 heading="A comprehensive app
          development platform" />
          
            <div className="row features-table">
            <div className="col-md-4">
              <div className="features-col">
                <div className="features-head">
                  <img src={this.state.listhead[0].img} alt="Build better apps" />
                  <h5>{this.state.listhead[0].h5}</h5>
                </div>
                <div className="list-head">
                  <ul className="list">
                    {this.state.listdata1.map((item, index) => {
                      return (
                        <li className="list-box" key={index}>
                          <div className="list-img">
                            <FontAwesomeIcon icon="coffee" />
                          </div>
                          <div className="list-content">
                            <h6>{item.h6}<sup>{item.sup}</sup></h6>
                            <p>{item.p}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="list-button text-center">
                  <a className="btn-primary" href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-col">
                <div className="features-head">
                  <img src={this.state.listhead[1].img} alt="Improve app quality" />
                  <h5>{this.state.listhead[1].h5}</h5>
                </div>
                <div className="list-head">
                  <ul className="list">
                    {this.state.listdata2.map((item, index) => {
                      return (
                        <li className="list-box" key={index}>
                          <div className="list-img">
                            <FontAwesomeIcon icon="coffee" />
                          </div>
                          <div className="list-content">
                            <h6>{item.h6}<sup>{item.sup}</sup></h6>
                            <p>{item.p}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="list-button text-center">
                  <a className="btn-primary" href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-col">
                <div className="features-head">
                  <img src={this.state.listhead[2].img} alt="Grow your business" />
                  <h5>{this.state.listhead[2].h5}</h5>
                </div>
                <div className="list-head">
                  <ul className="list">
                    {this.state.listdata3.map((item, index) => {
                      return (
                        <li className="list-box" key={index}>
                          <div className="list-img">
                            <FontAwesomeIcon icon="coffee" />
                          </div>
                          <div className="list-content">
                            <h6>{item.h6}<sup>{item.sup}</sup></h6>
                            <p>{item.p}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className="list-button text-center">
                  <a className="btn-primary" href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
            <hr />

            <Title_v2 heading="Firebase Extensions" sup="BETA" para="Deploy functionality to your app quickly using pre-packaged solutions. Firebase Extensions are configurable, and work with Firebase and other Google Cloud Platform products."/>

            <div className="row extensions__row2"> 
            {this.state.ext__row2.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="col-inner">
                    <img src={item.img} alt="" />
                    <p>{item.p}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
            <Buttons title="View all extensions" />

            <hr />

            <Title_v1 heading="Integrations" />

            <div className="row integrations__row"> 
            {this.state.integrations.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="col-inner">
                    <img src={item.img} alt="" />
                    <p>{item.p}</p>
                  </div>
                </div>
              )
            })}
          </div>

            <Buttons title="Learn More" />
          
          </div>
        </div>

        <Footer_section heading="Google Cloud Platform + Firebase" para="Firebase projects are backed by Google Cloud Platform, letting you scale your app to billions of users." img={img1} ltext="Read More" link="facebook.com" />

      </section>
    )
  }
}