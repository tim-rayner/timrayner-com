import { useQuery } from '@tanstack/vue-query';
import GithubApi from '@/api/GithubApi';
export function useUser(username) {
    return useQuery({
        queryKey: ['user', username],
        queryFn: () => GithubApi.getUser(username)
    });
}
export function useRepos(username) {
    return useQuery({
        queryKey: ['repos', username],
        queryFn: () => GithubApi.getRepos(username)
    });
}
export function useCommits(username) {
    return useQuery({
        queryKey: ['commits', username],
        queryFn: () => GithubApi.getCommits(username)
    });
}
