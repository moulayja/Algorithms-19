
/*

Create a function that takes two timestamps as input, and returns a string describing the time elapsed between them (in days, hours, minutes, seconds as appropriate).

Examples
elapsed(1559813526, 1559899926) ➞ "1 day"

elapsed(1559681004, 1559899926) ➞ "2 days, 12 hours, 48 minutes, 42 seconds"

elapsed(1558773066, 1559899926) ➞ "13 days, 1 hour, 1 minute"
Notes
Timestamps are seconds elapsed since 1st January 1970.

*/

const timestampToString = timestamp => {
    const result = [];
    const periods = {
      day: 86400,
      hour: 3600,
      minute: 60,
      second: 1,
    };
  
    Object.keys(periods).forEach(period => {
      const num = Math.floor(timestamp / periods[period]);
      const plural = num !== 1 ? 's' : '';
  
      timestamp -= num * periods[period];
      num && result.push(`${num} ${period}${plural}`);
    });
  
    return result.join(', ');
  };
  
  const elapsed = (t1, t2) => timestampToString(t2 - t1);

  