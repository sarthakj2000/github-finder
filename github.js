class Github {
  constructor() {
    this.client_id = '528a012d6c01395e17e6';
    this.client_secret = 'b58c2f62dfbc35bd8c8d67b3fdcf7b979f948b20';
    this.repos_count = 5;
    this.repos_sort = 'created_asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
