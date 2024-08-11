import type { GithubRepo, GithubUser } from '@/types/apiTypes';
declare class GithubApi {
    private baseUrl;
    constructor();
    getUser(username: string): Promise<GithubUser>;
    getRepos(username: string): Promise<GithubRepo[]>;
    getCommits(username: string): Promise<any>;
}
declare const _default: GithubApi;
export default _default;
