import { useState, useEffect } from 'react';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TopNews from './components/top-news/Top-news';
import Search from './components/search/Search';
import Categories from './components/categories/Categories';
import Post from './components/post/post';
import { ICurrentPost, ICountryNews } from './ComponentsInterface';


function App() {
  const [route, setRoute] = useState<string>("top-news");
  const [value, setValue] = useState<string>('one');
  const [alignment, setAlignment] = useState<string>('GB');
  const [countryNews, setCountryNews] = useState <ICountryNews[]>([
    {
      source: {
        id: '',
        name: '',
    },
    author:'',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    category: '',
    content: ''
    }
  ]);
  const [usNews, setUsNews] = useState<ICountryNews[]>([
    {
      source: {
        id: '',
        name: '',
    },
    author:'',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    category: '',
    content: ''
    }
  ]);
  const [gbNews, setGbNews] = useState<ICountryNews[]>([
    {
      source: {
        id: '',
        name: '',
    },
    author:'',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    category: '',
    content: ''
    }
  ]);
  const [currentPost, setCurrentPost] = useState<ICurrentPost>({
    title: "",
    image: "",
    description: ""
  });
  const [postRef, setPostRef] = useState<string>('');
  
  //get current route and reset postRef
  const handleTabChange = (e: string): void => {setRoute(e); setPostRef('')};

  

  //rerender on whenever state of country changes
  useEffect(() => {
    const rawUsNews: ICountryNews[] = [
      {
      "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
      },
      "author": "Steve Hendrix, Shira Rubin",
      "title": "USMeet the Israeli protesters resisting Netanyahu’s judicial reform bill - The Washington Post",
      "description": "The protests rocking Israel have been extraordinary not just in size but in composition. The Post spoke with protesters about why they were in the streets.",
      "url": "https://www.washingtonpost.com/world/2023/03/27/israel-protests-judicial-reform-netanyahu/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MIKUZTG3RKNT4TUF6CFCQWLZQA.JPG&w=1440",
      "publishedAt": "2023-03-27T16:35:27Z",
      "content": "Comment on this story\r\nTEL AVIV The protests that have rocked Israel since January the largest sustained mass demonstrations in the countrys history have been extraordinary not just in size but in co… [+6735 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Amir Tal, Rob Picheta",
      "title": "USIsrael judicial overhaul plans delayed amid huge protests, says Ben Gvir's Jewish Power party - CNN",
      "description": "Benjamin Netanyahu's controversial plans to weaken Israel's judiciary will be put on hold after widespread strikes and protests drove the country to a standstill, the party of National Security Minister Itamar Ben Gvir announced Monday.",
      "url": "https://www.cnn.com/2023/03/27/middleeast/israel-judicial-overhaul-protests-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327145215-01-israel-protest-gallery.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-27T16:35:00Z",
      "content": "Benjamin Netanyahus controversial plans to weaken Israels judiciary will be put on hold after widespread strikes and protests drove the country to a standstill, the party of National Security Ministe… [+2461 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": 'null',
      "title": "USNashville school shooting leaves multiple victims, suspect dead - Reuters.com",
      "description": "Three children were killed in a shooting at a private Christian school in Nashville, Tennessee, on Monday morning before police \"engaged\" the suspected attacker, leaving the suspect dead, local officials said.",
      "url": "https://www.reuters.com/world/us/multiple-victims-reported-after-school-shooting-nashville-officials-say-2023-03-27/",
      "urlToImage": "https://www.reuters.com/resizer/dLXa5JLhn5pa3YlzBmQdETvOwYk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5BMLDJA6RZKN7APGM5FK2L6XNU.jpg",
      "publishedAt": "2023-03-27T16:34:00Z",
      "content": "March 27 (Reuters) - Three children were killed in a shooting at a private Christian school in Nashville, Tennessee, on Monday morning before police \"engaged\" the suspected attacker, leaving the susp… [+1087 chars]"
      },
      {
      "source": {
      "id": "ars-technica",
      "name": "Ars Technica"
      },
      "author": "Jon Brodkin",
      "title": "USTwitter source code was leaked on GitHub shortly after Musk’s layoff spree - Ars Technica",
      "description": "Twitter suspects code leaker is ex-employee, which doesn't narrow it down much.",
      "url": "https://arstechnica.com/tech-policy/2023/03/twitter-source-code-was-leaked-on-github-shortly-after-musks-layoff-spree/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/03/getty-twitter-magnifying-glass-760x380.jpg",
      "publishedAt": "2023-03-27T16:01:08Z",
      "content": "66 with \r\nPortions of Twitter's source code recently appeared on GitHub, and Twitter is trying to force GitHub to identify the user or users who posted the code.\r\nGitHub disabled the repository on Fr… [+3976 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "CNBC"
      },
      "author": "Natasha Turak, Ruxandra Iordache, Sam Meredith",
      "title": "USIsrael's Netanyahu to delay judiciary overhaul after mass protests, coalition partner says - CNBC",
      "description": "Israeli Prime Minister Benjamin Netanyahu on Monday agreed to suspend a planned judiciary reform until the next parliament session after nationwide protests paralyzed the country.",
      "url": "https://www.cnbc.com/2023/03/27/israel-netanyahu-to-delay-judiciary-overhaul-after-mass-protests-coalition-partner-says.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215485-1679920189264-gettyimages-1249591459-AFP_33C62R4.jpeg?v=1679931921&w=1920&h=1080",
      "publishedAt": "2023-03-27T15:45:21Z",
      "content": "Protesters shout slogans outside Israel's parliament in Jerusalem amid ongoing demonstrations and calls for a general strike against the hard-right government's controversial push to overhaul the jus… [+4734 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Lauren Said-Moorhouse, Max Foster",
      "title": "USPrince Harry back in London for UK High Court fight - CNN",
      "description": "Britain's Prince Harry has arrived at London's High Court to attend a hearing in his claim against Associated Newspapers Limited over allegations of unlawful information gathering.",
      "url": "https://www.cnn.com/2023/03/27/uk/prince-harry-court-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327103821-01-prince-harry-court-london-032723.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-27T15:36:00Z",
      "content": "Britains Prince Harry has arrived at Londons High Court to attend a hearing in his claim against Associated Newspapers Limited over allegations of unlawful information gathering.\r\nThe Duke of Sussex … [+4537 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "Hollywood Reporter"
      },
      "author": "Josh Wigler",
      "title": "US‘Succession’ Star Jeremy Strong Plants “Seeds of Destruction” in Final Season Premiere - Hollywood Reporter",
      "description": "The Emmy-winning actor tells The Hollywood Reporter about the dark storms ahead for Kendall Roy: \"Just when I thought I couldn't go any lower, enter season four.\"",
      "url": "https://www.hollywoodreporter.com/tv/tv-features/succession-season-4-jeremy-strong-kendall-roy-interview-1235359231/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/strong.jpg?w=1024",
      "publishedAt": "2023-03-27T15:20:45Z",
      "content": "(This story contains spoilers for the final season premiere of Succession, “The Munsters.”)\r\nKendall Roy (Jeremy Strong) isn’t alone anymore. After a turbulent ride through three seasons of HBO’s Suc… [+7674 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "CNBC"
      },
      "author": "Rohan Goswami",
      "title": "USBinance and founder Changpeng Zhao violated compliance rules to attract U.S. users, CFTC alleges - CNBC",
      "description": "The CFTC alleged that Binance violated federal law to solicit U.S. users for millions in revenue, a potentially existential threat to the exchange.",
      "url": "https://www.cnbc.com/2023/03/27/binance-and-founder-changpeng-zhao-sued-by-cftc-for-allegedly-violating-trading-rules.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107152567-1668602820538-GettyImages-1244424369.jpg?v=1679930052&w=1920&h=1080",
      "publishedAt": "2023-03-27T15:12:54Z",
      "content": "The Commodity Futures and Trading Commission filed a complaint against crypto exchange Binance, its co-founder, Changpeng Zhao, and its former chief compliance officer, Samuel Lim, alleging that Bina… [+3844 chars]"
      },
      {
      "source": {
      "id": "independent",
      "name": "Independent"
      },
      "author": "Gustaf Kilander",
      "title": "USTrudeau mocked over ‘lame’ Biden state dinner menu - The Independent",
      "description": "‘You can almost sense that this is the $79 pp option at a mid-tier catering company’",
      "url": "https://www.independent.co.uk/news/world/americas/justin-trudeau-joe-biden-dinner-b2308713.html",
      "urlToImage": "https://static.independent.co.uk/2023/03/27/14/newFile-3.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2023-03-27T15:12:31Z",
      "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nThe menu served at the state dinner of Canadian Prime Minister Justin T… [+2309 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "ESPN Australia"
      },
      "author": 'null',
      "title": "USQB Lamar Jackson says he has requested trade from Ravens - ESPN Australia",
      "description": "Lamar Jackson said Monday that he has requested a trade from the Ravens as the team \"has not been interested in meeting my value\" in contract talks.",
      "url": "https://www.espn.com.au/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0310%2Fr984612_1296x729_16%2D9.jpg",
      "publishedAt": "2023-03-27T15:10:21Z",
      "content": "Lamar Jackson said Monday that he has requested a trade from the Baltimore Ravens as the team \"has not been interested in meeting my value\" in contract talks.\r\nThe star quarterback made the announcem… [+2721 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Elizabeth Wolfe, Holly Yan, Rob Shackelford",
      "title": "USA dam failure in central Georgia forces emergency evacuations as the Southeast gets lashed by dangerous new storms - CNN",
      "description": "The National Weather Service in Atlanta has clarified that the Heads Creek Dam in central Georgia has not failed, citing Spalding County emergency management officials.",
      "url": "https://www.cnn.com/2023/03/27/weather/southeast-severe-storms-weather-monday/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327111026-03-mississippi-weather-0326.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-03-27T15:01:09Z",
      "content": "[Breaking news update at 12:36 p.m. ET]\r\nThe National Weather Service in Atlanta has clarified that the Heads Creek Dam in central Georgia has not failed, citing Spalding County emergency management … [+6019 chars]"
      },
      {
      "source": {
      "id": "polygon",
      "name": "Polygon"
      },
      "author": "Nicole Clark",
      "title": "USTerra Nil review: The apocalypse leads to a conflicting management sim - Polygon",
      "description": "Terra Nil is a “reverse city builder,” as developer Free Lives has described it on the game’s Steam page, where you rewild desiccated and barren land across four major biomes in a series of four scenarios. Here’s our review.",
      "url": "https://www.polygon.com/reviews/23652587/terra-nil-review-sim-game-city-builder-climate-change",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Qp8FJ9LR4SQBJrWNZzIkLY1hT-E=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24529530/terranil1.jpeg",
      "publishedAt": "2023-03-27T15:00:00Z",
      "content": "Management sims have made me into a villain. If playing a simulator game is like playing god, then Im certainly a wrathful one. In Factorio, I remind myself the factory must grow as I fight bug horde… [+8266 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "The Guardian"
      },
      "author": "Ian Sample",
      "title": "USGlass beads on moon’s surface may hold billions of tonnes of water, scientists say - The Guardian",
      "description": "Finding from lunar soil samples is important breakthrough for hopes of building bases on the moon",
      "url": "https://www.theguardian.com/science/2023/mar/27/glass-beads-on-moon-surface-hold-billions-of-tonnes-of-water-scientists-say",
      "urlToImage": "https://i.guim.co.uk/img/media/fc1e3d0f32243db8dad18b7c8d0f380203a0a910/0_20_2504_1502/master/2504.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=82799729a5cf34811daed944d287d272",
      "publishedAt": "2023-03-27T15:00:00Z",
      "content": "Tiny glass beads strewn across the moons surface contain potentially billions of tonnes of water that could be extracted and used by astronauts on future lunar missions, researchers say.\r\nThe discove… [+3554 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "CNBC"
      },
      "author": "Amelia Lucas",
      "title": "USChipotle to pay ex-employees $240,000 after closing Maine location that tried to unionize - CNBC",
      "description": "Chipotle Mexican Grill has agreed to pay $240,000 to the former employees of an Augusta, Maine, location that tried to unionize.",
      "url": "https://www.cnbc.com/2023/03/27/chipotle-to-pay-ex-employees-closing-location-union.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106225666-1572984335481gettyimages-1011799260.jpeg?v=1679928778&w=1920&h=1080",
      "publishedAt": "2023-03-27T14:52:58Z",
      "content": "Chipotle Mexican Grill has agreed to pay $240,000 to the former employees of an Augusta, Maine, location as part of a settlement for closing the restaurant when workers tried to unionize.\r\nChipotle d… [+2482 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "YouTube"
      },
      "author": 'null',
      "title": "USLeBron's return to action spoiled by Pat Bev & the Bulls | Get Up - ESPN",
      "description": "Vince Carter and Zach Lowe joins Get Up to discuss LeBron James' return to action, why Anthony Davis must be more aggressive, and are the Golden State Warrio...",
      "url": "https://www.youtube.com/watch?v=X8HDrmxUuq0",
      "urlToImage": "https://i.ytimg.com/vi/X8HDrmxUuq0/maxresdefault.jpg",
      "publishedAt": "2023-03-27T14:34:43Z",
      "content": 'null'
      },
      {
      "source": {
      "id": 'null',
      "name": "WAFB"
      },
      "author": 'null',
      "title": "USFAA releases preliminary cause of BRPD chopper crash - WAFB",
      "description": "Investigators say the Baton Rouge Police Department helicopter that crashed Sunday near Port Allen, La. went down after its tail rotor struck a tree.",
      "url": "https://www.wafb.com/2023/03/27/faa-releases-preliminary-cause-brpd-chopper-crash/",
      "urlToImage": "https://gray-wafb-prod.cdn.arcpublishing.com/resizer/ua9xgHWyYA3QwZv0YMLjf4OKRO8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/3YZ5ZF7UNBEVZBTI4K2HFAY2LY.jpg",
      "publishedAt": "2023-03-27T14:23:00Z",
      "content": "BATON ROUGE, La. (WAFB) - Investigators say the Baton Rouge Police Department helicopter that crashed Sunday, March 26, near Port Allen, La. went down after its tail rotor struck a tree.\r\nThe prelimi… [+666 chars]"
      },
      {
      "source": {
      "id": "the-hill",
      "name": "The Hill"
      },
      "author": "Julia Mueller",
      "title": "USBolton on Putin plans to deploy nukes in Belarus: ‘He may not be bluffing here’ - The Hill",
      "description": "Former national security adviser John Bolton on Monday said Russian President Vladimir Putin “may not be bluffing” about his plans to move nuclear weapons into neighboring Belarus as Moscow’s war on Ukraine stretches into its second year. Putin’s threat to st…",
      "url": "https://thehill.com/policy/international/3919873-bolton-on-putin-plans-to-deploy-nukes-in-belarus-he-may-not-be-bluffing-here/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/08/3142ad4a6266403f91905acc9ac52150-e1669494533966.jpg?w=1280",
      "publishedAt": "2023-03-27T14:09:00Z",
      "content": "Skip to content\r\nFormer national security adviser John Bolton on Monday said Russian President Vladimir Putin “may not be bluffing” about his plans to move nuclear weapons into neighboring Belarus as… [+2613 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "CNBC"
      },
      "author": "Reuters",
      "title": "USLargest strike in decades brings Germany to a standstill - CNBC",
      "description": "Airports and bus and train stations across Germany were at a standstill on Monday, causing disruption for millions at the start of the working week.",
      "url": "https://www.cnbc.com/2023/03/27/largest-strike-in-decades-brings-germany-to-a-standstill.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215568-1679924807932-GettyImages-1249585075.jpg?v=1679925512&w=1920&h=1080",
      "publishedAt": "2023-03-27T13:58:32Z",
      "content": "Airports and bus and train stations across Germany were at a standstill on Monday, causing disruption for millions at the start of the working week during one of the largest walkouts in decades as Eu… [+4785 chars]"
      },
      {
      "source": {
      "id": "cbs-news",
      "name": "CBS News"
      },
      "author": "Christopher Brito",
      "title": "USJeremy Renner shares video of him walking again after snowplow accident - CBS News",
      "description": "Renner is seen walking slowly on an antigravity treadmill, nearly three months after the accident.",
      "url": "https://www.cbsnews.com/news/jeremy-renner-snow-plow-accident-update/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/27/025833fb-a33e-4762-9c19-5c6a67be1945/thumbnail/1200x630/9cab9d1e1ffb5bd13c6b583dd73a4e24/gettyimages-1354989348.jpg",
      "publishedAt": "2023-03-27T13:24:20Z",
      "content": "Jeremy Renner gave fans a new update on his recovery on Sunday, nearly three months after he was injured in a snowplow accident. The \"Avengers\" star posted a clip on his social media accounts showing… [+1314 chars]"
      },
      {
      "source": {
      "id": 'null',
      "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "USiPhone 15 Rumored to Lack SIM Card Tray in France and Likely Other Countries - MacRumors",
      "description": "iPhone 15 and iPhone 15 Pro models could launch without a SIM card tray in France this year, according to information obtained by French website...",
      "url": "https://www.macrumors.com/2023/03/27/iphone-15-esim-only-france-rumor/",
      "urlToImage": "https://images.macrumors.com/t/b6OfenYVmCDmN7mZMHPeGvZiIac=/1600x/article-new/2023/03/iPhone-eSIM-Setup.jpeg",
      "publishedAt": "2023-03-27T13:15:30Z",
      "content": "iPhone 15 and iPhone 15 Pro models could launch without a SIM card tray in France this year, according to information obtained by French website MacGeneration. This means the devices would work with … [+1466 chars]"
      }
  ]
  const rawGbNews: ICountryNews[] = [
    {
    "source": {
    "id": "the-washington-postU",
    "name": "The Washington Post"
    },
    "author": "Steve Hendrix, Shira Rubin",
    "title": "UKMeet the Israeli protesters resisting Netanyahu’s judicial reform bill - The Washington Post",
    "description": "The protests rocking Israel have been extraordinary not just in size but in composition. The Post spoke with protesters about why they were in the streets.",
    "url": "https://www.washingtonpost.com/world/2023/03/27/israel-protests-judicial-reform-netanyahu/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MIKUZTG3RKNT4TUF6CFCQWLZQA.JPG&w=1440",
    "publishedAt": "2023-03-27T16:35:27Z",
    "content": "Comment on this story\r\nTEL AVIV The protests that have rocked Israel since January the largest sustained mass demonstrations in the countrys history have been extraordinary not just in size but in co… [+6735 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Amir Tal, Rob Picheta",
    "title": "UKIsrael judicial overhaul plans delayed amid huge protests, says Ben Gvir's Jewish Power party - CNN",
    "description": "Benjamin Netanyahu's controversial plans to weaken Israel's judiciary will be put on hold after widespread strikes and protests drove the country to a standstill, the party of National Security Minister Itamar Ben Gvir announced Monday.",
    "url": "https://www.cnn.com/2023/03/27/middleeast/israel-judicial-overhaul-protests-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327145215-01-israel-protest-gallery.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-27T16:35:00Z",
    "content": "Benjamin Netanyahus controversial plans to weaken Israels judiciary will be put on hold after widespread strikes and protests drove the country to a standstill, the party of National Security Ministe… [+2461 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": 'null',
    "title": "UKNashville school shooting leaves multiple victims, suspect dead - Reuters.com",
    "description": "Three children were killed in a shooting at a private Christian school in Nashville, Tennessee, on Monday morning before police \"engaged\" the suspected attacker, leaving the suspect dead, local officials said.",
    "url": "https://www.reuters.com/world/us/multiple-victims-reported-after-school-shooting-nashville-officials-say-2023-03-27/",
    "urlToImage": "https://www.reuters.com/resizer/dLXa5JLhn5pa3YlzBmQdETvOwYk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5BMLDJA6RZKN7APGM5FK2L6XNU.jpg",
    "publishedAt": "2023-03-27T16:34:00Z",
    "content": "March 27 (Reuters) - Three children were killed in a shooting at a private Christian school in Nashville, Tennessee, on Monday morning before police \"engaged\" the suspected attacker, leaving the susp… [+1087 chars]"
    },
    {
    "source": {
    "id": "ars-technica",
    "name": "Ars Technica"
    },
    "author": "Jon Brodkin",
    "title": "UKTwitter source code was leaked on GitHub shortly after Musk’s layoff spree - Ars Technica",
    "description": "Twitter suspects code leaker is ex-employee, which doesn't narrow it down much.",
    "url": "https://arstechnica.com/tech-policy/2023/03/twitter-source-code-was-leaked-on-github-shortly-after-musks-layoff-spree/",
    "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/03/getty-twitter-magnifying-glass-760x380.jpg",
    "publishedAt": "2023-03-27T16:01:08Z",
    "content": "66 with \r\nPortions of Twitter's source code recently appeared on GitHub, and Twitter is trying to force GitHub to identify the user or users who posted the code.\r\nGitHub disabled the repository on Fr… [+3976 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "CNBC"
    },
    "author": "Natasha Turak, Ruxandra Iordache, Sam Meredith",
    "title": "UKIsrael's Netanyahu to delay judiciary overhaul after mass protests, coalition partner says - CNBC",
    "description": "Israeli Prime Minister Benjamin Netanyahu on Monday agreed to suspend a planned judiciary reform until the next parliament session after nationwide protests paralyzed the country.",
    "url": "https://www.cnbc.com/2023/03/27/israel-netanyahu-to-delay-judiciary-overhaul-after-mass-protests-coalition-partner-says.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215485-1679920189264-gettyimages-1249591459-AFP_33C62R4.jpeg?v=1679931921&w=1920&h=1080",
    "publishedAt": "2023-03-27T15:45:21Z",
    "content": "Protesters shout slogans outside Israel's parliament in Jerusalem amid ongoing demonstrations and calls for a general strike against the hard-right government's controversial push to overhaul the jus… [+4734 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Lauren Said-Moorhouse, Max Foster",
    "title": "UKPrince Harry back in London for UK High Court fight - CNN",
    "description": "Britain's Prince Harry has arrived at London's High Court to attend a hearing in his claim against Associated Newspapers Limited over allegations of unlawful information gathering.",
    "url": "https://www.cnn.com/2023/03/27/uk/prince-harry-court-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327103821-01-prince-harry-court-london-032723.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-27T15:36:00Z",
    "content": "Britains Prince Harry has arrived at Londons High Court to attend a hearing in his claim against Associated Newspapers Limited over allegations of unlawful information gathering.\r\nThe Duke of Sussex … [+4537 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "Hollywood Reporter"
    },
    "author": "Josh Wigler",
    "title": "UK‘Succession’ Star Jeremy Strong Plants “Seeds of Destruction” in Final Season Premiere - Hollywood Reporter",
    "description": "The Emmy-winning actor tells The Hollywood Reporter about the dark storms ahead for Kendall Roy: \"Just when I thought I couldn't go any lower, enter season four.\"",
    "url": "https://www.hollywoodreporter.com/tv/tv-features/succession-season-4-jeremy-strong-kendall-roy-interview-1235359231/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/strong.jpg?w=1024",
    "publishedAt": "2023-03-27T15:20:45Z",
    "content": "(This story contains spoilers for the final season premiere of Succession, “The Munsters.”)\r\nKendall Roy (Jeremy Strong) isn’t alone anymore. After a turbulent ride through three seasons of HBO’s Suc… [+7674 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "CNBC"
    },
    "author": "Rohan Goswami",
    "title": "UKBinance and founder Changpeng Zhao violated compliance rules to attract U.S. users, CFTC alleges - CNBC",
    "description": "The CFTC alleged that Binance violated federal law to solicit U.S. users for millions in revenue, a potentially existential threat to the exchange.",
    "url": "https://www.cnbc.com/2023/03/27/binance-and-founder-changpeng-zhao-sued-by-cftc-for-allegedly-violating-trading-rules.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107152567-1668602820538-GettyImages-1244424369.jpg?v=1679930052&w=1920&h=1080",
    "publishedAt": "2023-03-27T15:12:54Z",
    "content": "The Commodity Futures and Trading Commission filed a complaint against crypto exchange Binance, its co-founder, Changpeng Zhao, and its former chief compliance officer, Samuel Lim, alleging that Bina… [+3844 chars]"
    },
    {
    "source": {
    "id": "independent",
    "name": "Independent"
    },
    "author": "Gustaf Kilander",
    "title": "UKTrudeau mocked over ‘lame’ Biden state dinner menu - The Independent",
    "description": "‘You can almost sense that this is the $79 pp option at a mid-tier catering company’",
    "url": "https://www.independent.co.uk/news/world/americas/justin-trudeau-joe-biden-dinner-b2308713.html",
    "urlToImage": "https://static.independent.co.uk/2023/03/27/14/newFile-3.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2023-03-27T15:12:31Z",
    "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nThe menu served at the state dinner of Canadian Prime Minister Justin T… [+2309 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "ESPN Australia"
    },
    "author": 'null',
    "title": "UKQB Lamar Jackson says he has requested trade from Ravens - ESPN Australia",
    "description": "Lamar Jackson said Monday that he has requested a trade from the Ravens as the team \"has not been interested in meeting my value\" in contract talks.",
    "url": "https://www.espn.com.au/nfl/story/_/id/35968103/qb-lamar-jackson-says-requested-trade-ravens",
    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0310%2Fr984612_1296x729_16%2D9.jpg",
    "publishedAt": "2023-03-27T15:10:21Z",
    "content": "Lamar Jackson said Monday that he has requested a trade from the Baltimore Ravens as the team \"has not been interested in meeting my value\" in contract talks.\r\nThe star quarterback made the announcem… [+2721 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Elizabeth Wolfe, Holly Yan, Rob Shackelford",
    "title": "UKA dam failure in central Georgia forces emergency evacuations as the Southeast gets lashed by dangerous new storms - CNN",
    "description": "The National Weather Service in Atlanta has clarified that the Heads Creek Dam in central Georgia has not failed, citing Spalding County emergency management officials.",
    "url": "https://www.cnn.com/2023/03/27/weather/southeast-severe-storms-weather-monday/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230327111026-03-mississippi-weather-0326.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-03-27T15:01:09Z",
    "content": "[Breaking news update at 12:36 p.m. ET]\r\nThe National Weather Service in Atlanta has clarified that the Heads Creek Dam in central Georgia has not failed, citing Spalding County emergency management … [+6019 chars]"
    },
    {
    "source": {
    "id": "polygon",
    "name": "Polygon"
    },
    "author": "Nicole Clark",
    "title": "UKTerra Nil review: The apocalypse leads to a conflicting management sim - Polygon",
    "description": "Terra Nil is a “reverse city builder,” as developer Free Lives has described it on the game’s Steam page, where you rewild desiccated and barren land across four major biomes in a series of four scenarios. Here’s our review.",
    "url": "https://www.polygon.com/reviews/23652587/terra-nil-review-sim-game-city-builder-climate-change",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/Qp8FJ9LR4SQBJrWNZzIkLY1hT-E=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24529530/terranil1.jpeg",
    "publishedAt": "2023-03-27T15:00:00Z",
    "content": "Management sims have made me into a villain. If playing a simulator game is like playing god, then Im certainly a wrathful one. In Factorio, I remind myself the factory must grow as I fight bug horde… [+8266 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "The Guardian"
    },
    "author": "Ian Sample",
    "title": "UKGlass beads on moon’s surface may hold billions of tonnes of water, scientists say - The Guardian",
    "description": "Finding from lunar soil samples is important breakthrough for hopes of building bases on the moon",
    "url": "https://www.theguardian.com/science/2023/mar/27/glass-beads-on-moon-surface-hold-billions-of-tonnes-of-water-scientists-say",
    "urlToImage": "https://i.guim.co.uk/img/media/fc1e3d0f32243db8dad18b7c8d0f380203a0a910/0_20_2504_1502/master/2504.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=82799729a5cf34811daed944d287d272",
    "publishedAt": "2023-03-27T15:00:00Z",
    "content": "Tiny glass beads strewn across the moons surface contain potentially billions of tonnes of water that could be extracted and used by astronauts on future lunar missions, researchers say.\r\nThe discove… [+3554 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "CNBC"
    },
    "author": "Amelia Lucas",
    "title": "UKChipotle to pay ex-employees $240,000 after closing Maine location that tried to unionize - CNBC",
    "description": "Chipotle Mexican Grill has agreed to pay $240,000 to the former employees of an Augusta, Maine, location that tried to unionize.",
    "url": "https://www.cnbc.com/2023/03/27/chipotle-to-pay-ex-employees-closing-location-union.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106225666-1572984335481gettyimages-1011799260.jpeg?v=1679928778&w=1920&h=1080",
    "publishedAt": "2023-03-27T14:52:58Z",
    "content": "Chipotle Mexican Grill has agreed to pay $240,000 to the former employees of an Augusta, Maine, location as part of a settlement for closing the restaurant when workers tried to unionize.\r\nChipotle d… [+2482 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "YouTube"
    },
    "author": 'null',
    "title": "UKLeBron's return to action spoiled by Pat Bev & the Bulls | Get Up - ESPN",
    "description": "Vince Carter and Zach Lowe joins Get Up to discuss LeBron James' return to action, why Anthony Davis must be more aggressive, and are the Golden State Warrio...",
    "url": "https://www.youtube.com/watch?v=X8HDrmxUuq0",
    "urlToImage": "https://i.ytimg.com/vi/X8HDrmxUuq0/maxresdefault.jpg",
    "publishedAt": "2023-03-27T14:34:43Z",
    "content": 'null'
    },
    {
    "source": {
    "id": 'null',
    "name": "WAFB"
    },
    "author": 'null',
    "title": "UKFAA releases preliminary cause of BRPD chopper crash - WAFB",
    "description": "Investigators say the Baton Rouge Police Department helicopter that crashed Sunday near Port Allen, La. went down after its tail rotor struck a tree.",
    "url": "https://www.wafb.com/2023/03/27/faa-releases-preliminary-cause-brpd-chopper-crash/",
    "urlToImage": "https://gray-wafb-prod.cdn.arcpublishing.com/resizer/ua9xgHWyYA3QwZv0YMLjf4OKRO8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/3YZ5ZF7UNBEVZBTI4K2HFAY2LY.jpg",
    "publishedAt": "2023-03-27T14:23:00Z",
    "content": "BATON ROUGE, La. (WAFB) - Investigators say the Baton Rouge Police Department helicopter that crashed Sunday, March 26, near Port Allen, La. went down after its tail rotor struck a tree.\r\nThe prelimi… [+666 chars]"
    },
    {
    "source": {
    "id": "the-hill",
    "name": "The Hill"
    },
    "author": "Julia Mueller",
    "title": "UKBolton on Putin plans to deploy nukes in Belarus: ‘He may not be bluffing here’ - The Hill",
    "description": "Former national security adviser John Bolton on Monday said Russian President Vladimir Putin “may not be bluffing” about his plans to move nuclear weapons into neighboring Belarus as Moscow’s war on Ukraine stretches into its second year. Putin’s threat to st…",
    "url": "https://thehill.com/policy/international/3919873-bolton-on-putin-plans-to-deploy-nukes-in-belarus-he-may-not-be-bluffing-here/",
    "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/08/3142ad4a6266403f91905acc9ac52150-e1669494533966.jpg?w=1280",
    "publishedAt": "2023-03-27T14:09:00Z",
    "content": "Skip to content\r\nFormer national security adviser John Bolton on Monday said Russian President Vladimir Putin “may not be bluffing” about his plans to move nuclear weapons into neighboring Belarus as… [+2613 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "CNBC"
    },
    "author": "Reuters",
    "title": "UKLargest strike in decades brings Germany to a standstill - CNBC",
    "description": "Airports and bus and train stations across Germany were at a standstill on Monday, causing disruption for millions at the start of the working week.",
    "url": "https://www.cnbc.com/2023/03/27/largest-strike-in-decades-brings-germany-to-a-standstill.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215568-1679924807932-GettyImages-1249585075.jpg?v=1679925512&w=1920&h=1080",
    "publishedAt": "2023-03-27T13:58:32Z",
    "content": "Airports and bus and train stations across Germany were at a standstill on Monday, causing disruption for millions at the start of the working week during one of the largest walkouts in decades as Eu… [+4785 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Christopher Brito",
    "title": "UKJeremy Renner shares video of him walking again after snowplow accident - CBS News",
    "description": "Renner is seen walking slowly on an antigravity treadmill, nearly three months after the accident.",
    "url": "https://www.cbsnews.com/news/jeremy-renner-snow-plow-accident-update/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/27/025833fb-a33e-4762-9c19-5c6a67be1945/thumbnail/1200x630/9cab9d1e1ffb5bd13c6b583dd73a4e24/gettyimages-1354989348.jpg",
    "publishedAt": "2023-03-27T13:24:20Z",
    "content": "Jeremy Renner gave fans a new update on his recovery on Sunday, nearly three months after he was injured in a snowplow accident. The \"Avengers\" star posted a clip on his social media accounts showing… [+1314 chars]"
    },
    {
    "source": {
    "id": 'null',
    "name": "MacRumors"
    },
    "author": "Joe Rossignol",
    "title": "UKiPhone 15 Rumored to Lack SIM Card Tray in France and Likely Other Countries - MacRumors",
    "description": "iPhone 15 and iPhone 15 Pro models could launch without a SIM card tray in France this year, according to information obtained by French website...",
    "url": "https://www.macrumors.com/2023/03/27/iphone-15-esim-only-france-rumor/",
    "urlToImage": "https://images.macrumors.com/t/b6OfenYVmCDmN7mZMHPeGvZiIac=/1600x/article-new/2023/03/iPhone-eSIM-Setup.jpeg",
    "publishedAt": "2023-03-27T13:15:30Z",
    "content": "iPhone 15 and iPhone 15 Pro models could launch without a SIM card tray in France this year, according to information obtained by French website MacGeneration. This means the devices would work with … [+1466 chars]"
    }
]

    // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5073e0943df64f3e8d4bf510b980259d")
    // .then(response => response.json()).then((data) => {setUsNews(data);filterNewsByCountry()}).catch(console.log)

      
        setTimeout(() => {
          setUsNews(rawUsNews)
          filterNewsByCountry();
        }, 5000);
    
    // fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=5073e0943df64f3e8d4bf510b980259d")
    // .then(response => response.json()).then((data) => {setGbNews; filterNewsByCountry()}).catch(console.log)

        setTimeout(() => {
          setGbNews(rawGbNews)
          filterNewsByCountry();
        }, 5000);
      
  }, [alignment]);

  //Filter the raw news array depending on the country selected
  const filterNewsByCountry = () => {
    let countrySpecificNews = (alignment === 'GB' ? gbNews : alignment === 'US' ? usNews : gbNews.concat(usNews)).filter(data => {
      return data
    });
    setCountryNews(countrySpecificNews);
  }

  //set referer
  const postRouter = (post : string): void => {
    setPostRef(post)
  }

  //get the data of current news clicked upon
  const getCurrentPost = (postObject: ICurrentPost): void => {setCurrentPost(postObject)};

  //MATERIAL UI FUNCTIONS//
  const handleChange_a = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  return (
    <div className="App">
      <div className='nav'>
        <div className='categories'>
        <Box sx={{ width: '100%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Top News" onClick={() => {
            handleTabChange("top-news");
            filterNewsByCountry()
            }}/>
            <Tab value="two" label="Categories" onClick={() => {
            handleTabChange("categories");
            filterNewsByCountry()
            }}/>
            <Tab value="three" label="Search" onClick={() => {
            handleTabChange("search");
            filterNewsByCountry()
            }}/>
          </Tabs>
        </Box>
        </div>
        <div className='countries'>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange_a}
            aria-label="Platform"
          >
            <ToggleButton value="US" >US</ToggleButton>
            <ToggleButton value="GB" >GB</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className='app-body'>
        {
          postRef === "view" ? <Post currentPost={currentPost} route={route} handleTabChange={handleTabChange}/> :
          route === "categories" ? 
          <Categories getCurrentPost={getCurrentPost} newsObject={countryNews} postRouter={postRouter}/> :
          route === "search" ?
          <Search getCurrentPost={getCurrentPost} newsObject={countryNews} country={alignment} handleTabChange={handleTabChange} postRouter={postRouter}/> :
          <TopNews getCurrentPost={getCurrentPost} newsObject={countryNews} country={alignment} handleTabChange={handleTabChange} postRouter={postRouter}/>
        }
      </div>
    </div>
  );
}

export default App;
