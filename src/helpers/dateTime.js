export default function formatMyTimestamp(timeStamp, withTime=true, splitString="/", joinString="-") {
  let date = new Date(timeStamp.toString()).toLocaleDateString('zh-Hans-CN', {year: 'numeric', month: "2-digit", day:"2-digit"}).split(splitString).join(joinString);
  let time = new Date(timeStamp.toString()).toLocaleTimeString('en-US', { hour12: false });
  return withTime ? `${date}T${time}.000` : `${date}`
}