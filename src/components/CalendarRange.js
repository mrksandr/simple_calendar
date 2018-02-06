import React, { Component } from 'react';
import moment from 'moment';
//moment.locale('ru');
moment.updateLocale('en', {
  weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
});
import 'react-dates/initialize';

import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import isInclusivelyAfterDay from 'react-dates/lib/utils/isInclusivelyAfterDay';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';

import 'react-dates/lib/css/_datepicker.css';
import '../scss/components/_calendar_range.scss';

const SelectedStartDate = moment();
const SelectedEndDate = moment().add(10, 'd');

const PrevIcon = () => <div className="mont-prev-icon" />;

const NextIcon = () => <div className="mont-next-icon" />;

const defaultProps = {
  startDateOffset: undefined,
  endDateOffset: undefined,

  // day presentation and interaction related props
  renderCalendarDay: undefined,
  renderDayContents: null,
  minimumNights: 1,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,
  enableOutsideDays: false,

  // calendar presentation and interaction related props
  withPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  onOutsideClick() {},
  keepOpenOnDateSelect: false,
  renderCalendarInfo: null,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
};

class CalendarRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: this.props.autoFocusEndDate ? 'endDate' : 'startDate',
      startDate: SelectedStartDate,
      endDate: SelectedEndDate,
      startDateString: SelectedStartDate.format('MM/DD/YY'),
      endDateString: SelectedEndDate.format('MM/DD/YY'),
    };
  }

  render() {
    const {
      focusedInput,
      startDate,
      endDate,
      startDateString,
      endDateString,
    } = this.state;

    return (
      <div>
        <div className="calc-input-wrap">
          <div className="calc-input-block-left">
            <label>Departure</label>
            <input
              type="text"
              placeholder={SelectedStartDate.format('MM/DD/YY')}
              onChange={this.onInputChange}
              name="startDate"
              value={startDateString}
            />
          </div>

          <div className="calc-input-block-right">
            <div className="triangle-with-shadow" />
            <label>Arriving</label>

            <input
              type="text"
              placeholder={SelectedEndDate.format('MM/DD/YY')}
              onChange={this.onInputChange}
              name="endDate"
              value={endDateString}
            />
          </div>
          {startDate &&
            endDate && (
              <div className="calc-input-block-days">
                <label>Days</label>
                <input
                  readOnly
                  type="text"
                  name="rangedays"
                  value={endDate.diff(startDate, 'days') + 1}
                />
              </div>
            )}
        </div>

        <div>
          <DayPickerRangeController
            {...this.props}
            daySize={51}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            weekDayFormat="dd"
            hideKeyboardShortcutsPanel
            navPrev={<PrevIcon />}
            navNext={<NextIcon />}
            renderDayContents={day => (
              <div className="day-inside">{day.format('D')}</div>
            )}
            noBorder
          />
        </div>
      </div>
    );
  }

  onInputChange = ev => {
    const { startDate, endDate } = this.state;
    const newDate = {
      startDate,
      endDate,
      [ev.target.name]: moment(ev.target.value),
    };

    this.setState({ [ev.target.name + 'String']: ev.target.value });

    if (moment(ev.target.value, 'MM/DD/YY', true).isValid()) {
      const dataChange =
        newDate.endDate.diff(newDate.startDate, 'days') > 0 &&
        !this.props.isOutsideRange(moment(ev.target.value))
          ? newDate
          : { startDate, endDate };

      this.onDatesChange(dataChange);
    }
  };

  onDatesChange = ({ startDate, endDate }) => {
    const startDateString = startDate ? startDate.format('MM/DD/YY') : '';
    const endDateString = endDate ? endDate.format('MM/DD/YY') : '';
    this.setState({ startDate, endDate, startDateString, endDateString });
  };

  onFocusChange = focusedInput => {
    //if (!focusedInput) return;
    this.setState({ focusedInput: !focusedInput ? 'startDate' : focusedInput });
  };
}

CalendarRange.defaultProps = defaultProps;

export default CalendarRange;
