import axios from 'axios';
class GithubApi {
    baseUrl;
    constructor() {
        this.baseUrl = 'https://api.github.com';
    }
    async getUser(username) {
        const response = await axios.get(`${this.baseUrl}/users/${username}`);
        return response.data;
    }
    async getRepos(username) {
        const response = await axios.get(`${this.baseUrl}/users/${username}/repos`);
        //sort response data from updated_at field in descending order
        response.data.sort((a, b) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        });
        return response.data.slice(0, 5);
    }
    // Add more endpoints as needed
    //Add a new endpoint to show the users commits across all repositories
    async getCommits(username) {
        const response = await axios.get(`${this.baseUrl}/users/${username}/events`);
        //filter out all events that are not push events
        const pushEvents = response.data.filter((event) => {
            return event.type === 'PushEvent';
        });
        //map the push events to the commits
        const commits = pushEvents.map((event) => {
            return event.payload.commits;
        });
        //flatten the array of commits
        const flattenedCommits = commits.flat();
        return flattenedCommits;
    }
}
export default new GithubApi();
