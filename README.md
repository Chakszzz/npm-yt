# @hiudyy/ytdl

A simple and efficient module to download videos and audios from YouTube and various other sites, as well as perform music searches.

---

## Installation

To install the module, use the npm or yarn package manager:

```bash
npm install @hiudyy/ytdl
```

```bash
yarn add @hiudyy/ytdl
```

---

## How to use

Importing the module

```javascript
const { yts, ytmp4, ytmp3, alldl, ai } = require('@hiudyy/ytdl');
//import { yts, ytmp4, ytmp3, alldl, ai } from '@hiudyy/ytdl';
```

---

## Available functions

_1. Search for songs (**yts**)_

Use this function to search for information about a song on YouTube.

```javascript
const { yts } = require('@hiudyy/ytdl');
//import { yts } from '@hiudyy/ytdl';

(async () => {
  const query = "Bon Jovi - It's My Life";
  const video = (await yts(query)).videos[0];

  console.log(`Título: ${video.title.text}`);
  console.log(`ID: ${video.id}`);
  console.log(`Duração: ${video.thumbnail_overlays[0].text}`);
  console.log(`URL: https://www.youtube.com/watch?v=${video.id}`);
})();
```

Expected output:

```
Título: Bon Jovi - It's My Life (Official Music Video)
ID: vx2u5uUu3DE
Duração: 4:27
URL: https://www.youtube.com/watch?v=vx2u5uUu3DE
```

When you use the **yts** function, the basic structure of the response is:

```json
{
  "type": "Video",
  "id": "vx2u5uUu3DE",
  "title": {
    "text": "Bon Jovi - It's My Life (Official Music Video)"
  },
  "thumbnails": [
    {
      "url": "https://i.ytimg.com/vi/vx2u5uUu3DE/hq720.jpg",
      "width": 720,
      "height": 404
    }
  ],
  "thumbnail_overlays": [
    {
      "text": "4:27"
    }
  ],
  "author": {
    "name": "Bon Jovi",
    "url": "https://www.youtube.com/channel/UCkBwnm7GOfYHsacwUjriC-w"
  }
}
```

---

_2. Download YouTube video (**ytmp4**)_

This function downloads the video from a YouTube link.

```javascript
const { ytmp4 } = require('@hiudyy/ytdl');
//import { ytmp4 } from '@hiudyy/ytdl';

(async () => {
  const url = 'https://www.youtube.com/watch?v=vx2u5uUu3DE';
  const video = await ytmp4(url);

  console.log('Video download completed:', video);
})();
```

---

_3. Download audio from YouTube (**ytmp3**)_

This function downloads only the audio from a YouTube video.

```javascript
const { ytmp3 } = require('@hiudyy/ytdl');
//import { ytmp3 } from '@hiudyy/ytdl';

(async () => {
  const url = 'https://www.youtube.com/watch?v=vx2u5uUu3DE';
  const audio = await ytmp3(url);

  console.log('Audio download completed:', audio);
})();
```

---

_4. Download media from other sites (**alldl**)_

This function downloads audio, video, images, or documents from most available websites on the web.

```javascript
const { alldl } = require('@hiudyy/ytdl');
//import { alldl } from '@hiudyy/ytdl';

(async () => {
  const url = 'https://vm.tiktok.com/ZMkNpBFjX/';
  const array = await alldl(url);

  for (download of array) {
    console.log(`Download of ${array.type} completed:`, array.src);
  }
})();
```

When you use the **alldl** function, the basic structure of the response is:

```json
[
  {
    "type": "video",
    "src": "<Buffer>",
    "mimetype": "video/mp4"
  },
  {
    "type": "audio",
    "src": "<Buffer>",
    "mimetype": "audio/mp4"
  },
  {
    "type": "image",
    "src": "<Buffer>",
    "mimetype": "image/jpg"
  },
  {
    "type": "document",
    "src": "<Buffer>",
    "mimetype": "application/zip"
  }
]
```

---

_5. artificial inteligence (**ai**)_

This function is used to use artificial intelligence, both for text and images.

```javascript
const { ai } = require('@hiudyy/ytdl');
//import { ai } from '@hiudyy/ytdl';

/*-------------------------------------------*/
// AI Normal
(async () => {
  // Basic usage
  const prompt = 'Hello!';
  const response = await ai(prompt);
  console.log(response);
})();

(async () => {
  // Selecting a specific model
  const prompt = 'Hello!';
  const model = 'gpt-4o';
  const response = await ai(prompt, model);
  console.log(response);
})();

(async () => {
  // Using message memory
  const prompt = 'Hello!';
  const model = 'gpt-4o';
  const chatId = 'Z7nM9wUb61zi01Ma';
  const response = await ai(prompt, model, chatId);
  console.log(response);
})();

/*-------------------------------------------*/
// AI V2
(async () => {
  // Basic usage
  const prompt = 'Hello, version 2!';
  const response = await ai.v2(prompt);
  console.log(response);
})();

(async () => {
  // Selecting a specific model
  const prompt = 'Hello, version 2!';
  const model = 'gpt-4o';
  const response = await ai.v2(prompt, model);
  console.log(response);
})();

(async () => {
  // Using message memory
  const prompt = 'Hello, version 2!';
  const model = 'gpt-4o';
  const chatId = 'Z7nM9wUb61zi01Ma';
  const response = await ai.v2(prompt, model, chatId);
  console.log(response);
})();

/*-------------------------------------------*/
// AI V3 (No memory support)
(async () => {
  // Basic usage
  const prompt = 'Hello, version 3!';
  const response = await ai.v3(prompt);
  console.log(response);
})();

(async () => {
  // Selecting a specific model
  const prompt = 'Hello, version 3!';
  const model = 'gpt-4o';
  const response = await ai.v3(prompt, model);
  console.log(response);
})();

/*-------------------------------------------*/
// AI Image
(async () => {
  // Basic usage
  const prompt = 'A dark forest with glowing lights';
  const response = await ai.image(prompt);
  console.log(response);
})();

(async () => {
  // Selecting a specific image model
  const prompt = 'A dark forest with glowing lights';
  const model = 'dalle';
  const response = await ai.image(prompt, model);
  console.log(response);
})();

/*-------------------------------------------*/
// Retrieving available AI models
(async () => {
  const models = await ai.models();
  console.log(models);
})();

