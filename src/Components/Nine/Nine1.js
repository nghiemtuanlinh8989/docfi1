import React from "react";
import "./Nine1.css";
import { Poem1, Poem2, Poem3, Poem4, Poem5, Poem6 } from "./data";
import { Title } from "./data"





const listbai1 = Poem1.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#flush-collapseOne-${item.id}`}
        aria-expanded="false"
        aria-controls={`flush-collapseOne-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`flush-collapseOne-${item.id}`}
      className="accordion-collapse collapse"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

const listbai2 = Poem2.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#panelsStayOpen-collapseTwo-${item.id}`}
        aria-expanded="false"
        aria-controls={`panelsStayOpen-collapseTwo-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`panelsStayOpen-collapseTwo-${item.id}`}
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

const listbai3 = Poem3.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#panelsStayOpen-collapseThree-${item.id}`}
        aria-expanded="false"
        aria-controls={`panelsStayOpen-collapseThree-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`panelsStayOpen-collapseThree-${item.id}`}
      className="accordion-collapse collapse"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

const listbai4 = Poem4.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseThree-${item.id}`}
        aria-expanded="false"
        aria-controls={`#collapseThree-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`collapseThree-${item.id}`}
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

const listbai5 = Poem5.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseTwo-${item.id}`}
        aria-expanded="false"
        aria-controls={`#collapseTwo-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`collapseTwo-${item.id}`}
      className="accordion-collapse collapse"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

const listbai6 = Poem6.map((item) => (
  <div className="sum1" key={item.id}>
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapseOne-${item.id}`}
        aria-expanded="true"
        aria-controls={`#collapseOne-${item.id}`}
      >
        {item.title}
      </button>
    </h2>
    <div
      id={`collapseOne-${item.id}`}
      className="accordion-collapse collapse show"
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">{item.content}</div>
    </div>
  </div>
));

export default function Nine1() {
  return (
    <div>
      <div className="card1 text-center">
        <div className="card1-header">
          <ul className="nav nav-tabs card-header-tabs"></ul>
        </div>
        <div className="card-body1">
          <h5 className="card-title28">FAQS</h5>
          <p className="card-text28">Frequently Asked Questions</p>
        </div>
      </div>
      <div className="container">
        <div className="crow">
          <div className="row">
            <div id="justi" className="col-lg-4 col-md-6 col-sm-12">
              <div className="canon">
                <ul className="list-group1">
                  <div className="two">
                    <div className="music">
                      <li className="there1">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <a href="#" className="number1">
                            Themes License
                          </a>
                          <span className="badge bg-primary rounded-pill">
                            <i className="fa-solid fa-arrow-turn-up"></i>
                          </span>
                        </li>
                      </li>
                    </div>
                    <div className="music">
                      <li className="there">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <a href="#" className="number">
                            Pricing & Support
                          </a>
                          <span id="dedup" className="badge rounded-pill">
                            <i id="dedup2" className="fa-solid fa-arrow-trend-up"></i>
                          </span>
                        </li>
                      </li>
                    </div>
                    <div className="music">
                    <li className="there">
                        <li
                          id="crit"
                          className="list-group-item d-flex justify-content-between align-items-center"
                        >
                          <a href="#" className="number">
                            Purchasing Online
                          </a>
                          <span id="dedup" className="badge rounded-pill">
                            <i id="dedup2" className="fa-solid fa-arrow-trend-up"></i>
                          </span>
                        </li>
                      </li>
                    </div>
                    <div className="music">
                      <li className="there">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <a href="#" className="number">
                            Support Tickets
                          </a>
                          <span id="dedup" className="badge rounded-pill">
                            <i id="dedup2" className="fa-solid fa-arrow-trend-up"></i>
                          </span>
                        </li>
                      </li>
                    </div>
                    <div className="music">
                      <li className="there">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          <a href="#" className="number">
                            Technical Support
                          </a>
                          <span id="dedup" className="badge rounded-pill">
                            <i id="dedup2" className="fa-solid fa-arrow-trend-up"></i>
                          </span>
                        </li>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div id="justi2" className="col-lg-7 col-md-6 col-sm-12">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">{listbai1}</div>
                <div className="accordion-item">{listbai2}</div>
                <div className="accordion-item">{listbai3}</div>
                <div className="accordion-item">{listbai4}</div>
                <div className="accordion-item">{listbai5}</div>
                <div className="accordion-item">{listbai6}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}