// noinspection SuspiciousTypeOfGuard

import assert = require("assert");

/**
 * Library for work over time in seconds. The library works in accumulative mode, essentially a calculator.
 */
export class TimeOffset {
    constructor(ttl = 0) {
        assert(typeof ttl === 'number', 'ttl should be a number')
        this._ttl = ttl
    }

    private _ttl: number

    valueOf(): number {
        return this._ttl
    }

    /**
     * Creates an object with 0 seconds and adds the indicated seconds
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} seconds
     * @return {TimeOffset}
     */
    static addSeconds(seconds: number): TimeOffset {
        return new TimeOffset().addSeconds(seconds)
    }

    /**
     * Adds to the current accumulated time the indicated seconds
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} seconds
     * @return {TimeOffset}
     */
    addSeconds(seconds: number): TimeOffset {
        assert(typeof seconds === 'number', 'seconds should be a number')
        this._ttl += Math.floor(seconds)
        return this
    }

    /**
     * Creates an object with 0 seconds and adds the indicated minutes
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} minutes
     * @return {TimeOffset}
     */
    static addMinutes(minutes: number): TimeOffset {
        return new TimeOffset().addMinutes(minutes)
    }

    /**
     * Adds to the current accumulated time the indicated minutes
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} minutes
     * @return {TimeOffset}
     */
    addMinutes(minutes: number): TimeOffset {
        assert(typeof minutes === 'number', 'minutes should be a number')
        this._ttl += Math.floor(minutes) * 60
        return this
    }

    /**
     * Creates an object with 0 seconds and adds the specified watches
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} hours
     * @return {TimeOffset}
     */
    static addHours(hours: number): TimeOffset {
        return new TimeOffset().addHours(hours)
    }

    /**
     * Adds to the current accumulated time specified hours
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} hours
     * @return {TimeOffset}
     */
    addHours(hours: number): TimeOffset {
        assert(typeof hours === 'number', 'hours should be a number')
        this._ttl += Math.floor(hours) * 60 * 60
        return this
    }

    /**
     * Creates an object with 0 seconds and adds the indicated days
     *
     * Next values need to be indicated. By default, all values are rounded down. It is allowed to use negative values
     * @param {number} days
     * @return {TimeOffset}
     */
    static addDays(days: number): TimeOffset {
        return new TimeOffset().addDays(days)
    }

    /**
     * Adds to the current accumulated time indicated days
     *
     * Next values need to be indicated. By default, all values are rounded down. Allowed to use negative values
     * @param {number} days
     * @return {TimeOffset}
     */
    addDays(days: number): TimeOffset {
        assert(typeof days === 'number', 'days should be a number')
        this._ttl += Math.floor(days) * 24 * 60 * 60
        return this
    }

    /**
     * Returns the accumulated time in seconds
     * @return {number}
     */
    toAccumulatedSeconds(): number {
        return this._ttl
    }


    /**
     * Uses the accumulated seconds and returns the date in the future. `new Date(Date.now() + (ttl * 1000))`
     * @return {Date}
     */
    toFutureDate(): Date {
        return new Date(Date.now() + this._ttl * 1000)
    }

    /**
     * Uses the accumulated seconds and returns the date in the past. `new Date(Date.now() - (ttl * 1000))`
     * @return {Date}
     */
    toDatePast(): Date {
        return new Date(Date.now() - this._ttl * 1000)
    }
}
