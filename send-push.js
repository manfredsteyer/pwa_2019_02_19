const webpush = require('web-push');

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

const pushSubscription =
// {"endpoint":"https://fcm.googleapis.com/fcm/send/eZJdcdyRHrM:APA91bEuw-fa4Xn_4wVzpV4su98jcLXK---Oe7RCQCx6TdbHUVlsg5wzDy3jRNGhnjnTR5cSYk-f70nhps3FsNrS_knZ8ISTvx68bmN_cjn8WgFPz68Mj_lalzH4lK50Zjjb7RMJ3NVv","expirationTime":null,"keys":{"p256dh":"BESBLr9bH0GaRlvF1MyyJ0zjvDUGILH7vTho_Z6OPhMpE90MO7EySF7xu06a_zJCZ-cWFYQZ2UNyAte9A7PnzKY","auth":"tbAu4cpNo4D7JRwsw6_APw"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/dGFhQSPyxs8:APA91bF25wUAUMFyIH45_jxf5nslQ0ogk9BOYDMD6EJwGccY5cQELGzy3ubFG6xRebq3Ke22BKDMJyzPJPyM9dEl-kilFrCdb1W1Yi_1e1fagAKSRdhcShE7SjksPo9J9mwhwEvKnPf8","expirationTime":null,"keys":{"p256dh":"BDG42zombm_3bmEpVdHiZZkdCuWtQpe2LqPD4buQm4RhnenSaj7_mnaPqfOe_Y2Ygr0nTciF9OU4tTxsIrpx65o","auth":"GXP-yBRrdBf5Zc5njzNM0A"}}
//{"endpoint":"https://fcm.googleapis.com/fcm/send/cm81jgX39bE:APA91bGgn0sfK_52VpUZPphlfVjURcesBs-WvqELOnVciVrGckIVknuaMIghFdpdqpgUN1UR7m5erAM8FnsGBUP4Y0zfhZlrTkJHqRDEdQJ6BTAPPBljSWmaceYvhzSWd6H6BbM0603X","expirationTime":null,"keys":{"p256dh":"BBZI9kQb1tbPXWfoXaA3wNrZjIed_R32AaJ3_QsrI8KTag-BJfiBPuXtMSPObXNxeXjuBzbBbf77ar9_1j4u5aU","auth":"EMCaWWSD05YV7c2qgNPjeA"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/edpPdJDka5E:APA91bHlb5u9zu6dyhIolwc9sJD7RgU55KynzZcw7a3hVCsrUlf2PvLwyOWFnczc4aDFeOcqc8NeTjAJwBvrTbpbF7Ptfmse0JjZIs64xDh_FDvqSqe_eABTMhQsXxKvXtclvSy499yH","expirationTime":null,"keys":{"p256dh":"BCw2tVT2-XQhlD7OQ1rrknD5hOdx1mOiJTn43f81z3OxB8cCI_QHnRvSGpSD08Q6TDVFSPZ7dUG2_ldkcmGrRgw","auth":"Ol9FmkxXoegleUjxAKHdFQ"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/edpPdJDka5E:APA91bHlb5u9zu6dyhIolwc9sJD7RgU55KynzZcw7a3hVCsrUlf2PvLwyOWFnczc4aDFeOcqc8NeTjAJwBvrTbpbF7Ptfmse0JjZIs64xDh_FDvqSqe_eABTMhQsXxKvXtclvSy499yH","expirationTime":null,"keys":{"p256dh":"BCw2tVT2-XQhlD7OQ1rrknD5hOdx1mOiJTn43f81z3OxB8cCI_QHnRvSGpSD08Q6TDVFSPZ7dUG2_ldkcmGrRgw","auth":"Ol9FmkxXoegleUjxAKHdFQ"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/fcfHkuGty1w:APA91bEmOika9CO6fKw8RKsxUTlojTUDhG2fe5pwENKZquUM6Aa9M7l-XobpyaKMI7fzhjAZ09NbWRcKfVoq9DNphzhP6ieKSdeYOFyhi4hw00l5-mbJ8GEqcp2UY1g0qvy5oqqu2pB5","expirationTime":null,"keys":{"p256dh":"BEROKYJtDG6pKo2SC1oWKjaA7XanAQy4v4SU8Bgmo7s1Z9y7FoBOycciloIw7Fqk-BJxRJS9GchpTxRY3H6euUk","auth":"Z7xbk6P7erkWdbp8RjzfuQ"}};
//{"endpoint":"https://fcm.googleapis.com/fcm/send/ciUMlJ_44Ks:APA91bH0qnmTrwkt19a0eZYUnr40k3EH8TdhW82xPaPV-8oT3VsL46ixbqpOOryl18rKn_O-SWV8sPJcSYR4hyRH75FH5uOr8TD282J6CfltVTRF99m4ldKHh7hM6XCkMlKSTzzBheaw","expirationTime":null,"keys":{"p256dh":"BCABvb2XV37WKOZnhsRICT_yixP72gKdJBFpwS97GE1BK-SmSpoo89_4a2reGvmsYfw8kln4nzAExbXW3XOHhBE","auth":"nwnz3MhU7iK40tq1TtO2DQ"}}
//{"endpoint":"https://fcm.googleapis.com/fcm/send/eTeulXWFSmw:APA91bGM6YUVizTp2R9QT8nmnjpYmFN2_K_vZLQBIN0OscEvCUtk8Gq4BrBHuCAztGi7RRP2eq1qrDnamyWwPA1Hq2Tu8ErchhafW-SBf4injRitUVA5Fz61YmfCobe64Xi4H2U7cTLp","expirationTime":null,"keys":{"p256dh":"BGfnq8GAO_uQK5xprNh62vVJmPfLCOLaSDPiOee3-qdJTTQi8Sx7me3JD1vjDcWhXz5GC3s5WwiKFWkNMm2eQwE","auth":"VBkuKiuxEj9vWeSJxqrhPQ"}};
//{"endpoint":"https://db5p.notify.windows.com/w/?token=BQYAAABZn2CdWUzr2QFuLtAiVO8lVe6ggynkq82bR3hvz4h11yaAXOKZuc%2bXmsrpyU1%2fTzFMRLtlhXydSwlh3dINWdOR%2b8aI8Etcg9f%2foyfZSwrdTB4SF2miM25kSDT1Bhn2x6VXwDkYuNv2ei3M2bMYbL2AfYBtTEZUrSrHXrFlAVLsK8wvq37rnFAR09TlSqqXC0c0M1B3dY2feYO5%2fjzrmv2fcVreUFBqnFz15GmOsAOmgQ0Zkk1Np73lCn4U2cYTduzdHk3SS33RuqQDUctbJJ1Krxi8DEYoxFI9w46G6%2fmTS3cLlTEmoDy%2fiObSBL01TDFipfaOc5D3hLuq2%2bk6fAKj","expirationTime":1546094187000,"keys":{"auth":"VyomxP7e1qA5GWcM8FJmLA","p256dh":"BDMNZEJ0zfrCoTrSjnA924W470_o0fhM6wmEwEXlKFynQpRn2_huC1-ZAHQXMoDUi4UB374oA5x25KClXBHr0No"}}
//{"endpoint":"https://db5p.notify.windows.com/w/?token=BQYAAAB6Bdv%2fM2BWr7mLN%2fV6GURZQJ75NDE%2bruVVPwdaeHCSuIrFin8TLO8BBoheLXmbpcZ9tZp%2bmzvomEe8LvWWVpOTsWY7Brcy%2b1MhAwSR4qMguMdthUVzZGod%2fYEKsc96i0K48Ykg7HLHVRul8E9hESszfu%2bTLx5FrXLbCU6qdRYGiQzW5sPdPqxyBhmkkxXbYPB5%2brV9DapE2MsAfOLJKrQIAmL3eEGnaFhk98pErxMfDstQXZpb49rP7sJS6DhlTjQqKj9ruBmRUvJxHQM00On3cVe1X5JRL2u8qk4yan7H65TvJxSKnYDmxCSeP4quuMVVqjlw3AOvgGiKdeOvnOc1","expirationTime":1546094422000,"keys":{"auth":"TGsFVdhhizmREwahoBlIpg","p256dh":"BAGzzUq1jDDq72HHOYMIgjDP1E0WPUYjIZsSNTGU8n65fQlwT1h3nipeCXlfLuMWWVO-VL4-hYed5WVbPybv0Tw"}}
// {"endpoint":"https://db5p.notify.windows.com/w/?token=BQYAAAB6Bdv%2fM2BWr7mLN%2fV6GURZQJ75NDE%2bruVVPwdaeHCSuIrFin8TLO8BBoheLXmbpcZ9tZp%2bmzvomEe8LvWWVpOTsWY7Brcy%2b1MhAwSR4qMguMdthUVzZGod%2fYEKsc96i0K48Ykg7HLHVRul8E9hESszfu%2bTLx5FrXLbCU6qdRYGiQzW5sPdPqxyBhmkkxXbYPB5%2brV9DapE2MsAfOLJKrQIAmL3eEGnaFhk98pErxMfDstQXZpb49rP7sJS6DhlTjQqKj9ruBmRUvJxHQM00On3cVe1X5JRL2u8qk4yan7H65TvJxSKnYDmxCSeP4quuMVVqjlw3AOvgGiKdeOvnOc1","expirationTime":1546094422000,"keys":{"auth":"TGsFVdhhizmREwahoBlIpg","p256dh":"BAGzzUq1jDDq72HHOYMIgjDP1E0WPUYjIZsSNTGU8n65fQlwT1h3nipeCXlfLuMWWVO-VL4-hYed5WVbPybv0Tw"}}
// {"endpoint":"https://fcm.googleapis.com/fcm/send/e9BgNfipDfo:APA91bGwXCJLsorMiAsZITmmoNToqaogdAOMp_jS1fbBS_a9DlotGx4_UnoxLYs-sy39uDsZeEtXzflLwHZMpP64bF2h_ISU9HOlqzht4fNN9s7sKz81IEBOeSyv59cw9enIW54BfH7r","expirationTime":null,"keys":{"p256dh":"BKaj8I4uCPX93mR-bvgSPDWBmnIj4sXyMF-g3FVb49JwfbPJL3SSr3b0jo6v0tbql9W81-AQKdu69G3BBcMzYnU","auth":"tHRObMA19SYp-o-qgI0wCQ"}}
{"endpoint":"https://fcm.googleapis.com/fcm/send/eRYH_phQPL8:APA91bFfFpM2u0wjjd4EhoUaDctF_T56srmLS2XstfAjI3RhqiuE-93skgpzIOFR0sNWYXJRNBq8R3KciZCWnyulsC78chS1qFXJWQKdzygeCXpcIxSqIPfkLvI79_FUfj8viapyeP8t","expirationTime":null,"keys":{"p256dh":"BEfSsnLH1WxAYMffjeLsTBx7IKX_xJ4xJ-inlSvqhQOIkV38cUkSypGJLh6tPH6FYp0MrvrT0P8SrO7I9gbAQGI","auth":"hGMR4DT0eAnvsKbzMyuH1g"}}


const gate = Math.floor(Math.random() * 100);

const payload = JSON.stringify({
  notification: {
    title: 'Hotel room ready',
    body: 'Your hotel room 4711 is ready now',
    icon: './assets/img/angular.png',
    data: 'additional data! room: 4711 ',
    tag: '' + Math.random() * 9999
  }
});

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