/*-------------------------------------------*/
// Clearing AI message storage
(async () => {
  await ai.clear();
  console.log('Message storage cleared.');
})();
```

---

## Contribution

Feel free to open issues or submit pull requests to improve the module.

GitHub repository: [🔗 Click here](https://github.com/hiudyy/ytdl)

---

## License

This project is licensed under the MIT License.

---

## Supported sites

List of sites supported by the **alldl** function

- **17live**
- **17live:clip**
- **1News**: 1news.co.nz article videos
- **1tv**: Первый канал
- **20min**
- **23video**
- **247sports**: (**Currently broken**)
- **24tv.ua**
- **3qsdn**: 3Q SDN
- **3sat**
- **4tube**
- **56.com**
- **6play**
- **7plus**
- **8tracks**
- **9c9media**
- **9gag**: 9GAG
- **9News**
- **9now.com.au**
- **abc.net.au**
- **abc.net.au:iview**
- **abc.net.au:iview:showseries**
- **abcnews**
- **abcnews:video**
- **abcotvs**: ABC Owned Television Stations
- **abcotvs:clips**
- **AbemaTV**: [_abematv_](## 'netrc machine')
- **AbemaTVTitle**: [_abematv_](## 'netrc machine')
- **AcademicEarth:Course**
- **acast**
- **acast:channel**
- **AcFunBangumi**
- **AcFunVideo**
- **ADN**: [_animationdigitalnetwork_](## 'netrc machine') Animation Digital Network
- **ADNSeason**: [_animationdigitalnetwork_](## 'netrc machine') Animation Digital Network
- **AdobeConnect**
- **adobetv**
- **adobetv:channel**
- **adobetv:embed**
- **adobetv:show**
- **adobetv:video**
- **AdultSwim**
- **aenetworks**: A+E Networks: A&E, Lifetime, History.com, FYI Network and History Vault
- **aenetworks:collection**
- **aenetworks:show**
- **AeonCo**
- **AirTV**
- **AitubeKZVideo**
- **AliExpressLive**
- **AlJazeera**
- **Allocine**
- **Allstar**
- **AllstarProfile**
- **AlphaPorno**
- **Alsace20TV**
- **Alsace20TVEmbed**
- **altcensored**
- **altcensored:channel**
- **Alura**: [_alura_](## 'netrc machine')
- **AluraCourse**: [_aluracourse_](## 'netrc machine')
- **AmadeusTV**
- **Amara**
- **AmazonMiniTV**
- **amazonminitv:season**: Amazon MiniTV Season, "minitv:season:" prefix
- **amazonminitv:series**: Amazon MiniTV Series, "minitv:series:" prefix
- **AmazonReviews**
- **AmazonStore**
- **AMCNetworks**
- **AmericasTestKitchen**
- **AmericasTestKitchenSeason**
- **AmHistoryChannel**
- **AnchorFMEpisode**
- **anderetijden**: npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl
- **Angel**
- **AnimalPlanet**
- **ant1newsgr:article**: ant1news.gr articles
- **ant1newsgr:embed**: ant1news.gr embedded videos
- **antenna:watch**: antenna.gr and ant1news.gr videos
- **Anvato**
- **aol.com**: Yahoo screen and movies (**Currently broken**)
- **APA**
- **Aparat**
- **AppleConnect**
- **AppleDaily**: 臺灣蘋果日報
- **ApplePodcasts**
- **appletrailers**
- **appletrailers:section**
- **archive.org**: archive.org video and audio
- **ArcPublishing**
- **ARD**
- **ARDMediathek**
- **ARDMediathekCollection**
- **Arkena**
- **Art19**
- **Art19Show**
- **arte.sky.it**
- **ArteTV**
- **ArteTVCategory**
- **ArteTVEmbed**
- **ArteTVPlaylist**
- **asobichannel**: ASOBI CHANNEL
- **asobichannel:tag**: ASOBI CHANNEL
- **AsobiStage**: ASOBISTAGE (アソビステージ)
- **AtresPlayer**: [_atresplayer_](## 'netrc machine')
- **AtScaleConfEvent**
- **ATVAt**
- **AudiMedia**
- **AudioBoom**
- **Audiodraft:custom**
- **Audiodraft:generic**
- **audiomack**
- **audiomack:album**
- **Audius**: Audius.co
- **audius:artist**: Audius.co profile/artist pages
- **audius:playlist**: Audius.co playlists
- **audius:track**: Audius track ID or API link. Prepend with "audius:"
- **AWAAN**
- **awaan:live**
- **awaan:season**
- **awaan:video**
- **axs.tv**
- **AZMedien**: AZ Medien videos
- **BaiduVideo**: 百度视频
- **BanBye**
- **BanByeChannel**
- **bandaichannel**
- **Bandcamp**
- **Bandcamp:album**
- **Bandcamp:user**
- **Bandcamp:weekly**
- **Bandlab**
- **BandlabPlaylist**
- **BannedVideo**
- **bbc**: [_bbc_](## 'netrc machine') BBC
- **bbc.co.uk**: [_bbc_](## 'netrc machine') BBC iPlayer
- **bbc.co.uk:article**: BBC articles
- **bbc.co.uk:iplayer:episodes**
- **bbc.co.uk:iplayer:group**
- **bbc.co.uk:playlist**
- **BBVTV**: [_bbvtv_](## 'netrc machine')
- **BBVTVLive**: [_bbvtv_](## 'netrc machine')
- **BBVTVRecordings**: [_bbvtv_](## 'netrc machine')
- **BeaconTv**
- **BeatBumpPlaylist**
- **BeatBumpVideo**
- **Beatport**
- **Beeg**
- **BehindKink**: (**Currently broken**)
- **Bellator**
- **BellMedia**
- **BerufeTV**
- **Bet**: (**Currently broken**)
- **bfi:player**: (**Currently broken**)
- **bfmtv**
- **bfmtv:article**
- **bfmtv:live**
- **bibeltv:live**: BibelTV live program
- **bibeltv:series**: BibelTV series playlist
- **bibeltv:video**: BibelTV single video
- **Bigflix**
- **Bigo**
- **Bild**: Bild.de
- **BiliBili**
- **Bilibili category extractor**
- **BilibiliAudio**
- **BilibiliAudioAlbum**
- **BiliBiliBangumi**
- **BiliBiliBangumiMedia**
- **BiliBiliBangumiSeason**
- **BilibiliCheese**
- **BilibiliCheeseSeason**
- **BilibiliCollectionList**
- **BilibiliFavoritesList**
- **BiliBiliPlayer**
- **BilibiliPlaylist**
- **BiliBiliSearch**: Bilibili video search; "bilisearch:" prefix
- **BilibiliSeriesList**
- **BilibiliSpaceAudio**
- **BilibiliSpaceVideo**
- **BilibiliWatchlater**
- **BiliIntl**: [_biliintl_](## 'netrc machine')
- **biliIntl:series**: [_biliintl_](## 'netrc machine')
- **BiliLive**
- **BioBioChileTV**
- **Biography**
- **BitChute**
- **BitChuteChannel**
- **BlackboardCollaborate**
- **BleacherReport**: (**Currently broken**)
- **BleacherReportCMS**: (**Currently broken**)
- **blerp**
- **blogger.com**
- **Bloomberg**
- **Bluesky**
- **BokeCC**
- **BongaCams**
- **Boosty**
- **BostonGlobe**
- **Box**
- **BoxCastVideo**
- **Bpb**: Bundeszentrale für politische Bildung
- **BR**: Bayerischer Rundfunk (**Currently broken**)
- **BrainPOP**: [_brainpop_](## 'netrc machine')
- **BrainPOPELL**: [_brainpop_](## 'netrc machine')
- **BrainPOPEsp**: [_brainpop_](## 'netrc machine') BrainPOP Español
- **BrainPOPFr**: [_brainpop_](## 'netrc machine') BrainPOP Français
- **BrainPOPIl**: [_brainpop_](## 'netrc machine') BrainPOP Hebrew
- **BrainPOPJr**: [_brainpop_](## 'netrc machine')
- **BravoTV**
- **BreitBart**
- **brightcove:legacy**
- **brightcove:new**
- **Brilliantpala:Classes**: [_brilliantpala_](## 'netrc machine') VoD on classes.brilliantpala.org
- **Brilliantpala:Elearn**: [_brilliantpala_](## 'netrc machine') VoD on elearn.brilliantpala.org
- **bt:article**: Bergens Tidende Articles
- **bt:vestlendingen**: Bergens Tidende - Vestlendingen
- **Bundesliga**
- **Bundestag**
- **BusinessInsider**
- **BuzzFeed**
- **BYUtv**: (**Currently broken**)
- **CaffeineTV**
- **Callin**
- **Caltrans**
- **CAM4**
- **Camdemy**
- **CamdemyFolder**
- **CamFMEpisode**
- **CamFMShow**
- **CamModels**
- **Camsoda**
- **CamtasiaEmbed**
- **Canal1**
- **CanalAlpha**
- **canalc2.tv**
- **Canalplus**: mycanal.fr and piwiplus.fr
- **CaracolTvPlay**: [_caracoltv-play_](## 'netrc machine')
- **CartoonNetwork**
- **cbc.ca**
- **cbc.ca:player**
- **cbc.ca:player:playlist**
- **CBS**: (**Currently broken**)
- **CBSLocal**
- **CBSLocalArticle**
- **CBSLocalLive**
- **cbsnews**: CBS News
- **cbsnews:embed**
- **cbsnews:live**: CBS News Livestream
- **cbsnews:livevideo**: CBS News Live Videos
- **cbssports**: (**Currently broken**)
- **cbssports:embed**: (**Currently broken**)
- **CCMA**: 3Cat, TV3 and Catalunya Ràdio
- **CCTV**: 央视网
- **CDA**: [_cdapl_](## 'netrc machine')
- **CDAFolder**
- **Cellebrite**
- **CeskaTelevize**
- **CGTN**
- **CharlieRose**
- **Chaturbate**
- **Chilloutzone**
- **chzzk:live**
- **chzzk:video**
- **cielotv.it**
- **Cinemax**: (**Currently broken**)
- **CinetecaMilano**
- **Cineverse**
- **CineverseDetails**
- **CiscoLiveSearch**
- **CiscoLiveSession**
- **ciscowebex**: Cisco Webex
- **CJSW**
- **Clipchamp**
- **Clippit**
- **ClipRs**: (**Currently broken**)
- **ClipYouEmbed**
- **CloserToTruth**: (**Currently broken**)
- **CloudflareStream**
- **CloudyCDN**
- **Clubic**: (**Currently broken**)
- **Clyp**
- **cmt.com**: (**Currently broken**)
- **CNBCVideo**
- **CNN**
- **CNNIndonesia**
- **ComedyCentral**
- **ComedyCentralTV**
- **ConanClassic**
- **CondeNast**: Condé Nast media group: Allure, Architectural Digest, Ars Technica, Bon Appétit, Brides, Condé Nast, Condé Nast Traveler, Details, Epicurious, GQ, Glamour, Golf Digest, SELF, Teen Vogue, The New Yorker, Vanity Fair, Vogue, W Magazine, WIRED
- **CONtv**
- **CookingChannel**
- **Corus**
- **Coub**
- **CozyTV**
- **cp24**
- **cpac**
- **cpac:playlist**
- **Cracked**
- **Crackle**
- **Craftsy**
- **CrooksAndLiars**
- **CrowdBunker**
- **CrowdBunkerChannel**
- **Crtvg**
- **crunchyroll**: [_crunchyroll_](## 'netrc machine')
- **crunchyroll:artist**: [_crunchyroll_](## 'netrc machine')
- **crunchyroll:music**: [_crunchyroll_](## 'netrc machine')
- **crunchyroll:playlist**: [_crunchyroll_](## 'netrc machine')
- **CSpan**: C-SPAN
- **CSpanCongress**
- **CtsNews**: 華視新聞
- **CTV**
- **CTVNews**
- **cu.ntv.co.jp**: Nippon Television Network
- **CultureUnplugged**
- **curiositystream**: [_curiositystream_](## 'netrc machine')
- **curiositystream:collections**: [_curiositystream_](## 'netrc machine')
- **curiositystream:series**: [_curiositystream_](## 'netrc machine')
- **CWTV**
- **Cybrary**: [_cybrary_](## 'netrc machine')
- **CybraryCourse**: [_cybrary_](## 'netrc machine')
- **DacastPlaylist**
- **DacastVOD**
- **DagelijkseKost**: dagelijksekost.een.be
- **DailyMail**
- **dailymotion**: [_dailymotion_](## 'netrc machine')
- **dailymotion:playlist**: [_dailymotion_](## 'netrc machine')
- **dailymotion:search**: [_dailymotion_](## 'netrc machine')
- **dailymotion:user**: [_dailymotion_](## 'netrc machine')
- **DailyWire**
- **DailyWirePodcast**
- **damtomo:record**
- **damtomo:video**
- **dangalplay**: [_dangalplay_](## 'netrc machine')
- **dangalplay:season**: [_dangalplay_](## 'netrc machine')
- **daum.net**
- **daum.net:clip**
- **daum.net:playlist**
- **daum.net:user**
- **daystar:clip**
- **DBTV**
- **DctpTv**
- **DeezerAlbum**
- **DeezerPlaylist**
- **democracynow**
- **DestinationAmerica**
- **DetikEmbed**
- **DeuxM**
- **DeuxMNews**
- **DHM**: Filmarchiv - Deutsches Historisches Museum (**Currently broken**)
- **DigitalConcertHall**: [_digitalconcerthall_](## 'netrc machine') DigitalConcertHall extractor
- **DigitallySpeaking**
- **Digiteka**
- **DiscogsReleasePlaylist**
- **DiscoveryLife**
- **DiscoveryNetworksDe**
- **DiscoveryPlus**
- **DiscoveryPlusIndia**
- **DiscoveryPlusIndiaShow**
- **DiscoveryPlusItaly**
- **DiscoveryPlusItalyShow**
- **Disney**
- **dlf**
- **dlf:corpus**: DLF Multi-feed Archives
- **dlive:stream**
- **dlive:vod**
- **Douyin**
- **DouyuShow**
- **DouyuTV**: 斗鱼直播
- **DPlay**
- **DRBonanza**
- **Drooble**
- **Dropbox**
- **Dropout**: [_dropout_](## 'netrc machine')
- **DropoutSeason**
- **DrTuber**
- **drtv**
- **drtv:live**
- **drtv:season**
- **drtv:series**
- **DTube**: (**Currently broken**)
- **duboku**: www.duboku.io
- **duboku:list**: www.duboku.io entire series
- **Dumpert**
- **Duoplay**
- **dvtv**: http://video.aktualne.cz/
- **dw**: (**Currently broken**)
- **dw:article**: (**Currently broken**)
- **EaglePlatform**
- **EbaumsWorld**
- **Ebay**
- **egghead:course**: egghead.io course
- **egghead:lesson**: egghead.io lesson
- **EinsUndEinsTV**: [_1und1tv_](## 'netrc machine')
- **EinsUndEinsTVLive**: [_1und1tv_](## 'netrc machine')
- **EinsUndEinsTVRecordings**: [_1und1tv_](## 'netrc machine')
- **eitb.tv**
- **ElementorEmbed**
- **Elonet**
- **ElPais**: El País
- **ElTreceTV**: El Trece TV (Argentina)
- **Embedly**
- **EMPFlix**
- **Epicon**
- **EpiconSeries**
- **EpidemicSound**
- **eplus**: [_eplus_](## 'netrc machine') e+ (イープラス)
- **Epoch**
- **Eporner**
- **Erocast**
- **EroProfile**: [_eroprofile_](## 'netrc machine')
- **EroProfile:album**
- **ERRJupiter**
- **ertflix**: ERTFLIX videos
- **ertflix:codename**: ERTFLIX videos by codename
- **ertwebtv:embed**: ert.gr webtv embedded videos
- **ESPN**
- **ESPNArticle**
- **ESPNCricInfo**
- **EttuTv**
- **Europa**: (**Currently broken**)
- **EuroParlWebstream**
- **EuropeanTour**
- **Eurosport**
- **EUScreen**
- **EWETV**: [_ewetv_](## 'netrc machine')
- **EWETVLive**: [_ewetv_](## 'netrc machine')
- **EWETVRecordings**: [_ewetv_](## 'netrc machine')
- **Expressen**
- **EyedoTV**
- **facebook**: [_facebook_](## 'netrc machine')
- **facebook:ads**
- **facebook:reel**
- **FacebookPluginsVideo**
- **fancode:live**: [_fancode_](## 'netrc machine') (**Currently broken**)
- **fancode:vod**: [_fancode_](## 'netrc machine') (**Currently broken**)
- **Fathom**
- **faz.net**
- **fc2**: [_fc2_](## 'netrc machine')
- **fc2:embed**
- **fc2:live**
- **Fczenit**
- **Fifa**
- **filmon**
- **filmon:channel**
- **Filmweb**
- **FiveThirtyEight**
- **FiveTV**
- **FlexTV**
- **Flickr**
- **Floatplane**
- **FloatplaneChannel**
- **Folketinget**: Folketinget (ft.dk; Danish parliament)
- **FoodNetwork**
- **FootyRoom**
- **Formula1**
- **FOX**
- **FOX9**
- **FOX9News**
- **foxnews**: Fox News and Fox Business Video
- **foxnews:article**
- **FoxNewsVideo**
- **FoxSports**
- **fptplay**: fptplay.vn
- **FranceCulture**
- **FranceInter**
- **FranceTV**
- **francetvinfo.fr**
- **FranceTVSite**
- **Freesound**
- **freespeech.org**
- **freetv:series**
- **FreeTvMovies**
- **FrontendMasters**: [_frontendmasters_](## 'netrc machine')
- **FrontendMastersCourse**: [_frontendmasters_](## 'netrc machine')
- **FrontendMastersLesson**: [_frontendmasters_](## 'netrc machine')
- **FujiTVFODPlus7**
- **Funimation**: [_funimation_](## 'netrc machine')
- **funimation:page**: [_funimation_](## 'netrc machine')
- **funimation:show**: [_funimation_](## 'netrc machine')
- **Funk**
- **Funker530**
- **Fux**
- **FuyinTV**
- **Gab**
- **GabTV**
- **Gaia**: [_gaia_](## 'netrc machine')
- **GameDevTVDashboard**: [_gamedevtv_](## 'netrc machine')
- **GameJolt**
- **GameJoltCommunity**
- **GameJoltGame**
- **GameJoltGameSoundtrack**
- **GameJoltSearch**
- **GameJoltUser**
- **GameSpot**
- **GameStar**
- **Gaskrank**
- **Gazeta**: (**Currently broken**)
- **GBNews**: GB News clips, features and live streams
- **GDCVault**: [_gdcvault_](## 'netrc machine') (**Currently broken**)
- **GediDigital**
- **gem.cbc.ca**: [_cbcgem_](## 'netrc machine')
- **gem.cbc.ca:live**
- **gem.cbc.ca:playlist**
- **Genius**
- **GeniusLyrics**
- **Germanupa**: germanupa.de
- **GetCourseRu**: [_getcourseru_](## 'netrc machine')
- **GetCourseRuPlayer**
- **Gettr**
- **GettrStreaming**
- **GiantBomb**
- **GlattvisionTV**: [_glattvisiontv_](## 'netrc machine')
- **GlattvisionTVLive**: [_glattvisiontv_](## 'netrc machine')
- **GlattvisionTVRecordings**: [_glattvisiontv_](## 'netrc machine')
- **Glide**: Glide mobile video messages (glide.me)
- **GlobalPlayerAudio**
- **GlobalPlayerAudioEpisode**
- **GlobalPlayerLive**
- **GlobalPlayerLivePlaylist**
- **GlobalPlayerVideo**
- **Globo**: [_globo_](## 'netrc machine')
- **GloboArticle**
- **glomex**: Glomex videos
- **glomex:embed**: Glomex embedded videos
- **GMANetworkVideo**
- **Go**
- **GoDiscovery**
- **GodResource**
- **GodTube**: (**Currently broken**)
- **Gofile**
- **Golem**
- **goodgame:stream**
- **google:podcasts**
- **google:podcasts:feed**
- **GoogleDrive**
- **GoogleDrive:Folder**
- **GoPlay**: [_goplay_](## 'netrc machine')
- **GoPro**
- **Goshgay**
- **GoToStage**
- **GPUTechConf**
- **Graspop**
- **Gronkh**
- **gronkh:feed**
- **gronkh:vods**
- **Groupon**
- **Harpodeon**
- **hbo**
- **HearThisAt**
- **Heise**
- **HellPorno**
- **hetklokhuis**
- **hgtv.com:show**
- **HGTVDe**
- **HGTVUsa**
- **HiDive**: [_hidive_](## 'netrc machine')
- **HistoricFilms**
- **history:player**
- **history:topic**: History.com Topic
- **HitRecord**
- **hketv**: 香港教育局教育電視 (HKETV) Educational Television, Hong Kong Educational Bureau
- **HollywoodReporter**
- **HollywoodReporterPlaylist**
- **Holodex**
- **HotNewHipHop**: (**Currently broken**)
- **hotstar**
- **hotstar:playlist**
- **hotstar:season**
- **hotstar:series**
- **hrfernsehen**
- **HRTi**: [_hrti_](## 'netrc machine')
- **HRTiPlaylist**: [_hrti_](## 'netrc machine')
- **HSEProduct**
- **HSEShow**
- **html5**
- **Huajiao**: 花椒直播
- **HuffPost**: Huffington Post
- **Hungama**
- **HungamaAlbumPlaylist**
- **HungamaSong**
- **huya:live**: huya.com
- **huya:video**: 虎牙视频
- **Hypem**
- **Hytale**
- **Icareus**
- **IdolPlus**
- **iflix:episode**
- **IflixSeries**
- **ign.com**
- **IGNArticle**
- **IGNVideo**
- **iheartradio**
- **iheartradio:podcast**
- **IlPost**
- **Iltalehti**
- **imdb**: Internet Movie Database trailers
- **imdb:list**: Internet Movie Database lists
- **Imgur**
- **imgur:album**
- **imgur:gallery**
- **Ina**
- **Inc**
- **IndavideoEmbed**
- **InfoQ**
- **Instagram**: [_instagram_](## 'netrc machine')
- **instagram:story**: [_instagram_](## 'netrc machine')
- **instagram:tag**: [_instagram_](## 'netrc machine') Instagram hashtag search URLs
- **instagram:user**: [_instagram_](## 'netrc machine') Instagram user profile (**Currently broken**)
- **InstagramIOS**: IOS instagram:// URL
- **Internazionale**
- **InternetVideoArchive**
- **InvestigationDiscovery**
- **IPrima**: [_iprima_](## 'netrc machine')
- **IPrimaCNN**
- **iq.com**: International version of iQiyi
- **iq.com:album**
- **iqiyi**: [_iqiyi_](## 'netrc machine') 爱奇艺
- **IslamChannel**
- **IslamChannelSeries**
- **IsraelNationalNews**
- **ITProTV**
- **ITProTVCourse**
- **ITV**
- **ITVBTCC**
- **ivi**: ivi.ru
- **ivi:compilation**: ivi.ru compilations
- **ivideon**: Ivideon TV
- **IVXPlayer**
- **iwara**: [_iwara_](## 'netrc machine')
- **iwara:playlist**: [_iwara_](## 'netrc machine')
- **iwara:user**: [_iwara_](## 'netrc machine')
- **Ixigua**
- **Izlesene**
- **Jamendo**
- **JamendoAlbum**
- **JeuxVideo**: (**Currently broken**)
- **jiocinema**: [_jiocinema_](## 'netrc machine')
- **jiocinema:series**: [_jiocinema_](## 'netrc machine')
- **jiosaavn:album**
- **jiosaavn:playlist**
- **jiosaavn:song**
- **Joj**
- **JoqrAg**: 超!A&G+ 文化放送 (f.k.a. AGQR) Nippon Cultural Broadcasting, Inc. (JOQR)
- **Jove**
- **JStream**
- **JTBC**: jtbc.co.kr
- **JTBC:program**
- **JWPlatform**
- **Kakao**
- **Kaltura**
- **KankaNews**: (**Currently broken**)
- **Karaoketv**
- **Katsomo**: (**Currently broken**)
- **KelbyOne**: (**Currently broken**)
- **Kenh14Playlist**
- **Kenh14Video**
- **Ketnet**
- **khanacademy**
- **khanacademy:unit**
- **kick:clips**
- **kick:live**
- **kick:vod**
- **Kicker**
- **KickStarter**
- **Kika**: KiKA.de
- **kinja:embed**
- **KinoPoisk**
- **Kommunetv**
- **KompasVideo**
- **Koo**: (**Currently broken**)
- **KrasView**: Красвью (**Currently broken**)
- **KTH**
- **Ku6**
- **KukuluLive**
- **kuwo:album**: 酷我音乐 - 专辑 (**Currently broken**)
- **kuwo:category**: 酷我音乐 - 分类 (**Currently broken**)
- **kuwo:chart**: 酷我音乐 - 排行榜 (**Currently broken**)
- **kuwo:mv**: 酷我音乐 - MV (**Currently broken**)
- **kuwo:singer**: 酷我音乐 - 歌手 (**Currently broken**)
- **kuwo:song**: 酷我音乐 (**Currently broken**)
- **la7.it**
- **la7.it:pod:episode**
- **la7.it:podcast**
- **laracasts**
- **laracasts:series**
- **LastFM**
- **LastFMPlaylist**
- **LastFMUser**
- **LaXarxaMes**: [_laxarxames_](## 'netrc machine')
- **lbry**: odysee.com
- **lbry:channel**: odysee.com channels
- **lbry:playlist**: odysee.com playlists
- **LCI**
- **Lcp**
- **LcpPlay**
- **Le**: 乐视网
- **LearningOnScreen**
- **Lecture2Go**: (**Currently broken**)
- **Lecturio**: [_lecturio_](## 'netrc machine')
- **LecturioCourse**: [_lecturio_](## 'netrc machine')
- **LecturioDeCourse**: [_lecturio_](## 'netrc machine')
- **LeFigaroVideoEmbed**
- **LeFigaroVideoSection**
- **LEGO**
- **Lemonde**
- **Lenta**: (**Currently broken**)
- **LePlaylist**
- **LetvCloud**: 乐视云
- **Libsyn**
- **life**: Life.ru
- **life:embed**
- **likee**
- **likee:user**
- **limelight**
- **limelight:channel**
- **limelight:channel_list**
- **LinkedIn**: [_linkedin_](## 'netrc machine')
- **linkedin:learning**: [_linkedin_](## 'netrc machine')
- **linkedin:​learning:course**: [_linkedin_](## 'netrc machine')
- **Liputan6**
- **ListenNotes**
- **LiTV**
- **LiveJournal**
- **livestream**
- **livestream:original**
- **Livestreamfails**
- **Lnk**
- **loc**: Library of Congress
- **loom**
- **loom:folder**
- **LoveHomePorn**
- **LRTStream**
- **LRTVOD**
- **LSMLREmbed**
- **LSMLTVEmbed**
- **LSMReplay**
- **Lumni**
- **lynda**: [_lynda_](## 'netrc machine') lynda.com videos
- **lynda:course**: [_lynda_](## 'netrc machine') lynda.com online courses
- **maariv.co.il**
- **MagellanTV**
- **MagentaMusik**
- **mailru**: Видео@Mail.Ru
- **mailru:music**: Музыка@Mail.Ru
- **mailru:​music:search**: Музыка@Mail.Ru
- **MainStreaming**: MainStreaming Player
- **mangomolo:live**
- **mangomolo:video**
- **MangoTV**: 芒果TV
- **ManotoTV**: Manoto TV (Episode)
- **ManotoTVLive**: Manoto TV (Live)
- **ManotoTVShow**: Manoto TV (Show)
- **ManyVids**: (**Currently broken**)
- **MaoriTV**
- **Markiza**: (**Currently broken**)
- **MarkizaPage**: (**Currently broken**)
- **massengeschmack.tv**
- **Masters**
- **MatchTV**
- **MBN**: mbn.co.kr (매일방송)
- **MDR**: MDR.DE
- **MedalTV**
- **media.ccc.de**
- **media.ccc.de:lists**
- **Mediaite**
- **MediaKlikk**
- **Medialaan**
- **Mediaset**
- **MediasetShow**
- **Mediasite**
- **MediasiteCatalog**
- **MediasiteNamedCatalog**
- **MediaStream**
- **MediaWorksNZVOD**
- **Medici**
- **megaphone.fm**: megaphone.fm embedded players
- **megatvcom**: megatv.com videos
- **megatvcom:embed**: megatv.com embedded videos
- **Meipai**: 美拍
- **MelonVOD**
- **Metacritic**
- **mewatch**
- **MicrosoftBuild**
- **MicrosoftEmbed**
- **MicrosoftLearnEpisode**
- **MicrosoftLearnPlaylist**
- **MicrosoftLearnSession**
- **MicrosoftMedius**
- **microsoftstream**: Microsoft Stream
- **minds**
- **minds:channel**
- **minds:group**
- **Minoto**
- **mirrativ**
- **mirrativ:user**
- **MirrorCoUK**
- **MiTele**: mitele.es
- **mixch**
- **mixch:archive**
- **mixch:movie**
- **mixcloud**
- **mixcloud:playlist**
- **mixcloud:user**
- **MLB**
- **MLBArticle**
- **MLBTV**: [_mlb_](## 'netrc machine')
- **MLBVideo**
- **MLSSoccer**
- **MNetTV**: [_mnettv_](## 'netrc machine')
- **MNetTVLive**: [_mnettv_](## 'netrc machine')
- **MNetTVRecordings**: [_mnettv_](## 'netrc machine')
- **MochaVideo**
- **Mojevideo**: mojevideo.sk
- **Mojvideo**
- **Monstercat**
- **MonsterSirenHypergryphMusic**
- **Motherless**
- **MotherlessGallery**
- **MotherlessGroup**
- **MotherlessUploader**
- **Motorsport**: motorsport.com (**Currently broken**)
- **MovieFap**
- **Moviepilot**
- **MoviewPlay**
- **Moviezine**
- **MovingImage**
- **MSN**: (**Currently broken**)
- **mtg**: MTG services
- **mtv**
- **mtv.de**: (**Currently broken**)
- **mtv.it**
- **mtv.it:programma**
- **mtv:video**
- **mtvjapan**
- **mtvservices:embedded**
- **MTVUutisetArticle**: (**Currently broken**)
- **MuenchenTV**: münchen.tv (**Currently broken**)
- **MujRozhlas**
- **Murrtube**
- **MurrtubeUser**: Murrtube user profile (**Currently broken**)
- **MuseAI**
- **MuseScore**
- **MusicdexAlbum**
- **MusicdexArtist**
- **MusicdexPlaylist**
- **MusicdexSong**
- **Mx3**
- **Mx3Neo**
- **Mx3Volksmusik**
- **Mxplayer**
- **MxplayerShow**
- **MySpace**
- **MySpace:album**
- **MySpass**
- **MyVideoGe**
- **MyVidster**
- **Mzaalo**
- **n-tv.de**
- **N1Info:article**
- **N1InfoAsset**
- **Nate**
- **NateProgram**
- **natgeo:video**
- **NationalGeographicTV**
- **Naver**
- **Naver:live**
- **navernow**
- **nba**
- **nba:channel**
- **nba:embed**
- **nba:watch**
- **nba:​watch:collection**
- **nba:​watch:embed**
- **NBC**
- **NBCNews**
- **nbcolympics**
- **nbcolympics:stream**
- **NBCSports**
- **NBCSportsStream**
- **NBCSportsVPlayer**
- **NBCStations**
- **ndr**: NDR.de - Norddeutscher Rundfunk
- **ndr:embed**
- **ndr:​embed:base**
- **NDTV**: (**Currently broken**)
- **nebula:channel**: [_watchnebula_](## 'netrc machine')
- **nebula:media**: [_watchnebula_](## 'netrc machine')
- **nebula:subscriptions**: [_watchnebula_](## 'netrc machine')
- **nebula:video**: [_watchnebula_](## 'netrc machine')
- **NekoHacker**
- **NerdCubedFeed**
- **netease:album**: 网易云音乐 - 专辑
- **netease:djradio**: 网易云音乐 - 电台
- **netease:mv**: 网易云音乐 - MV
- **netease:playlist**: 网易云音乐 - 歌单
- **netease:program**: 网易云音乐 - 电台节目
- **netease:singer**: 网易云音乐 - 歌手
- **netease:song**: 网易云音乐
- **NetPlusTV**: [_netplus_](## 'netrc machine')
- **NetPlusTVLive**: [_netplus_](## 'netrc machine')
- **NetPlusTVRecordings**: [_netplus_](## 'netrc machine')
- **Netverse**
- **NetversePlaylist**
- **NetverseSearch**: "netsearch:" prefix
- **Netzkino**: (**Currently broken**)
- **Newgrounds**: [_newgrounds_](## 'netrc machine')
- **Newgrounds:playlist**
- **Newgrounds:user**
- **NewsPicks**
- **Newsy**
- **NextMedia**: 蘋果日報
- **NextMediaActionNews**: 蘋果日報 - 動新聞
- **NextTV**: 壹電視 (**Currently broken**)
- **Nexx**
- **NexxEmbed**
- **nfb**: nfb.ca and onf.ca films and episodes
- **nfb:series**: nfb.ca and onf.ca series
- **NFHSNetwork**
- **nfl.com**
- **nfl.com:article**
- **nfl.com:​plus:episode**
- **nfl.com:​plus:replay**
- **NhkForSchoolBangumi**
- **NhkForSchoolProgramList**
- **NhkForSchoolSubject**: Portal page for each school subjects, like Japanese (kokugo, 国語) or math (sansuu/suugaku or 算数・数学)
- **NhkRadioNewsPage**
- **NhkRadiru**: NHK らじる (Radiru/Rajiru)
- **NhkRadiruLive**
- **NhkVod**
- **NhkVodProgram**
- **nhl.com**
- **nick.com**
- **nick.de**
- **nickelodeon:br**
- **nickelodeonru**
- **niconico**: [_niconico_](## 'netrc machine') ニコニコ動画
- **niconico:history**: NicoNico user history or likes. Requires cookies.
- **niconico:live**: ニコニコ生放送
- **niconico:playlist**
- **niconico:series**
- **niconico:tag**: NicoNico video tag URLs
- **NiconicoChannelPlus**: ニコニコチャンネルプラス
- **NiconicoChannelPlus:​channel:lives**: ニコニコチャンネルプラス - チャンネル - ライブリスト. nicochannel.jp/channel/lives
- **NiconicoChannelPlus:​channel:videos**: ニコニコチャンネルプラス - チャンネル - 動画リスト. nicochannel.jp/channel/videos
- **NiconicoUser**
- **nicovideo:search**: Nico video search; "nicosearch:" prefix
- **nicovideo:​search:date**: Nico video search, newest first; "nicosearchdate:" prefix
- **nicovideo:search_url**: Nico video search URLs
- **NinaProtocol**
- **Nintendo**
- **Nitter**
- **njoy**: N-JOY
- **njoy:embed**
- **NobelPrize**: (**Currently broken**)
- **NoicePodcast**
- **NonkTube**
- **NoodleMagazine**
- **Noovo**
- **NOSNLArticle**
- **Nova**: TN.cz, Prásk.tv, Nova.cz, Novaplus.cz, FANDA.tv, Krásná.cz and Doma.cz
- **NovaEmbed**
- **NovaPlay**
- **nowness**
- **nowness:playlist**
- **nowness:series**
- **Noz**: (**Currently broken**)
- **npo**: npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl
- **npo.nl:live**
- **npo.nl:radio**
- **npo.nl:​radio:fragment**
- **Npr**
- **NRK**
- **NRKPlaylist**
- **NRKRadioPodkast**
- **NRKSkole**: NRK Skole
- **NRKTV**: NRK TV and NRK Radio
- **NRKTVDirekte**: NRK TV Direkte and NRK Radio Direkte
- **NRKTVEpisode**
- **NRKTVEpisodes**
- **NRKTVSeason**
- **NRKTVSeries**
- **NRLTV**: (**Currently broken**)
- **nts.live**
- **ntv.ru**
- **NubilesPorn**: [_nubiles-porn_](## 'netrc machine')
- **nuum:live**
- **nuum:media**
- **nuum:tab**
- **Nuvid**
- **NYTimes**
- **NYTimesArticle**
- **NYTimesCookingGuide**
- **NYTimesCookingRecipe**
- **nzherald**
- **NZOnScreen**
- **NZZ**
- **ocw.mit.edu**
- **Odnoklassniki**
- **OfTV**
- **OfTVPlaylist**
- **OktoberfestTV**
- **OlympicsReplay**
- **on24**: ON24
- **OnDemandChinaEpisode**
- **OnDemandKorea**
- **OnDemandKoreaProgram**
- **OneFootball**
- **OnePlacePodcast**
- **onet.pl**
- **onet.tv**
- **onet.tv:channel**
- **OnetMVP**
- **OnionStudios**
- **Opencast**
- **OpencastPlaylist**
- **openrec**
- **openrec:capture**
- **openrec:movie**
- **OraTV**
- **orf:​fm4:story**: fm4.orf.at stories
- **orf:iptv**: iptv.ORF.at
- **orf:on**
- **orf:podcast**
- **orf:radio**
- **OsnatelTV**: [_osnateltv_](## 'netrc machine')
- **OsnatelTVLive**: [_osnateltv_](## 'netrc machine')
- **OsnatelTVRecordings**: [_osnateltv_](## 'netrc machine')
- **OutsideTV**
- **OwnCloud**
- **PacktPub**: [_packtpub_](## 'netrc machine')
- **PacktPubCourse**
- **PalcoMP3:artist**
- **PalcoMP3:song**
- **PalcoMP3:video**
- **Panopto**
- **PanoptoList**
- **PanoptoPlaylist**
- **ParamountNetwork**
- **ParamountPlus**
- **ParamountPlusSeries**
- **ParamountPressExpress**
- **Parler**: Posts on parler.com
- **parliamentlive.tv**: UK parliament videos
- **Parlview**: (**Currently broken**)
- **patreon**
- **patreon:campaign**
- **pbs**: Public Broadcasting Service (PBS) and member stations: PBS: Public Broadcasting Service, APT - Alabama Public Television (WBIQ), GPB/Georgia Public Broadcasting (WGTV), Mississippi Public Broadcasting (WMPN), Nashville Public Television (WNPT), WFSU-TV (WFSU), WSRE (WSRE), WTCI (WTCI), WPBA/Channel 30 (WPBA), Alaska Public Media (KAKM), Arizona PBS (KAET), KNME-TV/Channel 5 (KNME), Vegas PBS (KLVX), AETN/ARKANSAS ETV NETWORK (KETS), KET (WKLE), WKNO/Channel 10 (WKNO), LPB/LOUISIANA PUBLIC BROADCASTING (WLPB), OETA (KETA), Ozarks Public Television (KOZK), WSIU Public Broadcasting (WSIU), KEET TV (KEET), KIXE/Channel 9 (KIXE), KPBS San Diego (KPBS), KQED (KQED), KVIE Public Television (KVIE), PBS SoCal/KOCE (KOCE), ValleyPBS (KVPT), CONNECTICUT PUBLIC TELEVISION (WEDH), KNPB Channel 5 (KNPB), SOPTV (KSYS), Rocky Mountain PBS (KRMA), KENW-TV3 (KENW), KUED Channel 7 (KUED), Wyoming PBS (KCWC), Colorado Public Television / KBDI 12 (KBDI), KBYU-TV (KBYU), Thirteen/WNET New York (WNET), WGBH/Channel 2 (WGBH), WGBY (WGBY), NJTV Public Media NJ (WNJT), WLIW21 (WLIW), mpt/Maryland Public Television (WMPB), WETA Television and Radio (WETA), WHYY (WHYY), PBS 39 (WLVT), WVPT - Your Source for PBS and More! (WVPT), Howard University Television (WHUT), WEDU PBS (WEDU), WGCU Public Media (WGCU), WPBT2 (WPBT), WUCF TV (WUCF), WUFT/Channel 5 (WUFT), WXEL/Channel 42 (WXEL), WLRN/Channel 17 (WLRN), WUSF Public Broadcasting (WUSF), ETV (WRLK), UNC-TV (WUNC), PBS Hawaii - Oceanic Cable Channel 10 (KHET), Idaho Public Television (KAID), KSPS (KSPS), OPB (KOPB), KWSU/Channel 10 & KTNW/Channel 31 (KWSU), WILL-TV (WILL), Network Knowledge - WSEC/Springfield (WSEC), WTTW11 (WTTW), Iowa Public Television/IPTV (KDIN), Nine Network (KETC), PBS39 Fort Wayne (WFWA), WFYI Indianapolis (WFYI), Milwaukee Public Television (WMVS), WNIN (WNIN), WNIT Public Television (WNIT), WPT (WPNE), WVUT/Channel 22 (WVUT), WEIU/Channel 51 (WEIU), WQPT-TV (WQPT), WYCC PBS Chicago (WYCC), WIPB-TV (WIPB), WTIU (WTIU), CET (WCET), ThinkTVNetwork (WPTD), WBGU-TV (WBGU), WGVU TV (WGVU), NET1 (KUON), Pioneer Public Television (KWCM), SDPB Television (KUSD), TPT (KTCA), KSMQ (KSMQ), KPTS/Channel 8 (KPTS), KTWU/Channel 11 (KTWU), East Tennessee PBS (WSJK), WCTE-TV (WCTE), WLJT, Channel 11 (WLJT), WOSU TV (WOSU), WOUB/WOUC (WOUB), WVPB (WVPB), WKYU-PBS (WKYU), KERA 13 (KERA), MPBN (WCBB), Mountain Lake PBS (WCFE), NHPTV (WENH), Vermont PBS (WETK), witf (WITF), WQED Multimedia (WQED), WMHT Educational Telecommunications (WMHT), Q-TV (WDCQ), WTVS Detroit Public TV (WTVS), CMU Public Television (WCMU), WKAR-TV (WKAR), WNMU-TV Public TV 13 (WNMU), WDSE - WRPT (WDSE), WGTE TV (WGTE), Lakeland Public Television (KAWE), KMOS-TV - Channels 6.1, 6.2 and 6.3 (KMOS), MontanaPBS (KUSM), KRWG/Channel 22 (KRWG), KACV (KACV), KCOS/Channel 13 (KCOS), WCNY/Channel 24 (WCNY), WNED (WNED), WPBS (WPBS), WSKG Public TV (WSKG), WXXI (WXXI), WPSU (WPSU), WVIA Public Media Studios (WVIA), WTVI (WTVI), Western Reserve PBS (WNEO), WVIZ/PBS ideastream (WVIZ), KCTS 9 (KCTS), Basin PBS (KPBT), KUHT / Channel 8 (KUHT), KLRN (KLRN), KLRU (KLRU), WTJX Channel 12 (WTJX), WCVE PBS (WCVE), KBTC Public Television (KBTC)
- **PBSKids**
- **PearVideo**
- **PeekVids**
- **peer.tv**
- **PeerTube**
- **PeerTube:Playlist**
- **peloton**: [_peloton_](## 'netrc machine')
- **peloton:live**: Peloton Live
- **PerformGroup**
- **periscope**: Periscope
- **periscope:user**: Periscope user videos
- **PGATour**
- **PhilharmonieDeParis**: Philharmonie de Paris
- **phoenix.de**
- **Photobucket**
- **PiaLive**
- **Piapro**: [_piapro_](## 'netrc machine')
- **Picarto**
- **PicartoVod**
- **Piksel**
- **Pinkbike**
- **Pinterest**
- **PinterestCollection**
- **pixiv:sketch**
- **pixiv:​sketch:user**
- **Pladform**
- **PlanetMarathi**
- **Platzi**: [_platzi_](## 'netrc machine')
- **PlatziCourse**: [_platzi_](## 'netrc machine')
- **player.sky.it**
- **playeur**
- **PlayPlusTV**: [_playplustv_](## 'netrc machine')
- **PlaySuisse**: [_playsuisse_](## 'netrc machine')
- **Playtvak**: Playtvak.cz, iDNES.cz and Lidovky.cz
- **PlayVids**
- **Playwire**
- **pluralsight**: [_pluralsight_](## 'netrc machine')
- **pluralsight:course**
- **PlutoTV**: (**Currently broken**)
- **PodbayFM**
- **PodbayFMChannel**
- **Podchaser**
- **podomatic**: (**Currently broken**)
- **PokerGo**: [_pokergo_](## 'netrc machine')
- **PokerGoCollection**: [_pokergo_](## 'netrc machine')
- **PolsatGo**
- **PolskieRadio**
- **polskieradio:audition**
- **polskieradio:category**
- **polskieradio:legacy**
- **polskieradio:player**
- **polskieradio:podcast**
- **polskieradio:​podcast:list**
- **Popcorntimes**
- **PopcornTV**
- **Pornbox**
- **PornerBros**
- **PornFlip**
- **PornHub**: [_pornhub_](## 'netrc machine') PornHub and Thumbzilla
- **PornHubPagedVideoList**: [_pornhub_](## 'netrc machine')
- **PornHubPlaylist**: [_pornhub_](## 'netrc machine')
- **PornHubUser**: [_pornhub_](## 'netrc machine')
- **PornHubUserVideosUpload**: [_pornhub_](## 'netrc machine')
- **Pornotube**
- **PornoVoisines**: (**Currently broken**)
- **PornoXO**: (**Currently broken**)
- **PornTop**
- **PornTube**
- **Pr0gramm**
- **PrankCast**
- **PrankCastPost**
- **PremiershipRugby**
- **PressTV**
- **ProjectVeritas**: (**Currently broken**)
- **prosiebensat1**: ProSiebenSat.1 Digital
- **PRXAccount**
- **PRXSeries**
- **prxseries:search**: PRX Series Search; "prxseries:" prefix
- **prxstories:search**: PRX Stories Search; "prxstories:" prefix
- **PRXStory**
- **puhutv**
- **puhutv:serie**
- **Puls4**
- **Pyvideo**
- **QDance**: [_qdance_](## 'netrc machine')
- **QingTing**
- **qqmusic**: QQ音乐
- **qqmusic:album**: QQ音乐 - 专辑
- **qqmusic:mv**: QQ音乐 - MV
- **qqmusic:playlist**: QQ音乐 - 歌单
- **qqmusic:singer**: QQ音乐 - 歌手
- **qqmusic:toplist**: QQ音乐 - 排行榜
- **QuantumTV**: [_quantumtv_](## 'netrc machine')
- **QuantumTVLive**: [_quantumtv_](## 'netrc machine')
- **QuantumTVRecordings**: [_quantumtv_](## 'netrc machine')
- **R7**: (**Currently broken**)
- **R7Article**: (**Currently broken**)
- **Radiko**
- **RadikoRadio**
- **radio.de**: (**Currently broken**)
- **Radio1Be**
- **radiocanada**
- **radiocanada:audiovideo**
- **RadioComercial**
- **RadioComercialPlaylist**
- **radiofrance**
- **RadioFranceLive**
- **RadioFrancePodcast**
- **RadioFranceProfile**
- **RadioFranceProgramSchedule**
- **RadioJavan**: (**Currently broken**)
- **radiokapital**
- **radiokapital:show**
- **RadioRadicale**
- **RadioZetPodcast**
- **radlive**
- **radlive:channel**
- **radlive:season**
- **Rai**
- **RaiCultura**
- **RaiNews**
- **RaiPlay**
- **RaiPlayLive**
- **RaiPlayPlaylist**
- **RaiPlaySound**
- **RaiPlaySoundLive**
- **RaiPlaySoundPlaylist**
- **RaiSudtirol**
- **RayWenderlich**
- **RayWenderlichCourse**
- **RbgTum**
- **RbgTumCourse**
- **RbgTumNewCourse**
- **RCS**
- **RCSEmbeds**
- **RCSVarious**
- **RCTIPlus**
- **RCTIPlusSeries**
- **RCTIPlusTV**
- **RDS**: RDS.ca (**Currently broken**)
- **RedBull**
- **RedBullEmbed**
- **RedBullTV**
- **RedBullTVRrnContent**
- **redcdnlivx**
- **Reddit**: [_reddit_](## 'netrc machine')
- **RedGifs**
- **RedGifsSearch**: Redgifs search
- **RedGifsUser**: Redgifs user
- **RedTube**
- **RENTV**: (**Currently broken**)
- **RENTVArticle**: (**Currently broken**)
- **Restudy**: (**Currently broken**)
- **Reuters**: (**Currently broken**)
- **ReverbNation**
- **RheinMainTV**
- **RideHome**
- **RinseFM**
- **RinseFMArtistPlaylist**
- **RMCDecouverte**
- **RockstarGames**: (**Currently broken**)
- **Rokfin**: [_rokfin_](## 'netrc machine')
- **rokfin:channel**: Rokfin Channels
- **rokfin:search**: Rokfin Search; "rkfnsearch:" prefix
- **rokfin:stack**: Rokfin Stacks
- **RoosterTeeth**: [_roosterteeth_](## 'netrc machine')
- **RoosterTeethSeries**: [_roosterteeth_](## 'netrc machine')
- **RottenTomatoes**
- **Rozhlas**
- **RozhlasVltava**
- **RTBF**: [_rtbf_](## 'netrc machine') (**Currently broken**)
- **RTDocumentry**
- **RTDocumentryPlaylist**
- **rte**: Raidió Teilifís Éireann TV
- **rte:radio**: Raidió Teilifís Éireann radio
- **rtl.lu:article**
- **rtl.lu:tele-vod**
- **rtl.nl**: rtl.nl and rtlxl.nl
- **rtl2**
- **RTLLuLive**
- **RTLLuRadio**
- **RTNews**
- **RTP**
- **RTRFM**
- **RTS**: RTS.ch (**Currently broken**)
- **RTVCKaltura**
- **RTVCPlay**
- **RTVCPlayEmbed**
- **rtve.es:alacarta**: RTVE a la carta
- **rtve.es:audio**: RTVE audio
- **rtve.es:infantil**: RTVE infantil
- **rtve.es:live**: RTVE.es live streams
- **rtve.es:television**
- **RTVS**
- **rtvslo.si**
- **rtvslo.si:show**
- **RudoVideo**
- **Rule34Video**
- **Rumble**
- **RumbleChannel**
- **RumbleEmbed**
- **Ruptly**
- **rutube**: Rutube videos
- **rutube:channel**: Rutube channel
- **rutube:embed**: Rutube embedded videos
- **rutube:movie**: Rutube movies
- **rutube:person**: Rutube person videos
- **rutube:playlist**: Rutube playlists
- **rutube:tags**: Rutube tags
- **RUTV**: RUTV.RU
- **Ruutu**
- **Ruv**
- **ruv.is:spila**
- **S4C**
- **S4CSeries**
- **safari**: [_safari_](## 'netrc machine') safaribooksonline.com online video
- **safari:api**: [_safari_](## 'netrc machine')
- **safari:course**: [_safari_](## 'netrc machine') safaribooksonline.com online courses
- **Saitosan**: (**Currently broken**)
- **SAKTV**: [_saktv_](## 'netrc machine')
- **SAKTVLive**: [_saktv_](## 'netrc machine')
- **SAKTVRecordings**: [_saktv_](## 'netrc machine')
- **SaltTV**: [_salttv_](## 'netrc machine')
- **SaltTVLive**: [_salttv_](## 'netrc machine')
- **SaltTVRecordings**: [_salttv_](## 'netrc machine')
- **SampleFocus**
- **Sangiin**: 参議院インターネット審議中継 (archive)
- **Sapo**: SAPO Vídeos
- **SBS**: sbs.com.au
- **sbs.co.kr**
- **sbs.co.kr:allvod_program**
- **sbs.co.kr:programs_vod**
- **schooltv**
- **ScienceChannel**
- **screen.yahoo:search**: Yahoo screen search; "yvsearch:" prefix
- **Screen9**
- **Screencast**
- **Screencastify**
- **ScreencastOMatic**
- **ScreenRec**
- **ScrippsNetworks**
- **scrippsnetworks:watch**
- **Scrolller**
- **SCTE**: [_scte_](## 'netrc machine') (**Currently broken**)
- **SCTECourse**: [_scte_](## 'netrc machine') (**Currently broken**)
- **sejm**
- **Sen**
- **SenalColombiaLive**: (**Currently broken**)
- **SenateGov**
- **SenateISVP**
- **SendtoNews**: (**Currently broken**)
- **Servus**
- **Sexu**: (**Currently broken**)
- **SeznamZpravy**
- **SeznamZpravyArticle**
- **Shahid**: [_shahid_](## 'netrc machine')
- **ShahidShow**
- **SharePoint**
- **ShareVideosEmbed**
- **ShemarooMe**
- **ShowRoomLive**
- **ShugiinItvLive**: 衆議院インターネット審議中継
- **ShugiinItvLiveRoom**: 衆議院インターネット審議中継 (中継)
- **ShugiinItvVod**: 衆議院インターネット審議中継 (ビデオライブラリ)
- **SibnetEmbed**
- **simplecast**
- **simplecast:episode**
- **simplecast:podcast**
- **Sina**
- **Skeb**
- **sky.it**
- **sky:news**
- **sky:​news:story**
- **sky:sports**
- **sky:​sports:news**
- **SkylineWebcams**: (**Currently broken**)
- **skynewsarabia:article**: (**Currently broken**)
- **skynewsarabia:video**: (**Currently broken**)
- **SkyNewsAU**
- **Slideshare**
- **SlidesLive**
- **Slutload**
- **Smotrim**
- **SnapchatSpotlight**
- **Snotr**
- **Sohu**
- **SohuV**
- **SonyLIV**: [_sonyliv_](## 'netrc machine')
- **SonyLIVSeries**
- **soop**: [_afreecatv_](## 'netrc machine') sooplive.co.kr
- **soop:catchstory**: [_afreecatv_](## 'netrc machine') sooplive.co.kr catch story
- **soop:live**: [_afreecatv_](## 'netrc machine') sooplive.co.kr livestreams
- **soop:user**: [_afreecatv_](## 'netrc machine')
- **soundcloud**: [_soundcloud_](## 'netrc machine')
- **soundcloud:playlist**: [_soundcloud_](## 'netrc machine')
- **soundcloud:related**: [_soundcloud_](## 'netrc machine')
- **soundcloud:search**: [_soundcloud_](## 'netrc machine') Soundcloud search; "scsearch:" prefix
- **soundcloud:set**: [_soundcloud_](## 'netrc machine')
- **soundcloud:trackstation**: [_soundcloud_](## 'netrc machine')
- **soundcloud:user**: [_soundcloud_](## 'netrc machine')
- **soundcloud:​user:permalink**: [_soundcloud_](## 'netrc machine')
- **SoundcloudEmbed**
- **soundgasm**
- **soundgasm:profile**
- **southpark.cc.com**
- **southpark.cc.com:español**
- **southpark.de**
- **southpark.lat**
- **southpark.nl**
- **southparkstudios.dk**
- **SovietsCloset**
- **SovietsClosetPlaylist**
- **SpankBang**
- **SpankBangPlaylist**
- **Spiegel**
- **Sport5**
- **SportBox**
- **SportDeutschland**
- **spotify**: Spotify episodes (**Currently broken**)
- **spotify:show**: Spotify shows (**Currently broken**)
- **Spreaker**
- **SpreakerShow**
- **SpringboardPlatform**
- **Sprout**
- **SproutVideo**
- **sr:mediathek**: Saarländischer Rundfunk (**Currently broken**)
- **SRGSSR**
- **SRGSSRPlay**: srf.ch, rts.ch, rsi.ch, rtr.ch and swissinfo.ch play sites
- **StacommuLive**: [_stacommu_](## 'netrc machine')
- **StacommuVOD**: [_stacommu_](## 'netrc machine')
- **StagePlusVODConcert**: [_stageplus_](## 'netrc machine')
- **stanfordoc**: Stanford Open ClassRoom
- **StarTrek**: (**Currently broken**)
- **startv**
- **Steam**
- **SteamCommunityBroadcast**
- **Stitcher**
- **StitcherShow**
- **StoryFire**
- **StoryFireSeries**
- **StoryFireUser**
- **Streamable**
- **StreamCZ**
- **StreetVoice**
- **StretchInternet**
- **Stripchat**
- **stv:player**
- **Substack**
- **SunPorno**
- **sverigesradio:episode**
- **sverigesradio:publication**
- **SVT**
- **SVTPage**
- **SVTPlay**: SVT Play and Öppet arkiv
- **SVTSeries**
- **SwearnetEpisode**
- **Syfy**: (**Currently broken**)
- **SYVDK**
- **SztvHu**
- **t-online.de**: (**Currently broken**)
- **Tagesschau**: (**Currently broken**)
- **TapTapApp**
- **TapTapAppIntl**
- **TapTapMoment**
- **TapTapPostIntl**
- **Tass**: (**Currently broken**)
- **TBS**
- **TBSJPEpisode**
- **TBSJPPlaylist**
- **TBSJPProgram**
- **Teachable**: [_teachable_](## 'netrc machine') (**Currently broken**)
- **TeachableCourse**: [_teachable_](## 'netrc machine')
- **teachertube**: teachertube.com videos (**Currently broken**)
- **teachertube:​user:collection**: teachertube.com user and collection videos (**Currently broken**)
- **TeachingChannel**: (**Currently broken**)
- **Teamcoco**
- **TeamTreeHouse**: [_teamtreehouse_](## 'netrc machine')
- **techtv.mit.edu**
- **TedEmbed**
- **TedPlaylist**
- **TedSeries**
- **TedTalk**
- **Tele13**
- **Tele5**
- **TeleBruxelles**
- **TelecaribePlay**
- **Telecinco**: telecinco.es, cuatro.com and mediaset.es
- **Telegraaf**
- **telegram:embed**
- **TeleMB**: (**Currently broken**)
- **Telemundo**: (**Currently broken**)
- **TeleQuebec**
- **TeleQuebecEmission**
- **TeleQuebecLive**
- **TeleQuebecSquat**
- **TeleQuebecVideo**
- **TeleTask**: (**Currently broken**)
- **Telewebion**: (**Currently broken**)
- **Tempo**
- **TennisTV**: [_tennistv_](## 'netrc machine')
- **TenPlay**: [_10play_](## 'netrc machine')
- **TenPlaySeason**
- **TF1**
- **TFO**
- **theatercomplextown:ppv**: [_theatercomplextown_](## 'netrc machine')
- **theatercomplextown:vod**: [_theatercomplextown_](## 'netrc machine')
- **TheGuardianPodcast**
- **TheGuardianPodcastPlaylist**
- **TheHoleTv**
- **TheIntercept**
- **ThePlatform**
- **ThePlatformFeed**
- **TheStar**
- **TheSun**
- **TheWeatherChannel**
- **ThisAmericanLife**
- **ThisOldHouse**: [_thisoldhouse_](## 'netrc machine')
- **ThisVid**
- **ThisVidMember**
- **ThisVidPlaylist**
- **ThreeSpeak**
- **ThreeSpeakUser**
- **TikTok**
- **tiktok:collection**
- **tiktok:effect**: (**Currently broken**)
- **tiktok:live**
- **tiktok:sound**: (**Currently broken**)
- **tiktok:tag**: (**Currently broken**)
- **tiktok:user**
- **TLC**
- **TMZ**
- **TNAFlix**
- **TNAFlixNetworkEmbed**
- **toggle**
- **toggo**
- **tokfm:audition**
- **tokfm:podcast**
- **ToonGoggles**
- **tou.tv**: [_toutv_](## 'netrc machine')
- **Toypics**: Toypics video (**Currently broken**)
- **ToypicsUser**: Toypics user profile (**Currently broken**)
- **TrailerAddict**: (**Currently broken**)
- **TravelChannel**
- **Triller**: [_triller_](## 'netrc machine')
- **TrillerShort**
- **TrillerUser**: [_triller_](## 'netrc machine')
- **Trovo**
- **TrovoChannelClip**: All Clips of a trovo.live channel; "trovoclip:" prefix
- **TrovoChannelVod**: All VODs of a trovo.live channel; "trovovod:" prefix
- **TrovoVod**
- **TrtCocukVideo**
- **TrtWorld**
- **TrueID**
- **TruNews**
- **Truth**
- **TruTV**
- **Tube8**: (**Currently broken**)
- **TubeTuGraz**: [_tubetugraz_](## 'netrc machine') tube.tugraz.at
- **TubeTuGrazSeries**: [_tubetugraz_](## 'netrc machine')
- **tubitv**: [_tubitv_](## 'netrc machine')
- **tubitv:series**
- **Tumblr**: [_tumblr_](## 'netrc machine')
- **TuneInPodcast**
- **TuneInPodcastEpisode**
- **TuneInStation**
- **tv.dfb.de**
- **TV2**
- **TV2Article**
- **TV2DK**
- **TV2DKBornholmPlay**
- **tv2play.hu**
- **tv2playseries.hu**
- **TV4**: tv4.se and tv4play.se
- **TV5MONDE**
- **tv5unis**
- **tv5unis:video**
- **tv8.it**
- **TVANouvelles**
- **TVANouvellesArticle**
- **tvaplus**: TVA+
- **TVC**
- **TVCArticle**
- **TVer**
- **tvigle**: Интернет-телевидение Tvigle.ru
- **TVIPlayer**
- **tvland.com**
- **TVN24**: (**Currently broken**)
- **TVNoe**: (**Currently broken**)
- **tvopengr:embed**: tvopen.gr embedded videos
- **tvopengr:watch**: tvopen.gr (and ethnos.gr) videos
- **tvp**: Telewizja Polska
- **tvp:embed**: Telewizja Polska
- **tvp:stream**
- **tvp:vod**
- **tvp:​vod:series**
- **TVPlayer**
- **TVPlayHome**
- **Tweakers**
- **TwitCasting**
- **TwitCastingLive**
- **TwitCastingUser**
- **twitch:clips**: [_twitch_](## 'netrc machine')
- **twitch:stream**: [_twitch_](## 'netrc machine')
- **twitch:vod**: [_twitch_](## 'netrc machine')
- **TwitchCollection**: [_twitch_](## 'netrc machine')
- **TwitchVideos**: [_twitch_](## 'netrc machine')
- **TwitchVideosClips**: [_twitch_](## 'netrc machine')
- **TwitchVideosCollections**: [_twitch_](## 'netrc machine')
- **twitter**: [_twitter_](## 'netrc machine')
- **twitter:amplify**: [_twitter_](## 'netrc machine')
- **twitter:broadcast**: [_twitter_](## 'netrc machine')
- **twitter:card**
- **twitter:shortener**: [_twitter_](## 'netrc machine')
- **twitter:spaces**: [_twitter_](## 'netrc machine')
- **Txxx**
- **udemy**: [_udemy_](## 'netrc machine')
- **udemy:course**: [_udemy_](## 'netrc machine')
- **UDNEmbed**: 聯合影音
- **UFCArabia**: [_ufcarabia_](## 'netrc machine')
- **UFCTV**: [_ufctv_](## 'netrc machine')
- **ukcolumn**: (**Currently broken**)
- **UKTVPlay**
- **UlizaPlayer**
- **UlizaPortal**: ulizaportal.jp
- **umg:de**: Universal Music Deutschland (**Currently broken**)
- **Unistra**
- **Unity**: (**Currently broken**)
- **uol.com.br**
- **uplynk**
- **uplynk:preplay**
- **Urort**: NRK P3 Urørt (**Currently broken**)
- **URPlay**
- **USANetwork**
- **USAToday**
- **ustream**
- **ustream:channel**
- **ustudio**
- **ustudio:embed**
- **Varzesh3**: (**Currently broken**)
- **Vbox7**
- **Veo**
- **Vesti**: Вести.Ru (**Currently broken**)
- **Vevo**
- **VevoPlaylist**
- **VGTV**: VGTV, BTTV, FTV, Aftenposten and Aftonbladet
- **vh1.com**
- **vhx:embed**: [_vimeo_](## 'netrc machine')
- **vice**
- **vice:article**
- **vice:show**
- **Viddler**
- **Videa**
- **video.arnes.si**: Arnes Video
- **video.google:search**: Google Video search; "gvsearch:" prefix
- **video.sky.it**
- **video.sky.it:live**
- **VideoDetective**
- **videofy.me**: (**Currently broken**)
- **VideoKen**
- **VideoKenCategory**
- **VideoKenPlayer**
- **VideoKenPlaylist**
- **VideoKenTopic**
- **videomore**
- **videomore:season**
- **videomore:video**
- **VideoPress**
- **Vidflex**
- **Vidio**: [_vidio_](## 'netrc machine')
- **VidioLive**: [_vidio_](## 'netrc machine')
- **VidioPremier**: [_vidio_](## 'netrc machine')
- **VidLii**
- **Vidly**
- **vids.io**
- **Vidyard**
- **viewlift**
- **viewlift:embed**
- **Viidea**
- **viki**: [_viki_](## 'netrc machine')
- **viki:channel**: [_viki_](## 'netrc machine')
- **vimeo**: [_vimeo_](## 'netrc machine')
- **vimeo:album**: [_vimeo_](## 'netrc machine')
- **vimeo:channel**: [_vimeo_](## 'netrc machine')
- **vimeo:group**: [_vimeo_](## 'netrc machine')
- **vimeo:likes**: [_vimeo_](## 'netrc machine') Vimeo user likes
- **vimeo:ondemand**: [_vimeo_](## 'netrc machine')
- **vimeo:pro**: [_vimeo_](## 'netrc machine')
- **vimeo:review**: [_vimeo_](## 'netrc machine') Review pages on vimeo
- **vimeo:user**: [_vimeo_](## 'netrc machine')
- **vimeo:watchlater**: [_vimeo_](## 'netrc machine') Vimeo watch later list, ":vimeowatchlater" keyword (requires authentication)
- **Vimm:recording**
- **Vimm:stream**
- **ViMP**
- **ViMP:Playlist**
- **Vine**
- **vine:user**
- **Viously**
- **Viqeo**: (**Currently broken**)
- **Viu**
- **viu:ott**: [_viu_](## 'netrc machine')
- **viu:playlist**
- **ViuOTTIndonesia**
- **vk**: [_vk_](## 'netrc machine') VK
- **vk:uservideos**: [_vk_](## 'netrc machine') VK - User's Videos
- **vk:wallpost**: [_vk_](## 'netrc machine')
- **VKPlay**
- **VKPlayLive**
- **vm.tiktok**
- **Vocaroo**
- **VODPl**
- **VODPlatform**
- **voicy**: (**Currently broken**)
- **voicy:channel**: (**Currently broken**)
- **VolejTV**
- **VoxMedia**
- **VoxMediaVolume**
- **vpro**: npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl
- **vqq:series**
- **vqq:video**
- **VRT**: VRT NWS, Flanders News, Flandern Info and Sporza
- **VrtNU**: [_vrtnu_](## 'netrc machine') VRT MAX
- **VTM**: (**Currently broken**)
- **VTV**
- **VTVGo**
- **VTXTV**: [_vtxtv_](## 'netrc machine')
- **VTXTVLive**: [_vtxtv_](## 'netrc machine')
- **VTXTVRecordings**: [_vtxtv_](## 'netrc machine')
- **VuClip**
- **VVVVID**
- **VVVVIDShow**
- **Walla**
- **WalyTV**: [_walytv_](## 'netrc machine')
- **WalyTVLive**: [_walytv_](## 'netrc machine')
- **WalyTVRecordings**: [_walytv_](## 'netrc machine')
- **washingtonpost**
- **washingtonpost:article**
- **wat.tv**
- **WatchESPN**
- **WDR**
- **wdr:mobile**: (**Currently broken**)
- **WDRElefant**
- **WDRPage**
- **web.archive:youtube**: web.archive.org saved youtube videos, "ytarchive:" prefix
- **Webcamerapl**
- **Webcaster**
- **WebcasterFeed**
- **WebOfStories**
- **WebOfStoriesPlaylist**
- **Weibo**
- **WeiboUser**
- **WeiboVideo**
- **WeiqiTV**: WQTV (**Currently broken**)
- **wetv:episode**
- **WeTvSeries**
- **Weverse**: [_weverse_](## 'netrc machine')
- **WeverseLive**: [_weverse_](## 'netrc machine')
- **WeverseLiveTab**: [_weverse_](## 'netrc machine')
- **WeverseMedia**: [_weverse_](## 'netrc machine')
- **WeverseMediaTab**: [_weverse_](## 'netrc machine')
- **WeverseMoment**: [_weverse_](## 'netrc machine')
- **WeVidi**
- **Weyyak**
- **whowatch**
- **Whyp**
- **wikimedia.org**
- **Wimbledon**
- **WimTV**
- **WinSportsVideo**
- **Wistia**
- **WistiaChannel**
- **WistiaPlaylist**
- **wnl**: npo.nl, ntr.nl, omroepwnl.nl, zapp.nl and npo3.nl
- **wordpress:mb.miniAudioPlayer**
- **wordpress:playlist**
- **WorldStarHipHop**
- **wppilot**
- **wppilot:channels**
- **WrestleUniversePPV**: [_wrestleuniverse_](## 'netrc machine')
- **WrestleUniverseVOD**: [_wrestleuniverse_](## 'netrc machine')
- **WSJ**: Wall Street Journal
- **WSJArticle**
- **WWE**
- **wyborcza:video**
- **WyborczaPodcast**
- **wykop:dig**
- **wykop:​dig:comment**
- **wykop:post**
- **wykop:​post:comment**
- **Xanimu**
- **XboxClips**
- **XHamster**
- **XHamsterEmbed**
- **XHamsterUser**
- **XiaoHongShu**: 小红书
- **ximalaya**: 喜马拉雅FM
- **ximalaya:album**: 喜马拉雅FM 专辑
- **Xinpianchang**: 新片场
- **XMinus**: (**Currently broken**)
- **XNXX**
- **Xstream**
- **XVideos**
- **xvideos:quickies**
- **XXXYMovies**
- **Yahoo**: Yahoo screen and movies
- **yahoo:japannews**: Yahoo! Japan News
- **YandexDisk**
- **yandexmusic:album**: Яндекс.Музыка - Альбом
- **yandexmusic:​artist:albums**: Яндекс.Музыка - Артист - Альбомы
- **yandexmusic:​artist:tracks**: Яндекс.Музыка - Артист - Треки
- **yandexmusic:playlist**: Яндекс.Музыка - Плейлист
- **yandexmusic:track**: Яндекс.Музыка - Трек
- **YandexVideo**
- **YandexVideoPreview**
- **YapFiles**: (**Currently broken**)
- **Yappy**: (**Currently broken**)
- **YappyProfile**
- **YleAreena**
- **YouJizz**
- **youku**: 优酷
- **youku:show**
- **YouNowChannel**
- **YouNowLive**
- **YouNowMoment**
- **YouPorn**
- **YouPornCategory**: YouPorn category, with sorting, filtering and pagination
- **YouPornChannel**: YouPorn channel, with sorting and pagination
- **YouPornCollection**: YouPorn collection (user playlist), with sorting and pagination
- **YouPornStar**: YouPorn Pornstar, with description, sorting and pagination
- **YouPornTag**: YouPorn tag (porntags), with sorting, filtering and pagination
- **YouPornVideos**: YouPorn video (browse) playlists, with sorting, filtering and pagination
- **youtube**: [_youtube_](## 'netrc machine') YouTube
- **youtube:clip**: [_youtube_](## 'netrc machine')
- **youtube:favorites**: [_youtube_](## 'netrc machine') YouTube liked videos; ":ytfav" keyword (requires cookies)
- **youtube:history**: [_youtube_](## 'netrc machine') Youtube watch history; ":ythis" keyword (requires cookies)
- **youtube:​music:search_url**: [_youtube_](## 'netrc machine') YouTube music search URLs with selectable sections, e.g. #songs
- **youtube:notif**: [_youtube_](## 'netrc machine') YouTube notifications; ":ytnotif" keyword (requires cookies)
- **youtube:playlist**: [_youtube_](## 'netrc machine') YouTube playlists
- **youtube:recommended**: [_youtube_](## 'netrc machine') YouTube recommended videos; ":ytrec" keyword
- **youtube:search**: [_youtube_](## 'netrc machine') YouTube search; "ytsearch:" prefix
- **youtube:​search:date**: [_youtube_](## 'netrc machine') YouTube search, newest videos first; "ytsearchdate:" prefix
- **youtube:search_url**: [_youtube_](## 'netrc machine') YouTube search URLs with sorting and filter support
- **youtube:​shorts:pivot:audio**: [_youtube_](## 'netrc machine') YouTube Shorts audio pivot (Shorts using audio of a given video)
- **youtube:subscriptions**: [_youtube_](## 'netrc machine') YouTube subscriptions feed; ":ytsubs" keyword (requires cookies)
- **youtube:tab**: [_youtube_](## 'netrc machine') YouTube Tabs
- **youtube:user**: [_youtube_](## 'netrc machine') YouTube user videos; "ytuser:" prefix
- **youtube:watchlater**: [_youtube_](## 'netrc machine') Youtube watch later list; ":ytwatchlater" keyword (requires cookies)
- **YoutubeLivestreamEmbed**: [_youtube_](## 'netrc machine') YouTube livestream embeds
- **YoutubeYtBe**: [_youtube_](## 'netrc machine') youtu.be
- **Zaiko**
- **ZaikoETicket**
- **Zapiks**
- **Zattoo**: [_zattoo_](## 'netrc machine')
- **ZattooLive**: [_zattoo_](## 'netrc machine')
- **ZattooMovies**: [_zattoo_](## 'netrc machine')
- **ZattooRecordings**: [_zattoo_](## 'netrc machine')
- **ZDF**
- **ZDFChannel**
- **Zee5**: [_zee5_](## 'netrc machine')
- **zee5:series**
- **ZeeNews**: (**Currently broken**)
- **ZenPorn**
- **ZenYandex**
- **ZenYandexChannel**
- **ZetlandDKArticle**
- **Zhihu**
- **zingmp3**: zingmp3.vn
- **zingmp3:album**
- **zingmp3:chart-home**
- **zingmp3:chart-music-video**
- **zingmp3:hub**
- **zingmp3:liveradio**
- **zingmp3:podcast**
- **zingmp3:podcast-episode**
- **zingmp3:user**
- **zingmp3:week-chart**
- **zoom**
- **Zype**
- **generic**: Generic downloader that works on some sites
