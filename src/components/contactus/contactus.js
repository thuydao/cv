import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to reach out to me for collaboration, work opportunities, or any suggestions through the contact details below. I’m always open to new challenges and ideas!
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email | daoduythuy@gmail.com</h4>
              <h4>Phone | +84375365123</h4>
              <h4>Skype | daoduythuy9690</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
