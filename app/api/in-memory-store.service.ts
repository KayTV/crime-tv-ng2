export class InMemoryStoreService {

  createDb() {
    let tv_shows = [
      {
        'id': 1,
        'name': 'Bones',
        'description': '',
        'showtime': ''
      },
      {
        'id': 2,
        'name': 'Criminal Minds',
        'description': '',
        'showtime': 'usually night time, sometimes all day marathons'
      },
      {
        'id': 3,
        'name': 'NCIS',
        'description': '',
        'showtime': ''
      }
    ];
    let research = [
      {
        'id': 1,
        'name': ''
      },
      {
        'id': 2,
        'name': ''
      }
    ]
    return { tv_shows, research };
  }
}
