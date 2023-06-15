export class DateUtils {
  static fromSecsToDate(secs: number): Date {
    const date = new Date();
    date.setSeconds(secs);
    return date;
  }
}
