import moment from "moment-timezone";

const zone = moment.tz.guess();

export function timeStampToTime(timestamp){
    return new Date(timestamp.toString()).toLocaleTimeString('en-US', {timeZone: zone, hour12:false, hour:'numeric', minute:'numeric'})
}

export function timeStampToDate(timestamp){
    return new Date(timestamp.toString()).toLocaleDateString('en-US', {timeZone: zone, month: 'numeric', day: 'numeric', year: 'numeric'});
}

export function dateFromPolyTimestamp(timestamp) {
    let fTime = new Date(timestamp).toLocaleDateString('en-US', {timeZone: zone, month: 'numeric', day: 'numeric', year: 'numeric'})

    return fTime.toString();
}