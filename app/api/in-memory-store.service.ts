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
        'showtime': ''
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
