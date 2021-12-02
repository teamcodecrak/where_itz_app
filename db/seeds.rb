Movie.destroy_all
MovieList.destroy_all
List.destroy_all
User.create username: 'Anthony', email: 'User@hotmail.com', password: '123456'
first_user = User.first

first_list = List.create(list_name: 'first list', user_id: first_user.id)

second_user = User.create username: 'Aunty', email: 'Fake@hotmail.com', password: '123456'

second_list = List.create(list_name: 'second list', user_id: first_user.id)

movies = [
    {
        name:"Dancing with the Stars",
        show_type:"Reality",
        genres:["Music"],
        officialSite:"https://abc.com/shows/dancing-with-the-stars",
        network:"ABC",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/358/895815.jpg", 
        summary:"The hit series in which celebrities perform choreographed dance routines that are judged by a panel of renowned ballroom experts",
    },{
    name: "Breaking Bad",
    show_type: "Scripted",
    genres: ["Drama", "Crime", "Thriller"],
    officialSite: "http://www.amc.com/shows/breaking-bad",
    network: "AMC",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
    summary:
      "Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.",
  },
  {
    name: "Talking Bad",
    show_type: "Talk Show",
    genres: [],
    network: "AMC",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/6/16586.jpg",
    summary:
      "Talking Bad features Hardwick spending time with fans, actors, producers and tv enthusiasts, recapping the most recent Breaking Bad episode, and taking questions and comments from viewers. Fans may continue to engage with the after-show following the on-air conclusion, online, at amc.com for more videos, weekly polls and photo galleries of the guests featured on the series.",
  },
  {
    name: "Breaking the Band",
    show_type: "Documentary",
    genres: [],
    officialSite: "https://www.reelz.com/breaking-the-band/",
    network: "REELZ",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/158/396509.jpg",
    summary:
      "Sold out tours, chart-topping hits, and runaway world domination can all mean nothing when you're in a band on the brink of collapse. Tempers flare, arguments erupt and the sweet sound of musical success comes to an abrupt end. Breaking the Band shows the battling egos, power struggles and inter-band rivalries that split up The Beatles, The Supremes, Fleetwood Mac, The Eagles, The Beach Boys, N.W.A, Van Halen and Sonny and Cher. From crippling drug addictions to scandalous affairs Breaking the Band uncovers the incredible true stories by recreating the key moments the cameras missed in addition to using rare band interviews and off-stage footage to piece together each dramatic tale.",
  },
  {
    name: "Bradley Walsh & Son: Breaking Dad",
    show_type: "Reality",
    genres: ["Adventure", "Travel"],
    officialSite:
      "https://www.itv.com/presscentre/ep1week1/bradley-walsh-son-breaking-dad",
    network: "ITV",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/179/447867.jpg",
    summary:
      "Actor Bradley Walsh and his 20-year-old son Barney are hitting the road together for a brand-new four-part series, travelling over 2000 miles from Los Angeles to New Orleans.",
  },
  {
    name: "Baking Mad with Eric Lanlard",
    show_type: "Reality",
    genres: ["Food"],
    officialSite:
      "https://web.archive.org/web/20161128180436/http://www.channel4.com/programmes/baking-mad-with-eric-lanlard",
    network: "Channel 4",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/69/174876.jpg",
    summary:
      "Master patissier Eric Lanlard helps people create the perfect bakes.",
  },
  {
    name: "Insecure",
    show_type: "Scripted",
    genres: ["Drama", "Comedy"],
    officialSite: "http://www.hbo.com/insecure",
    network: "HBO",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/368/920941.jpg",
    summary:
      "Insecure focuses on the awkward experiences and racy tribulations of a modern day African-American woman through the eyes of Issa Dee, played by Issa Rae. Jay Ellis will play Lawrence, Issa's depressed and unemployed boyfriend, who has been getting his act together for four years. Yvonne Orji is Molly, Issa's best friend. While very successful in her corporate work life, she is very unsuccessful in her love life.",
  },
  {
    name: "Tough As Nails",
    show_type: "Reality",
    genres: [],
    officialSite: "https://www.cbs.com/shows/tough-as-nails/",
    network: "CBS",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/361/903741.jpg",
    summary:
      "Tough As Nails is a competition series that celebrates everyday Americans who roll up their sleeves and don't think twice about working long hard hours and getting their hands dirty, in order to keep their country running. Competitors who consider the calluses on their hands a badge of honor will be tested for their strength, endurance, life skills and, most importantly, mental toughness in challenges that take place at real-world job sites.",
  },
  {
    name: "Nail'd It!",
    show_type: "Reality",
    genres: [],
    officialSite: "http://www.oxygen.com/naild-it",
    network: "Oxygen",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/147/367675.jpg",
    summary:
      "Nail'd It pits 18 of the best up-and-coming nail artists against one another as they claw their way to the top to claim a life-changing grand prize of $100,000. The series premiere coincides with Oxygen's rebrand on Tuesday, October 7th across all platforms, launching the network's new logo and tagline, very real, targeting young, modern women.",
  },
  {
    name: "Boss Nails",
    show_type: "Reality",
    genres: [],
    officialSite: "http://www.oxygen.com/boss-nails",
    network: "Oxygen",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/302/755363.jpg",
    summary:
      "Oxygen Media makes an appointment at the hottest beauty salon in town premiering Boss Nails on Tuesday, August 11 at 9pm ET/PT. The series follows 26-year-old Dana Cody, the glamorous and sassy owner of Tippie Toes Beauty Lounge in Miami. A no-nonsense boss, Dana is determined to continue the legacy her mother left behind by building an empire one nail at a time. Each half-hour episode features Dana's eccentric and sometimes unruly staff as they create custom, one-of-a-kind fantasy nail art for her equally unique and demanding clients. From a dancer that wants nails as fierce as her stilettos to an artist with an alter-ego who wishes to have a set filled with personality, the requests are over-the-top but no one ever leaves disappointed.",
  },
  {
    name: "Nail Shop Paris",
    show_type: "Scripted",
    genres: ["Drama", "Comedy", "Romance"],
    officialSite: "http://www.mbcplus.com/program/paris/cast.html",
    network: "MBC QueeN",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/126/316886.jpg",
    summary:
      "A romantic comedy revolving around flower boy nail artists and the happenings around them. It will center the story of Hong Yeo Joo, the writer of an internet novel who dresses up like a boy and gets hired to work at a famous nail shop Paris filled with flower boy nail artists.",
  },
  { 
    name: "Nail Files",
    show_type: "Reality",
    genres: [],
    officialSite: nil,
    network: "TV Guide Channel",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/98/245494.jpg",
    summary:
      "Nail Files follows the beautiful and blonde entrepreneur Katie Cazorla as she takes her salon, The Painted Nail, to the next level.",
  },{
      name:"World's Funniest Animals",
      show_type:"Variety",
      genres:["Comedy"],
      officialSite:"https://www.cwtv.com/shows/worlds-funniest-animals/",
      network:"The CW",
      image:"https://static.tvmaze.com/uploads/images/medium_portrait/359/897833.jpg",
      summary:"World's Funniest Animals is hosted by Elizabeth Stanton Popstar This Week who, along and her celebrity guest panel, looks at animals doing the funniest things ever caught on video.  The series includes viral internet clips of funny animal moments, hilarious animal clips from major motion pictures and your favorite TV series, animal outtakes that surprise the whole cast and crew, videos of babies and pets as well as celebrities and their pets.",
    },{
        name:"America's Funniest Home Videos",
        show_type:"Reality",
        genres:["Comedy","Family"],
        officialSite:"http://abc.go.com/shows/americas-funniest-home-videos",
        network:"ABC",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/359/898287.jpg",
        summary:"ABC's longest-running primetime entertainment show, America's Funniest Home Videos, returns for season 30 this fall with the same mission -- giving families something genuinely funny to enjoy together on Sunday nights. AFV the longest-running primetime entertainment show in ABC history, returns for season 30 with the same mission - to provide viewers with hysterical moments that fly by at a dizzying pace.",
    },{
        name:"Worlds Funniest Fails",
        show_type:"Variety",
        genres:["Comedy","Family"],
        officialSite:"http://www.fox.com/worlds-funniest",
        network:"FOX",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/8/20920.jpg",
        summary:"An irreverent one-hour series, WORLD'S FUNNIEST FAILS is inspired by the hit YouTube channel, FailArmy, which showcases the best epic fail viral videos in the most entertaining ways possible. Each week a panel of celebrities and comedians will analyze the videos which have exploded across the internet, with the goal of awarding one with the ultimate Fail of the Week.",
    },{
        name:"TV's Funniest Holiday Moments",
        show_type:"Variety",
        genres:[],
        officialSite:"http://www.paleycenter.org/2010-tv-s-funniest-holiday-moments",
        network:"FOX",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/31/79764.jpg",
        summary:"The Perfect Special for Christmas Day! TV's Funniest Holiday Moments is a Paley Center for Media Special holiday event hosted by Jane Lynch. The two-hour special will count down the Top 40 holiday moments of all time gathered from holiday sitcoms, dramas, variety specials, late-night programs, and sketch shows. Relive television's most memorable holiday scenes and laugh, cry and remember the reason for the season. Some of the programs celebrated in this special are Cheers, Married... with Children and Friends.",
    },{
        name:"Funniest Commercials of the Year",
        "show_type":"Variety",
        genres:["Comedy"],
        officialSite:"http://www.spike.com/articles/wdui7n/spike-specials-funniest-commercials-2014",
        network:"Paramount Network",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/34/85815.jpg",
        summary:"In an age where everyone DVRs everything, commercials have to stand out to get noticed. When people seek you out, or spend the next year quoting your catchphrase, that's when you know you've achieved something magical. The Funniest Commercials of the Year annual special first aired on truTV in 2004 and beginning in 2014 moved to Spike TV.",
    },{
        name:"Funniest Ever Celebrity Moments",
        "show_type":"Variety",
        genres:["Comedy"],
        officialSite:"http://www.channel5.com/show/funniest-ever-celebrity-moments/", 
        network:"Channel 5",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/162/405020.jpg",
        summary:"Clip show featuring stars making fools of themselves.",
    },{
        name:"Texas 6",
        show_type:"Documentary",
        genres:["Sports"],
        officialSite:"https://www.cbs.com/shows/texas-6/",
        network:nil,
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/282/706759.jpg",
        summary:"Texas 6 takes place in Strawn, Texas and follows the Greyhounds, a high school six-man football team under the direction of Coach Dewaine Lee, as they attempt a three-peat for the 6-Man Football State Championship. While football remains the spine of Strawn, Texas 6 ultimately depicts the spirit of a small town and a team that shows up for one another on and off the field.",
    },{
        name:"Midnight, Texas",
        show_type:"Scripted",
        genres:["Drama","Mystery","Supernatural"],
        officialSite:"http://www.nbc.com/midnight-texas",
        network:"NBC",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/169/424803.jpg",
        summary:"Welcome to a place where being normal is really quite strange, Midnight, Texas. From Niels Arden Oplev, the visionary director of Mr. Robot, and based on the hit book series from author Charlaine Harris True Blood, comes a journey into a remote Texas town where no one is who they seem. From vampires and witches to psychics and hit men, Midnight is a mysterious safe haven for those who are different. As the town members fight off outside pressures from rowdy biker gangs, ever-suspicious cops and their own dangerous pasts, they band together and form a strong and unlikely family.",
    },{
        name:"Texas Rising",
        show_type:"Scripted",
        genres:["Drama","Action","Western"],
        officialSite:"http://www.history.com/shows/texas-rising",
        network:"History",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/9/24430.jpg",
        summary:"Texas Rising is an 8-hour miniseries that details the Texas Revolution and the rise of the Texas Rangers. In 1836, west of the Mississippi was considered the Wild West and the Texas frontier was viewed as hell on earth. Crushed from the outside by Mexican armadas and attacked from within by ferocious Comanche tribes—no one was safe. But this was a time of bravery, a time to die for what you believed in and a time to stand tall against the cruel rule of the Mexican General Santa Anna. The heroic General Sam Houston, the rag tag Rangers and the legendary Yellow Rose of Texas lead this story of the human will to win against insurmountable odds. At the end, the Texas flags stood tall and victorious, claiming a piece of history for all eternity.",
    },{
        name:"Texas Metal",
        show_type:"Reality",
        genres:[],
        officialSite:"https://watch.motortrend.com/tv-shows/texas-metal",
        network:"MotorTrend",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/320/800964.jpg",
        summary:"Velocity rides into the heart of Texas to bring car fans inside the clever custom creations of mastermind Bill Carlton and his team in the all new series Texas Metal. As the owner and innovator behind Houston's Ekstensive Metal Works, Carlton pushes his team to build the best one-off cars and trucks for people from around the country. Texas Metal follows their work as they make the ordinary extraordinary using everything from rusted out wrecks to top of the line vehicles including a 1955 Chevy Truck, a 2014 Porsche 911, a 1967 Lincoln Continental, a 1966 Chevrolet C10 and more.",
    },{
        name:"Badlands, Texas",
        show_type:"Documentary",
        genres:["Crime"],
        officialSite:"http://channel.nationalgeographic.com/badlands-texas/",
        network:"National Geographic Channel",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/143/358988.jpg",
        summary:"The small town of Terlingua, Texas is a little known oasis on the Rio Grande River where eccentric residents trade modern comforts for a unique brand of freedom. But the price of their freedom proves high when a brutal crime threatens to tear their town apart. This true-crime docu-series delves into the eccentric world of Terlingua as its citizens struggle to reconcile the killing of a dear friend and fight to hold the town together as it grapples with change.",
    },{
        name:"Flipping Texas",
        show_type:"Reality",
        genres:[],
        officialSite:"http://www.hgtv.com/shows/tv-schedule-2017.02.23.EST",
        network:"HGTV",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/98/247484.jpg",
        summary:"Flipping Texas follows military veteran couple turned real estate investors Andy and Ashley Williams as they buy, fix and flip a rundown ranch-style house in Hurst, Texas. With a tight budget and a tighter timeline, can Andy and Ashley transform this dilapidated dump into a stand-out, modern ranch and turn a profit? Or will their hard work and investment go down the drain?",
    },{
        name:"Big Fish Texas",
        show_type:"Reality",
        genres:[],
        officialSite:"http://www.natgeotv.com/ca/fish-warrior/videos/big-fish",
        network:"National Geographic Channel",
        image:"https://static.tvmaze.com/uploads/images/medium_portrait/43/108097.jpg",
        summary:"The Guindons of Galveston, Texas, face year-round challenges to keep Katie's Seafood Market thriving. Acquiring the inventory is patriarch Buddy Guindon, brother Kenny and son Hans, who battle against long days, longer nights, a sea full of predators, and Mother Nature's quirkiness. Buddy's son Nick runs the business side of the company, juggling surpluses, shortages, and order deadlines while also processing a quarter of the Gulf's deep-water fish and spearheading initiatives to preserve their fishery. Through it all, the family built on traditional values always makes time for hearty laughs and home-cooked meals.",
    },
]

movies.each do |attributes|
    Movie.create attributes
end

first_movie = Movie.first
MovieList.create(list: first_list, movie: first_movie)