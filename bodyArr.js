const data = [
  "SBC|CSR escalation",
"SBC|Policy escalation",
"Reschedule Callback",
"Voicemail",
"Voicemail not available",

];

const body = data.map((id) => ({
  name: id,
  // id: id,
  // acdAutoAnswer: false,
}));

console.log(body);
