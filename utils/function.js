import moment from 'moment'
import R from 'ramda'
import { Dimensions } from 'react-native'

export const emptyFn = () => { }


export const reduceText = (text, amount = 35) => {
  if (!R.isNil(text) && text.length >= amount) {
    const remain = text.slice(0, amount)
    return `${remain}...`
  }
  return text
}

export function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}
// 1 year 2 month
export const duration = (a, b, language = 'th') => {
  const m1 = moment(a)
  const m2 = moment(b)
  const y = m1.diff(m2, 'year')
  const m = m1.diff(m2, 'months') % 12

  // let yString = ''
  // let mString = ''
  let yText = ''

  if (language === 'th') {
    // yString = `${y} ปี`
    // mString = `${m} เดือน`
    yText = 'ปี'
  } else {
    // yString = `${y} years`
    // mString = `${m} months`
    yText = 'years'
  }

  if (y === 0 && m === 0) {
    return 'N/A'
  } else if (y > 0 && m === 0) {
    // return yString
    return `${y} ${yText}`
  } else if (y === 0 && m > 0) {
    // return mString
    return `0.${m} ${yText}`
  } else {
    // return `${yString} ${mString}`
    return `${y}.${m} ${yText}`
  }

}

export const dayDuration = (a, b) => {
  const m1 = moment(a)
  const m2 = moment(b)
  const d = m1.diff(m2, 'days')
  return d
}

export const currencyFormat = (number) => parseFloat(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

export const randomColor = () => '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)

export const splitRating = (rat) => {
  const ratingSplit = rat.split('(')
  const rating = (ratingSplit.length > 1) ? ratingSplit[0] : rat
  return rating.toString().trim()
}

export const interestRateFormat = (number) => number.toFixed(2)

export const logx = (obj) => console.log(JSON.stringify(obj, null, 2))