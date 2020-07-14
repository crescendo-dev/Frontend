import React, { Component } from 'react';
import './Calender.scss';
import moment, { Moment as MomentTypes } from 'moment';


class Calender extends React.Component{
  generate(){
    const  today = moment();
    const startWeek = today.clone().startOf('month').week();
    const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="row" key={week}>
          {
            Array(7).fill(0).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
              return (
                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <span className={`text`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
  return render(){
    <div className="Calendar">
      <div className="head">
        <span className="title">{moment().format('MMMM YYYY')}</span>
      </div>
      <div className="body">
        <div className="row">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        {generate()}
      </div>
    </div>
    }    
}
/*
    return (
      <div className="Calendar">
        <div className="head">
          <span className="title">December 2016</span>
        </div>
        <div className="body">
          <div className="row">
            <div className="box">
              <span className="text">SUN</span>
            </div>
            <div className="box">
              <span className="text">MON</span>
            </div>
            <div className="box">
              <span className="text">TUE</span>
            </div>
            <div className="box">
              <span className="text">WED</span>
            </div>
            <div className="box">
              <span className="text">THU</span>
            </div>
            <div className="box">
              <span className="text">FRI</span>
            </div>
            <div className="box">
              <span className="text">SAT</span>
            </div>
          </div>
          <div className="row">
            <div className="box grayed">
              <span className="text">28</span>
            </div>
            <div className="box grayed">
              <span className="text">29</span>
            </div>
            <div className="box grayed">
              <span className="text">30</span>
            </div>
            <div className="box selected">
              <span className="text">1</span>
            </div>
            <div className="box">
              <span className="text">2</span>
            </div>
            <div className="box">
              <span className="text">3</span>
            </div>
            <div className="box">
              <span className="text">4</span>
            </div>
          </div>
        </div>
      </div>
    );
*/

export default Calender;


