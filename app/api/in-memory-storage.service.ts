export class InMemoryStoreService {

  creatDb() {
    let tv_shows = [
      {
        'id': 1,
        'name': 'Bones'
      },
      {
        'id': 2,
        'name': 'Criminal Minds'
      },
      {
        'id': 3,
        'name': 'NCIS'
      }
    ];
    return { tv_shows };
  }
}
