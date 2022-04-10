const movies = [
  {
    id: 1,
    name: "IRON MAN",
    year: 2008,
    img: "./img/iron_man_1_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/iron-man-2008_cw0dnw9qz/0mz87bb-full-movie-free-online",
  },
  {
    id: 2,
    name: "THE INCREDIBLE HULK",
    year: 2008,
    img: "./img/the_incredible_hulk.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/the-incredible-hulk-2008_cwwob60la/w7qebkx-full-movie-free-online",
  },
  {
    id: 3,
    name: "IRON MAN 2",
    year: 2010,
    img: "./img/iron_man_2.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/iron-man-2-2010_cwbkoqbom/bxe07v4-full-movie-free-online",
  },
  {
    id: 4,
    name: "THOR",
    year: 2011,
    img: "./img/thor.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/thor-2011_cwvoyba4q/vkneeko-full-movie-free-online",
  },
  {
    id: 5,
    name: "CAPTAIN AMERICA : THE FIRST AVENGER",
    year: 2011,
    img: "./img/captain_america_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/captain-america-the-first-avenger-2011_cwjnvamwe/jke00nl-full-movie-free-online",
  },
  {
    id: 6,
    name: "MARVEL'S THE AVENGERS",
    year: 2012,
    img: "./img/the_avengers.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/the-avengers-2012_cwwob6q89/w7qe0qa-full-movie-free-online",
  },
  {
    id: 7,
    name: "IRON MAN 3",
    year: 2013,
    img: "./img/iron_man_3.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/iron-man-3-2013_cwm0l4zl4/m86e7ex-full-movie-free-online",
  },
  {
    id: 8,
    name: "THOR: THE DARK WORLD",
    year: 2013,
    img: "./img/thor_the_dark_world.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/thor-the-dark-world-2013_cwwob6k7k/w7qeld6-full-movie-free-online",
  },
  {
    id: 9,
    name: "CAPTAIN AMERICA : THE WINTER SOLDIER",
    year: 2014,
    img: "./img/the_winter_soldier.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/captain-america-the-winter-soldier-2014_cwzqozeo8/z57k6jz-full-movie-free-online",
  },
  {
    id: 10,
    name: "GUARDIANS OF THE GALAXY",
    year: 2014,
    img: "./img/guardians_of_the_galaxy.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/guardians-of-the-galaxy-2014_cw0dnwy76/0mz8kjn-full-movie-free-online",
  },
  {
    id: 11,
    name: "AVENGERS : AGE OF ULTRON",
    year: 2015,
    img: "./img/marvels_age_of_ultron.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/avengers-age-of-ultron-2015_cwobl6m47/o7oe56e-full-movie-free-online",
  },
  {
    id: 12,
    name: "ANT-MAN",
    year: 2015,
    img: "./img/ant_man._1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/ant-man-2015_cw6m6qlwm/63bj4qv-full-movie-free-online",
  },
  {
    id: 13,
    name: "CAPTAIAN AMERICA : CIVIL WAR",
    year: 2016,
    img: "./img/civil_war.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/captain-america-civil-war-2016_cwbkoqzw6/bxe0exq-full-movie-free-online",
  },
  {
    id: 14,
    name: "DOCTOR STRANGE",
    year: 2016,
    img: "./img/doctor_strange_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/doctor-strange-2016_cwkoz4lnw/k8e0eqz-full-movie-free-online",
  },
  {
    id: 15,
    name: "GUARDIANS OF THE GALAXY VOL. 2",
    year: 2017,
    img: "./img/guardians_of_the_galaxy_2.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/guardians-of-the-galaxy-vol-2-2017_cwkozvo0j/k8e0dme-full-movie-free-online",
  },
  {
    id: 16,
    name: "SPIDERMAN:HOMECOMING",
    year: 2017,
    img: "./img/homecoming.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/spider-man-homecoming-2017_cw5ybzyae/5jdn6lw-full-movie-free-online",
  },
  {
    id: 17,
    name: "THOR:RAGNAROK",
    year: 2017,
    img: "./img/thor_ragnarok.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/thor-ragnarok-2017_cwbkodkv7/bxe0yjm-full-movie-free-online",
  },
  {
    id: 18,
    name: "BLACK PANTHER",
    year: 2018,
    img: "./img/black_panther.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/black-panther-2018_cw0dn0bzb/0mz8q5a-full-movie-free-online",
  },
  {
    id: 19,
    name: "AVENGERS INFINITY WAR",
    year: 2018,
    img: "./img/inifinity_war.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/avengers-infinity-war-2018_cwjnv5lxd/jke0one-full-movie-free-online",
  },
  {
    id: 20,
    name: "ANT-MAN AND THE WASP",
    year: 2018,
    img: "./img/ant_man_and_the_wasp.png",
    link: "https://ww3.d123movies.to/watch-movie-2/ant-man-and-the-wasp-2018_cwnjw3yme/n4ka7ew-full-movie-free-online",
  },
  {
    id: 21,
    name: "CAPTAIN MARVEL",
    year: 2019,
    img: "./img/captain_marvel.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/captain-marvel-2019_cw4y095o5/45wx77x-full-movie-free-online",
  },
  {
    id: 22,
    name: "AVENGERS END GAME",
    year: 2019,
    img: "./img/end_game_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/avengers-endgame-2019_cw8yoz0ew/80kjx3z-full-movie-free-online",
  },
  {
    id: 23,
    name: "SPIDER-MAN FAR FROM HOME",
    year: 2019,
    img: "./img/far_from_home.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/spider-man-far-from-home-2019_cwqqyx48e/q487bk9-full-movie-free-online",
  },
  {
    id: 24,
    name: "BLACK WIDOW",
    year: 2021,
    img: "./img/black_widow_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/black-widow-2021_cwbkoow5v/bxenab6-full-movie-free-online",
  },
  {
    id: 25,
    name: "SHANG-CHI AND THE LEGEND OF THE TEN RINGS",
    year: 2021,
    img: "./img/legend_of_the_ten_rings.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/shang-chi-and-the-legend-of-the-ten-rings-2021_cwm0l9vqz/m86obw4-full-movie-free-online",
  },
  {
    id: 26,
    name: "ETERNALS",
    year: 2021,
    img: "./img/eternals.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/eternals-2021_cwd48355j/d5eaj3y-full-movie-free-online",
  },
  {
    id: 27,
    name: "SPIDER-MAN NO WAY HOME",
    year: 2021,
    img: "./img/no_way_home_1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/spider-man-no-way-home-2021_cw6m6vqnm/63byl9v-full-movie-free-online",
  },
];

export default movies;
