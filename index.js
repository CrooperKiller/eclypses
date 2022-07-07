import express from 'express';
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  //res.send('Epic Stuff');
  res.send(users);
});

app.post('/add', function (req, res) {
  users.push({
    id: 31,
    first_name: 'David',
    last_name: 'Drake',
    email: 'david@rakuten.co.jp',
    gender: 'Male',
  });
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

let users = [
  {
    id: 1,
    first_name: 'Willey',
    last_name: 'Mogie',
    email: 'wmogie0@reverbnation.com',
    gender: 'Male',
  },
  {
    id: 2,
    first_name: 'Veronike',
    last_name: 'Scrivener',
    email: 'vscrivener1@dropbox.com',
    gender: 'Female',
  },
  {
    id: 3,
    first_name: 'Reece',
    last_name: 'Wheelhouse',
    email: 'rwheelhouse2@msu.edu',
    gender: 'Male',
  },
  {
    id: 4,
    first_name: 'Shaun',
    last_name: 'Corke',
    email: 'scorke3@taobao.com',
    gender: 'Male',
  },
  {
    id: 5,
    first_name: 'Nevil',
    last_name: 'Ausiello',
    email: 'nausiello4@booking.com',
    gender: 'Male',
  },
  {
    id: 6,
    first_name: 'Mac',
    last_name: 'Fairburn',
    email: 'mfairburn5@topsy.com',
    gender: 'Male',
  },
  {
    id: 7,
    first_name: 'Charley',
    last_name: 'McKenney',
    email: 'cmckenney6@theatlantic.com',
    gender: 'Male',
  },
  {
    id: 8,
    first_name: 'Minette',
    last_name: 'Somerlie',
    email: 'msomerlie7@clickbank.net',
    gender: 'Female',
  },
  {
    id: 9,
    first_name: 'Brenn',
    last_name: 'Furlonge',
    email: 'bfurlonge8@ovh.net',
    gender: 'Female',
  },
  {
    id: 10,
    first_name: 'Baxy',
    last_name: 'Benezet',
    email: 'bbenezet9@pen.io',
    gender: 'Male',
  },
  {
    id: 11,
    first_name: 'Niccolo',
    last_name: 'Volkes',
    email: 'nvolkesa@businessweek.com',
    gender: 'Bigender',
  },
  {
    id: 12,
    first_name: 'Fredric',
    last_name: 'Hallyburton',
    email: 'fhallyburtonb@cmu.edu',
    gender: 'Male',
  },
  {
    id: 13,
    first_name: 'Yehudit',
    last_name: 'Piers',
    email: 'ypiersc@123-reg.co.uk',
    gender: 'Male',
  },
  {
    id: 14,
    first_name: 'Marlon',
    last_name: 'Simms',
    email: 'msimmsd@mediafire.com',
    gender: 'Male',
  },
  {
    id: 15,
    first_name: 'Thebault',
    last_name: 'Rutgers',
    email: 'trutgerse@linkedin.com',
    gender: 'Male',
  },
  {
    id: 16,
    first_name: 'Chrissie',
    last_name: 'Potell',
    email: 'cpotellf@unesco.org',
    gender: 'Male',
  },
  {
    id: 17,
    first_name: 'Frankie',
    last_name: 'Hebard',
    email: 'fhebardg@51.la',
    gender: 'Male',
  },
  {
    id: 18,
    first_name: 'Englebert',
    last_name: 'Shoosmith',
    email: 'eshoosmithh@nyu.edu',
    gender: 'Male',
  },
  {
    id: 19,
    first_name: 'Clarance',
    last_name: 'Routley',
    email: 'croutleyi@creativecommons.org',
    gender: 'Male',
  },
  {
    id: 20,
    first_name: 'Clementina',
    last_name: 'de Guerre',
    email: 'cdeguerrej@smh.com.au',
    gender: 'Female',
  },
  {
    id: 21,
    first_name: 'Augustus',
    last_name: 'Le Breton De La Vieuville',
    email: 'alebretondelavieuvillek@vimeo.com',
    gender: 'Bigender',
  },
  {
    id: 22,
    first_name: 'Ignacio',
    last_name: 'Cleverley',
    email: 'icleverleyl@thetimes.co.uk',
    gender: 'Male',
  },
  {
    id: 23,
    first_name: 'Margareta',
    last_name: 'Hember',
    email: 'mhemberm@google.cn',
    gender: 'Female',
  },
  {
    id: 24,
    first_name: 'Cori',
    last_name: 'Balogh',
    email: 'cbaloghn@cnet.com',
    gender: 'Male',
  },
  {
    id: 25,
    first_name: 'Elise',
    last_name: 'Goathrop',
    email: 'egoathropo@mozilla.com',
    gender: 'Female',
  },
  {
    id: 26,
    first_name: 'Saw',
    last_name: 'Gheraldi',
    email: 'sgheraldip@simplemachines.org',
    gender: 'Male',
  },
  {
    id: 27,
    first_name: 'Drew',
    last_name: 'Chesman',
    email: 'dchesmanq@wired.com',
    gender: 'Male',
  },
  {
    id: 28,
    first_name: 'Albie',
    last_name: 'Shay',
    email: 'ashayr@noaa.gov',
    gender: 'Male',
  },
  {
    id: 29,
    first_name: 'Mariam',
    last_name: 'Glencrash',
    email: 'mglencrashs@wordpress.org',
    gender: 'Female',
  },
  {
    id: 30,
    first_name: 'Aleen',
    last_name: 'Darwin',
    email: 'adarwint@rakuten.co.jp',
    gender: 'Female',
  },
];
