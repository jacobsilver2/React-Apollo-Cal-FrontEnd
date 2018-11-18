import styled from 'styled-components';

const calTheme = {
  mainColor: '#1a8fff',
  textColor: '#777',
  textColorLight: '#ccc',
  borderColor: '#eee',
  bgColor: '#f9f9f9',
  neutralColor: '#fff',
};


const StyledCal = styled.div`

  .icon {
    font-family: 'material-icons';
    font-style: normal;
    font-style: normal;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
  }

  .header {
    display: block;
    width: 100%;
    padding: 1.75em 0;
    border-bottom: 1px solid ${calTheme.borderColor};
    background: ${calTheme.neutralColor};
  }

  .row {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .row-middle {
    align-items: center;
  }

  .col {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-start {
    justify-content: flex-start;
    text-align: left;
  }

  .col-center {
    justify-content: center;
    text-align: center;
  }

  .col-end {
    justify-content: flex-end;
    text-align: right;
  }


  .calendar {
    display: block;
    position: relative;
    width: 100%;
    background: ${calTheme.bgColor};
    border: 1px solid ${calTheme.borderColor};
  }

  .calendar .header {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 1.5em 0;
    border-bottom: 1px solid ${calTheme.borderColor};
  }

  .calendar .header .icon {
    cursor: pointer;
    transition: .15s ease-out;
  }

  .calendar .header .icon:hover {
    transform: scale(1.75);
    transition: .25s ease-out;
    color: ${calTheme.mainColor};
  }

  .calendar .header .icon:first-of-type {
    margin-left: 1em;
  }

  .calendar .header .icon:last-of-type {
    margin-right: 1em;
  }

  .calendar .days {
    text-transform: uppercase;
    font-weight: 400;
    color: ${calTheme.textColorLight};
    font-size: 70%;
    padding: .75em 0;
    border-bottom: 1px solid ${calTheme.borderColor};
  }

  .calendar .body .cell {
    position: relative;
    height: 5em;
    border-right: 1px solid ${calTheme.borderColor};
    overflow: hidden;
    cursor: pointer;
    background: ${calTheme.neutralColor};
    transition: 0.25s ease-out;
  }

  .calendar .body .cell:hover {
    background: ${calTheme.bgColor};
    transition: 0.5s ease-out;
  }

  .calendar .body .selected {
    border-left: 10px solid transparent;
    border-image: linear-gradient(45deg, #1a8fff 0%,#53cbf1 40%);
    border-image-slice: 1;
  }

  .calendar .body .row {
    border-bottom: 1px solid ${calTheme.borderColor};
  }

  .calendar .body .row:last-child {
    border-bottom: none;
  }

  .calendar .body .cell:last-child {
    border-right: none;
  }

  .calendar .body .cell .number {
    position: absolute;
    font-size: 82.5%;
    line-height: 1;
    top: .75em;
    right: .75em;
    font-weight: 700;
  }

  .calendar .body .disabled {
    color: ${calTheme.textColorLight};
    pointer-events: none;
  }

  .calendar .body .cell .bg {
    font-weight: 700;
    line-height: 1;
    color: ${calTheme.mainColor};
    opacity: 0;
    font-size: 8em;
    position: absolute;
    top: -.2em;
    right: -.05em;
    transition: .25s ease-out;
    letter-spacing: -.07em;
  }

  .calendar .body .cell:hover .bg, .calendar .body .selected .bg  {
    opacity: 0.05;
    transition: .5s ease-in;
  }

  .calendar .body .col {
    flex-grow: 0;
    flex-basis: calc(100%/7);
    width: calc(100%/7);
  }
`;


export {StyledCal}