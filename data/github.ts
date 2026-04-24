import { profile } from "@/data/profile";

export type GitHubProfile = {
  login: string;
  name: string | null;
  avatarUrl: string;
  htmlUrl: string;
  bio: string | null;
  publicRepos: number;
  followers: number;
};

export type GitHubLanguage = {
  name: string;
  percentage: number;
  bytes: number;
};

export async function getGitHubProfile(): Promise<GitHubProfile | null> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUsername}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      login: string;
      name: string | null;
      avatar_url: string;
      html_url: string;
      bio: string | null;
      public_repos: number;
      followers: number;
    };

    return {
      login: data.login,
      name: data.name,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
      bio: data.bio,
      publicRepos: data.public_repos,
      followers: data.followers,
    };
  } catch {
    return null;
  }
}

export async function getGitHubLanguages(): Promise<GitHubLanguage[]> {
  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
      {
        cache: "no-store",
      },
    );

    if (!reposResponse.ok) {
      return [];
    }

    const repos = (await reposResponse.json()) as {
      fork: boolean;
      languages_url: string;
    }[];

    const ownRepos = repos.filter((repo) => !repo.fork).slice(0, 20);
    const languageResponses = await Promise.all(
      ownRepos.map(async (repo): Promise<Record<string, number>> =>
        fetch(repo.languages_url, { cache: "no-store" }).then((response) => {
          if (!response.ok) {
            return {};
          }

          return response.json() as Promise<Record<string, number>>;
        }),
      ),
    );

    const totals = new Map<string, number>();

    for (const languages of languageResponses) {
      for (const [language, bytes] of Object.entries(languages)) {
        totals.set(language, (totals.get(language) || 0) + bytes);
      }
    }

    const totalBytes = Array.from(totals.values()).reduce(
      (total, bytes) => total + bytes,
      0,
    );

    if (totalBytes === 0) {
      return [];
    }

    return Array.from(totals.entries())
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: Math.round((bytes / totalBytes) * 100),
      }))
      .sort((a, b) => b.bytes - a.bytes)
      .slice(0, 5);
  } catch {
    return [];
  }
}
