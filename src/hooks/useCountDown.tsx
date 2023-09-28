import {useEffect, useMemo, useState, useRef} from 'react';
import moment from 'moment-timezone';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useCountdown = () => {
  const georgiaTimezonee = 'Asia/Tbilisi';
  const [remainingTime, setRemainingTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(georgiaTimezonee);
      const tomorrow = moment(now).add(1, 'day').startOf('day');
      const diff = moment.duration(tomorrow.diff(now));
      // console.log('tomooooooooooorow', tomorrow, now, diff);
      const hours = String(diff.hours()).padStart(2, '0');
      const minutes = String(diff.minutes()).padStart(2, '0');
      const seconds = String(diff.seconds()).padStart(2, '0');
      setRemainingTime({hours, minutes, seconds});
      //   setHours(hours);
      //   setMinutes(minutes);
      //   setSeconds(seconds);
      //   setRemainingTime({ hours, minutes, seconds });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return remainingTime;
  //   return remainingTime;
};
const useCountdownPinLock = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });
  const [values, setValues] = useState();
  // useEffect(() => {
  //   AsyncStorage.getItem('lockTime').then(value => {
  //     if (value) {
  //       console.log('abcssssss', value);
  //       const first = { hours: value.hours, minutes: value.minutes, seconds: '' };
  //       console.log('firstssa', first);
  //       const rem = moment().add(first);
  //       console.log('rem', rem);
  //       setValues(rem);
  //     }
  //   });
  // }, []);
  const now = moment();
  // console.log('now', typeof now);
  // console.log('valuess', values);
  const times = moment().add(values);
  // console.log('timessssssssss', times, now);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();

      const duration = moment.duration(now.diff(now));
      // console.log('durattttrttttttttttttttttttttttttttttttttttttttttt', duration);
      // console.log('Tomorrrooooooooooooow', lockEndTime, now, duration);

      const hours = String(duration.hours()).padStart(2, '0');
      const minutes = String(duration.minutes()).padStart(2, '0');
      const seconds = String(duration.seconds()).padStart(2, '0');

      setRemainingTime({hours, minutes, seconds});
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [values]);

  // useEffect(() => {
  //   const lockEndTime = moment(now).add(lockDurationRef.current);

  //   const interval = setInterval(() => {
  //     const currentTime = moment();
  //     const duration = moment.duration(lockEndTime.diff(currentTime));
  //     console.log('duration', duration);
  //     const hours = String(duration.hours()).padStart(2, '0');
  //     const minutes = String(duration.minutes()).padStart(2, '0');
  //     const seconds = String(duration.seconds()).padStart(2, '0');

  //     setRemainingTime({ hours, minutes, seconds });
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [lockTime]);
  return remainingTime;
  //   return remainingTime;
};

export {useCountdown, useCountdownPinLock};
