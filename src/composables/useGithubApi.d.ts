export declare function useUser(username: string): import("@tanstack/vue-query").UseQueryReturnType<import("../types/apiTypes").GithubUser, Error>;
export declare function useRepos(username: string): import("@tanstack/vue-query").UseQueryReturnType<import("../types/apiTypes").GithubRepo[], Error>;
export declare function useCommits(username: string): import("@tanstack/vue-query").UseQueryReturnType<any, Error>;
