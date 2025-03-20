import {TimeOffset} from "./time-offset";

describe('TimeOffset', () => {
  it('Should return 30 seconds to TTL', () => {
    expect(TimeOffset.addSeconds(30).toAccumulatedSeconds()).toEqual(30)
  })
  it('Should return 5 minutes to TTL', () => {
    expect(TimeOffset.addMinutes(5).toAccumulatedSeconds()).toEqual(5 * 60)
  })
  it('Должен вернуть 25 часов в ттл', () => {
    expect(TimeOffset.addHours(25).toAccumulatedSeconds()).toEqual(25 * 60 * 60)
  })
  it('Should return 25 hours to TTL', () => {
    expect(TimeOffset.addDays(10).toAccumulatedSeconds()).toEqual(10 * 24 * 60 * 60)
  })
  it('Should return 10 days 5 hours 2 minutes 1 second in TTL', () => {
    let resTtl = 1
    resTtl += 2 * 60
    resTtl += 5 * 60 * 60
    resTtl += 10 * 24 * 60 * 60
    expect(TimeOffset.addDays(10).addHours(5).addMinutes(2).addSeconds(1).toAccumulatedSeconds()).toEqual(resTtl)
  })
  it('Should return the date after 10 days', () => {
    const nowSeconds = Date.now()
    const tenDaysInSeconds = TimeOffset.addDays(10).toAccumulatedSeconds() * 1000
    expect(Math.abs(nowSeconds + tenDaysInSeconds - TimeOffset.addDays(10).toFutureDate().getTime())).toBeLessThan(2)
  })
})
