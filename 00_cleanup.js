const body = [
  {
    name: "Yasmin Bellanger WebRTC PHONE [ed00989]",
    site: { id: "0a994642-65cf-4cba-b98e-3e9976048ef3" },
    phoneBaseSettings: { id: "5f9c1e0d-cadb-4792-b982-9a3843ac0b9c" },
    lineBaseSettings: {
      id: "0a74cebd-093c-4679-97d0-c8a71acfa842",
      name: "WebRTC Base Settings_1",
    },
    phoneMetaBase: {
      id: "inin_webrtc_softphone.json",
      name: "PureCloud WebRTC Phone",
    },
    lines: [
      {
        id: "af118a3e-6bb8-4f1f-84b2-7c5d5626ec57",
        name: "65e8e8d46ac9622d7fb88ff7+maximuscanada-sbc-internalcc.orgspan.com",
        state: "active",
        site: [Object],
        lineBaseSettings: [Object],
      },
    ],
    webRtcUser: {
      id: "70820482-8119-4221-8598-5d2f0a953d2a",
      name: "Yasmin Bellanger",
    },
  },
];

body.map((object) => {
  console.log('"' + object.id + '"' + ",");
});
